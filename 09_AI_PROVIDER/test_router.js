const { routeJob } = require('./provider_mapping');

const expected = {
  ARTICLE: 'TEXT',
  SOCIAL: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

let failed = 0;

for (const [taskType, capability] of Object.entries(expected)) {
  const route = routeJob(taskType);
  const valid = route.capability === capability && route.state === 'NOT_CONNECTED';
  console.log((valid ? 'PASS' : 'FAIL') + ' - ' + taskType + ' -> ' + capability + ' (' + route.state + ')');
  if (!valid) failed += 1;
}

const unknown = routeJob('UNKNOWN');
const unknownBlocked = unknown.state === 'NOT_CONNECTED' && unknown.reason === 'UNMAPPED_CAPABILITY';
console.log((unknownBlocked ? 'PASS' : 'FAIL') + ' - unknown capability is blocked');
if (!unknownBlocked) failed += 1;

if (failed) {
  console.log('SANYO AI ROUTER = FAIL');
  process.exitCode = 1;
} else {
  console.log('SANYO AI ROUTER = PASS');
  console.log('ROUTING = VALID; PROVIDERS = NOT_CONNECTED');
}
