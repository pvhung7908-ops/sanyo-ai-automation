const fs = require('fs');

const MASTER = '06_N8N/SANYO_AI_AUTOMATION_MASTER.json';
const CONTRACT = '06_N8N/SYSTEM1_BRIDGE_CONTRACT.json';
let failed = 0;

function pass(message) {
  console.log('PASS - ' + message);
}

function fail(message) {
  console.error('FAIL - ' + message);
  failed += 1;
}

function check(condition, message) {
  condition ? pass(message) : fail(message);
}

let workflow;
let contract;

try {
  workflow = JSON.parse(fs.readFileSync(MASTER, 'utf8'));
  pass('bridge workflow JSON parses');
} catch (error) {
  fail('bridge workflow JSON parses');
}

try {
  contract = JSON.parse(fs.readFileSync(CONTRACT, 'utf8'));
  pass('bridge contract JSON parses');
} catch (error) {
  fail('bridge contract JSON parses');
}

if (workflow && contract) {
  check(contract.contract_version === '1.1', 'contract version is 1.1');
  check(
    ['ARTICLE', 'SOCIAL', 'IMAGE', 'VIDEO'].every(type => contract.job.task_types.includes(type)),
    'contract supports all four System 1 job types'
  );

  const nodes = workflow.nodes || [];
  const nodeByName = new Map(nodes.map(node => [node.name, node]));
  const nodeNames = [
    'SYSTEM 1 JOB INTAKE',
    '01 CONTRACT VALIDATION',
    'CONTRACT VALID?',
    'INVALID CONTRACT RESULT',
    '02 CHARACTER LOCK',
    'CHARACTER LOCKED?',
    '03 PROVIDER READINESS',
    'PROVIDER EXECUTOR READY?',
    'PROVIDER NOT CONNECTED RESULT',
    'PROVIDER EXECUTOR NOT DEPLOYED RESULT',
    'SYSTEM 2 RESULT RETURN'
  ];

  nodeNames.forEach(name => check(nodeByName.has(name), 'node exists: ' + name));
  check(nodeByName.get('SYSTEM 1 JOB INTAKE')?.type === 'n8n-nodes-base.webhook', 'System 1 enters through a webhook');
  check(nodeByName.get('SYSTEM 2 RESULT RETURN')?.type === 'n8n-nodes-base.respondToWebhook', 'System 2 returns through the same request');

  const validationCode = nodeByName.get('01 CONTRACT VALIDATION')?.parameters?.jsCode || '';
  [
    'ARTICLE',
    'SOCIAL',
    'IMAGE',
    'VIDEO',
    'content.approval_status',
    'source_refs',
    'MISSING_APPROVED_ASSET',
    'MISSING_APPROVED_CHARACTER',
    'shot_plan_status'
  ].forEach(token => check(validationCode.includes(token), 'validation enforces ' + token));

  const lockCode = nodeByName.get('02 CHARACTER LOCK')?.parameters?.jsCode || '';
  check(lockCode.includes("status: 'LOCKED'"), 'approved character reference produces a character lock');
  check(lockCode.includes('qc_required_per_shot: true'), 'locked character requires per-shot identity QC');

  const allCode = nodes.map(node => node.parameters?.jsCode || '').join('\n');
  check(!allCode.includes("ready_for_generation: true"), 'workflow does not declare generation ready without evidence');
  check(!allCode.includes("status: 'FINAL'"), 'workflow does not fabricate final output');
  check(allCode.includes('PROVIDER_NOT_CONNECTED'), 'workflow fails closed when a provider is unavailable');
  check(allCode.includes('PROVIDER_EXECUTOR_NOT_DEPLOYED'), 'workflow cannot claim execution when no executor exists');

  const connections = workflow.connections || {};
  const hasConnection = (from, to) => JSON.stringify(connections[from] || {}).includes('"node":"' + to + '"') || JSON.stringify(connections[from] || {}).includes('"node": "' + to + '"');
  [
    ['SYSTEM 1 JOB INTAKE', '01 CONTRACT VALIDATION'],
    ['01 CONTRACT VALIDATION', 'CONTRACT VALID?'],
    ['CONTRACT VALID?', '02 CHARACTER LOCK'],
    ['02 CHARACTER LOCK', 'CHARACTER LOCKED?'],
    ['CHARACTER LOCKED?', '03 PROVIDER READINESS'],
    ['03 PROVIDER READINESS', 'PROVIDER EXECUTOR READY?'],
    ['PROVIDER NOT CONNECTED RESULT', 'SYSTEM 2 RESULT RETURN']
  ].forEach(([from, to]) => check(hasConnection(from, to), 'connection ' + from + ' -> ' + to));
}

if (failed) {
  console.error('Bridge workflow test failed: ' + failed + ' assertion(s).');
  process.exitCode = 1;
} else {
  console.log('SANYO BRIDGE WORKFLOW = PASS');
  console.log('MODE = INTEGRATION_READY (no provider executor invoked)');
}
