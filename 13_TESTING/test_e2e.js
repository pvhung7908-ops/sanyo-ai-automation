const {
  contract,
  validateJob,
  blockedResult,
  validateMeasurementEvent
} = require('../12_LOCAL_RUNTIME/bridge_contract');
const { routeJob } = require('../09_AI_PROVIDER/provider_mapping');

let failed = 0;

function check(condition, message) {
  console.log((condition ? 'PASS' : 'FAIL') + ' - ' + message);
  if (!condition) failed += 1;
}

function baseJob(taskType) {
  return {
    contract_version: contract.contract_version,
    job_id: 'SYV-BRIDGE-' + taskType + '-001',
    task_type: taskType,
    source: {
      system: 'CLAUDE_WORKSPACE',
      project_id: 'sanyo-knowledge',
      task_id: 'task-001'
    },
    content: {
      objective: 'Explain an approved topic accurately.',
      audience: 'Homeowners',
      platform: 'TikTok',
      approval_status: 'APPROVED'
    },
    source_refs: [
      { type: 'FILE', path: '01_BRAIN/03_PRODUCT/VERIFIED_FACTS.md', status: 'VERIFIED' }
    ],
    assets: [],
    return_delivery: { mode: 'SYNC_RESPONSE' }
  };
}

const article = baseJob('ARTICLE');
const validArticle = validateJob(article);
check(validArticle.valid, 'approved ARTICLE contract is accepted');

const articleRoute = routeJob('ARTICLE');
check(articleRoute.state === 'NOT_CONNECTED', 'ARTICLE does not claim a live text provider');
const articleResult = blockedResult(article, 'PROVIDER_NOT_CONNECTED', articleRoute.reason, articleRoute);
check(articleResult.execution.status === 'BLOCKED', 'missing provider blocks ARTICLE execution');
check(articleResult.execution.output_reference === null, 'blocked ARTICLE has no fabricated output');
check(articleResult.quality_evaluation.status === 'NOT_RUN', 'quality is not marked as passed before generation');

const incompleteVideo = baseJob('VIDEO');
incompleteVideo.video = {
  brief_id: 'BRIEF-001',
  shot_plan_status: 'APPROVED',
  shots: [{ shot_id: 'SHOT-01' }]
};
incompleteVideo.character = {
  required: true,
  character_id: 'PERSON_HOMEOWNER_F01_V01',
  reference_asset_id: 'PERSON_HOMEOWNER_F01_V01',
  identity_status: 'NOT_PROVIDED'
};
const invalidVideo = validateJob(incompleteVideo);
check(!invalidVideo.valid, 'VIDEO without an approved character is rejected');
check(invalidVideo.errors.some(error => error.includes('MISSING_APPROVED_CHARACTER')), 'VIDEO reports the character blocker explicitly');

const video = baseJob('VIDEO');
video.video = {
  brief_id: 'BRIEF-002',
  shot_plan_status: 'APPROVED',
  shots: [{ shot_id: 'SHOT-01' }, { shot_id: 'SHOT-02' }]
};
video.character = {
  required: true,
  character_id: 'PERSON_HOMEOWNER_F01_V01',
  reference_asset_id: 'PERSON_HOMEOWNER_F01_V01',
  identity_status: 'APPROVED'
};
video.assets = [{ asset_id: 'PERSON_HOMEOWNER_F01_V01', status: 'APPROVED' }];
const validVideo = validateJob(video);
check(validVideo.valid, 'VIDEO accepts an approved character reference in approved assets');
const videoResult = blockedResult(video, 'PROVIDER_NOT_CONNECTED', 'PROVIDER_DISABLED', routeJob('VIDEO'));
check(videoResult.identity_evaluation.character_lock === 'LOCKED', 'approved video reference creates a character lock');
check(videoResult.identity_evaluation.status === 'NOT_RUN', 'per-shot identity QC waits for generated shots');
check(videoResult.identity_evaluation.per_shot.length === 0, 'no identity QC evidence is fabricated');

const measurement = {
  contract_version: contract.contract_version,
  job_id: video.job_id,
  source: { system: 'SANYO_AI_AUTOMATION' },
  measurement_status: 'MEASURED',
  measured_at: '2026-09-07T00:00:00.000Z',
  metrics: { views: 0, watch_time: 0, completion_rate: 0, engagement_rate: 0, leads: 0, contracts: 0, revenue: 0 }
};
check(validateMeasurementEvent(measurement).valid, 'verified measurement return shape is accepted');

if (failed) {
  console.log('SANYO BRIDGE E2E = FAIL (' + failed + ' assertion(s))');
  process.exitCode = 1;
} else {
  console.log('SANYO BRIDGE E2E = PASS');
  console.log('SYSTEM STATE = INTEGRATION_READY; no external provider was called.');
}
