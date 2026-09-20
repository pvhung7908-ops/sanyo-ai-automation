const config = require('../10_API_CONFIG/API_CONFIG_MASTER.json');
const { TASK_CAPABILITY } = require('../12_LOCAL_RUNTIME/bridge_contract');

const CAPABILITY_PROVIDER = {
  TEXT: 'openai',
  REASONING: 'openai',
  IMAGE: 'google',
  VIDEO: 'google'
};

function requiredModelEnv(provider, capability) {
  if (capability === 'VIDEO' && provider.video_model_env) return provider.video_model_env;
  if (capability === 'IMAGE' && provider.image_model_env) return provider.image_model_env;
  return provider.model_env;
}

function providerReadiness(providerId, capability, env = process.env) {
  const provider = config.providers[providerId];
  if (!provider) {
    return { state: 'NOT_CONNECTED', provider: null, model: null, reason: 'UNKNOWN_PROVIDER' };
  }

  const modelEnv = requiredModelEnv(provider, capability);
  const hasCredential = Boolean(env[provider.api_key_env]);
  const model = modelEnv ? env[modelEnv] || null : null;

  if (!provider.enabled) {
    return {
      state: 'NOT_CONNECTED',
      provider: providerId,
      model,
      reason: 'PROVIDER_DISABLED',
      credential_configured: hasCredential
    };
  }
  if (!hasCredential) {
    return { state: 'NOT_CONNECTED', provider: providerId, model, reason: 'MISSING_CREDENTIAL', credential_configured: false };
  }
  if (!model) {
    return { state: 'NOT_CONNECTED', provider: providerId, model: null, reason: 'MISSING_MODEL', credential_configured: true };
  }

  return {
    state: 'READY_FOR_EXECUTOR',
    provider: providerId,
    model,
    reason: 'CREDENTIAL_AND_MODEL_CONFIGURED',
    credential_configured: true
  };
}

function routeJob(taskType, env = process.env) {
  const capability = TASK_CAPABILITY[taskType];
  const providerId = CAPABILITY_PROVIDER[capability];
  const readiness = providerId
    ? providerReadiness(providerId, capability, env)
    : { state: 'NOT_CONNECTED', provider: null, model: null, reason: 'UNMAPPED_CAPABILITY' };

  return { task_type: taskType, capability: capability || null, ...readiness };
}

function describeRoutes(env = process.env) {
  return Object.keys(TASK_CAPABILITY).map(taskType => routeJob(taskType, env));
}

if (require.main === module) {
  console.log('=== SANYO AI PROVIDER READINESS ===');
  for (const route of describeRoutes()) {
    console.log(`${route.task_type}: ${route.state} (${route.provider || 'none'}; ${route.reason})`);
  }
  console.log('No provider call is made by this command.');
}

module.exports = { CAPABILITY_PROVIDER, providerReadiness, routeJob, describeRoutes };
