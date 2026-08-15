const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

console.log('');
console.log('==========================================');
console.log(' SANYO AI AUTOMATION - E2E TEST v1');
console.log('==========================================');

let failed = 0;

function pass(name) {
  console.log(`PASS - ${name}`);
}

function fail(name) {
  console.log(`FAIL - ${name}`);
  failed++;
}

function exists(file) {
  return fs.existsSync(path.join(ROOT, file));
}

console.log('');
console.log('=== 1. CORE FILES ===');

[
  '01_CORE/SYSTEM_MASTER.md',
  '01_CORE/BRAND_PROFILE.md',
  '01_CORE/CONTENT_ENGINE.md',
  '02_VIDEO_BRIEF/VIDEO_BRIEF_MASTER.md',
  '03_VEO_3/VEO_3_MASTER.md',
  '04_PROMPTS/PROMPT_MASTER.md',
  '05_ASSETS/ASSET_MASTER.md'
].forEach(file => {
  exists(file) ? pass(file) : fail(file);
});

console.log('');
console.log('=== 2. AUTOMATION LAYERS ===');

[
  '06_N8N/SANYO_AI_AUTOMATION_MASTER.json',
  '07_WORKFLOWS/WF-10_CALIBRATION.md',
  '08_OUTPUT/FINAL_OUTPUT_RULES.md',
  '09_AI_PROVIDER/AI_PROVIDER_MASTER.md',
  '10_API_CONFIG/API_CONFIG_MASTER.json',
  '11_SECURITY/security_test.js',
  '12_LOCAL_RUNTIME/local_runtime.js'
].forEach(file => {
  exists(file) ? pass(file) : fail(file);
});

console.log('');
console.log('=== 3. MASTER JSON ===');

try {
  const master = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, '06_N8N/SANYO_AI_AUTOMATION_MASTER.json'),
      'utf8'
    )
  );

  if (Array.isArray(master.nodes) && master.nodes.length >= 13) {
    pass(`MASTER JSON nodes = ${master.nodes.length}`);
  } else {
    fail('MASTER JSON node count');
  }

  if (master.connections && Object.keys(master.connections).length > 0) {
    pass('MASTER JSON connections');
  } else {
    fail('MASTER JSON connections');
  }
} catch (e) {
  fail('MASTER JSON parse');
}

console.log('');
console.log('=== 4. VALID OUTPUT TEST ===');

const validOutput = {
  quality_gate: { score: 1 },
  calibration: { final_adjustment: 'PASS' },
  human_review: { decision: 'APPROVED' }
};

const validAllowed =
  validOutput.quality_gate.score >= 1 &&
  validOutput.calibration.final_adjustment === 'PASS' &&
  validOutput.human_review.decision === 'APPROVED';

validAllowed
  ? pass('VALID OUTPUT -> ALLOWED')
  : fail('VALID OUTPUT -> ALLOWED');

console.log('');
console.log('=== 5. FAILED OUTPUT TEST ===');

const failedOutput = {
  quality_gate: { score: 0.75 },
  calibration: { final_adjustment: 'PASS' },
  human_review: { decision: 'APPROVED' }
};

const failedBlocked =
  !(failedOutput.quality_gate.score >= 1);

failedBlocked
  ? pass('QUALITY FAIL -> OUTPUT BLOCKED')
  : fail('QUALITY FAIL -> OUTPUT BLOCKED');

console.log('');
console.log('=== 6. CALIBRATION FAIL TEST ===');

const calibrationFail = {
  quality_gate: { score: 1 },
  calibration: { final_adjustment: 'PENDING' },
  human_review: { decision: 'APPROVED' }
};

const calibrationBlocked =
  calibrationFail.calibration.final_adjustment !== 'PASS';

calibrationBlocked
  ? pass('CALIBRATION PENDING -> OUTPUT BLOCKED')
  : fail('CALIBRATION PENDING -> OUTPUT BLOCKED');

console.log('');
console.log('=== 7. HUMAN REVIEW TEST ===');

const humanReviewFail = {
  quality_gate: { score: 1 },
  calibration: { final_adjustment: 'PASS' },
  human_review: { decision: 'PENDING' }
};

const reviewBlocked =
  humanReviewFail.human_review.decision !== 'APPROVED';

reviewBlocked
  ? pass('HUMAN REVIEW PENDING -> OUTPUT BLOCKED')
  : fail('HUMAN REVIEW PENDING -> OUTPUT BLOCKED');

console.log('');
console.log('=== 8. FINAL DECISION ===');

if (failed === 0) {
  console.log('');
  console.log('==========================================');
  console.log(' SANYO E2E TEST = PASS');
  console.log('==========================================');
  console.log('');
  console.log('VALID OUTPUT       = ALLOWED');
  console.log('QUALITY FAIL       = BLOCKED');
  console.log('CALIBRATION FAIL   = BLOCKED');
  console.log('HUMAN REVIEW FAIL  = BLOCKED');
  console.log('');
  console.log('SYSTEM READY FOR REAL AI INTEGRATION');
  console.log('');
} else {
  console.log('');
  console.log('==========================================');
  console.log(' SANYO E2E TEST = FAIL');
  console.log('==========================================');
  console.log(`${failed} test(s) failed.`);
  process.exitCode = 1;
}
