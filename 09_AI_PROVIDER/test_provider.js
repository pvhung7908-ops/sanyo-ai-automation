const fs = require('fs');
const config = require('../10_API_CONFIG/API_CONFIG_MASTER.json');
const { describeRoutes } = require('./provider_mapping');

let failed = 0;

function check(condition, message) {
  console.log((condition ? 'PASS' : 'FAIL') + ' - ' + message);
  if (!condition) failed += 1;
}

[
  '09_AI_PROVIDER/AI_PROVIDER_MASTER.md',
  '09_AI_PROVIDER/PROVIDER_REGISTRY.md',
  '09_AI_PROVIDER/AI_ROUTER.md',
  '09_AI_PROVIDER/API_CONFIG.md',
  '09_AI_PROVIDER/PROVIDER_TEST.md'
].forEach(file => check(fs.existsSync(file), file));

check(config.security.keys_from_environment === true, 'credentials are read from the environment only');
check(config.security.commit_secrets === false, 'credential commits are forbidden');
check(config.providers.openai.enabled === false, 'OpenAI is disabled until explicitly audited');
check(config.providers.anthropic.enabled === false, 'Anthropic is disabled until explicitly audited');
check(config.providers.google.enabled === false, 'Google/VEO is disabled until explicitly audited');
check(config.providers.google.api_key_env === 'GOOGLE_API_KEY', 'Google credential variable is consistent');

const routes = describeRoutes();
check(routes.length === 4, 'readiness is calculated for four bridge task types');
check(routes.every(route => route.state === 'NOT_CONNECTED'), 'current provider state is fail-closed');
check(routes.every(route => route.model === null), 'no model is claimed from an absent runtime configuration');

if (failed) {
  console.log('SANYO AI PROVIDER READINESS = FAIL');
  process.exitCode = 1;
} else {
  console.log('SANYO AI PROVIDER READINESS = PASS');
  console.log('MODE = OFFLINE / INTEGRATION_READY; no API request was made.');
}
