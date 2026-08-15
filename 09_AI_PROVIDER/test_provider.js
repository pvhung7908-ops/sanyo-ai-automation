const fs = require('fs');

const files = [
  '09_AI_PROVIDER/AI_PROVIDER_MASTER.md',
  '09_AI_PROVIDER/PROVIDER_REGISTRY.md',
  '09_AI_PROVIDER/AI_ROUTER.md',
  '09_AI_PROVIDER/API_CONFIG.md',
  '09_AI_PROVIDER/PROVIDER_TEST.md'
];

console.log('========================================');
console.log('SANYO AI PROVIDER OFFLINE TEST');
console.log('========================================');

let failed = false;

for (const file of files) {
  if (fs.existsSync(file)) {
    console.log(`PASS - ${file}`);
  } else {
    console.log(`FAIL - ${file}`);
    failed = true;
  }
}

const content = files
  .map(f => fs.readFileSync(f, 'utf8'))
  .join('\n');

const forbidden = [
  'sk-',
  'AIza',
  'api_key=',
  'API_KEY='
];

for (const token of forbidden) {
  if (content.includes(token)) {
    console.log(`FAIL - possible secret detected: ${token}`);
    failed = true;
  }
}

const required = [
  'TEXT',
  'REASONING',
  'IMAGE',
  'VIDEO',
  'VOICE',
  'KNOWLEDGE',
  'FALLBACK',
  'HUMAN REVIEW',
  'QUALITY GATE'
];

for (const token of required) {
  if (content.includes(token)) {
    console.log(`PASS - capability/rule: ${token}`);
  } else {
    console.log(`FAIL - missing: ${token}`);
    failed = true;
  }
}

console.log('========================================');

if (failed) {
  console.log('SANYO AI PROVIDER = FAIL');
  process.exit(1);
}

console.log('SANYO AI PROVIDER = PASS');
console.log('OFFLINE MODE = PASS');
console.log('NO API KEY REQUIRED');
console.log('n8n = NOT REQUIRED');
console.log('VPN = NOT REQUIRED');
console.log('========================================');
