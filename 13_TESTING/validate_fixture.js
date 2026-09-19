const fs = require('fs');
const path = require('path');
const { validateJob } = require('../12_LOCAL_RUNTIME/bridge_contract');

const fixturePath = process.argv[2];
if (!fixturePath) {
  console.log('Usage: node validate_fixture.js <path-to-fixture.json>');
  process.exitCode = 1;
  return;
}

const raw = fs.readFileSync(path.resolve(__dirname, '..', fixturePath), 'utf8');
const job = JSON.parse(raw);
const result = validateJob(job);

console.log('FIXTURE:', fixturePath);
console.log('VALID:', result.valid);
console.log('ERRORS:', JSON.stringify(result.errors));

process.exitCode = result.valid ? 0 : 1;
