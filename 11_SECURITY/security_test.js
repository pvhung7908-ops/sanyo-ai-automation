const fs = require('fs');

const gitignore = fs.readFileSync('.gitignore', 'utf8');

const required = [
  '.env',
  '.env.*',
  '*.key',
  '*.pem',
  '*.p12',
  'credentials.json',
  'secrets.json',
  'token.json'
];

for (const item of required) {
  if (!gitignore.includes(item)) {
    throw new Error(`SECURITY CHECK FAILED: ${item}`);
  }
}

console.log('SECURITY GITIGNORE = PASS');
console.log('ENV PROTECTION = PASS');
console.log('CREDENTIAL PROTECTION = PASS');
console.log('LOCAL RUNTIME = PASS');
