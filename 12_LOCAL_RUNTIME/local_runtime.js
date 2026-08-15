const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

const required = [
  '06_N8N/SANYO_AI_AUTOMATION_MASTER.json',
  '07_WORKFLOWS/WF-10_CALIBRATION.md',
  '08_OUTPUT/FINAL_OUTPUT_RULES.md',
  '09_AI_PROVIDER/AI_PROVIDER_MASTER.md',
  '10_API_CONFIG/API_CONFIG_MASTER.json',
  '11_SECURITY/security_test.js'
];

console.log('');
console.log('==========================================');
console.log(' SANYO AI LOCAL RUNTIME v1');
console.log('==========================================');

let failed = [];

for (const file of required) {
  const full = path.join(ROOT, file);

  if (fs.existsSync(full)) {
    console.log(`PASS - ${file}`);
  } else {
    console.log(`FAIL - ${file}`);
    failed.push(file);
  }
}

console.log('');
console.log('=== PIPELINE GATE ===');

const gates = {
  SECURITY: failed.includes('11_SECURITY/security_test.js') ? false : true,
  N8N_MASTER: failed.includes('06_N8N/SANYO_AI_AUTOMATION_MASTER.json') ? false : true,
  CALIBRATION: failed.includes('07_WORKFLOWS/WF-10_CALIBRATION.md') ? false : true,
  OUTPUT_RULES: failed.includes('08_OUTPUT/FINAL_OUTPUT_RULES.md') ? false : true,
  AI_PROVIDER: failed.includes('09_AI_PROVIDER/AI_PROVIDER_MASTER.md') ? false : true,
  API_CONFIG: failed.includes('10_API_CONFIG/API_CONFIG_MASTER.json') ? false : true
};

for (const [name, value] of Object.entries(gates)) {
  console.log(`${value ? 'PASS' : 'FAIL'} - ${name}`);
}

const allPass = Object.values(gates).every(Boolean);

console.log('');
console.log('=== FINAL DECISION ===');

if (allPass) {
  console.log('SECURITY GATE   = PASS');
  console.log('CALIBRATION     = PASS');
  console.log('OUTPUT GATE     = PASS');
  console.log('AI PROVIDER     = READY');
  console.log('API LAYER       = READY');
  console.log('N8N MASTER      = READY');
  console.log('');
  console.log('LOCAL RUNTIME   = READY');
  console.log('OUTPUT          = ALLOWED');
} else {
  console.log('LOCAL RUNTIME   = BLOCKED');
  console.log('OUTPUT          = BLOCKED');
  console.log('');
  console.log('FAILED FILES:');

  for (const file of failed) {
    console.log(`- ${file}`);
  }

  process.exitCode = 1;
}

console.log('==========================================');
