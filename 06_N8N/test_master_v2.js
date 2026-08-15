const fs = require('fs');

const MASTER = '06_N8N/SANYO_AI_AUTOMATION_MASTER.json';

console.log('');
console.log('==========================================');
console.log(' SANYO AI AUTOMATION v2 - OFFLINE TEST');
console.log('==========================================');

let workflow;

try {
  workflow = JSON.parse(fs.readFileSync(MASTER, 'utf8'));
  console.log('PASS 01 - MASTER JSON đọc được');
} catch (err) {
  console.error('FAIL 01 - MASTER JSON không hợp lệ');
  process.exit(1);
}

const nodes = workflow.nodes || [];
const connections = workflow.connections || {};

const nodeNames = nodes.map(n => n.name);

function requireNode(name) {
  if (!nodeNames.includes(name)) {
    console.error(`FAIL - Thiếu node: ${name}`);
    process.exit(1);
  }
  console.log(`PASS - Node: ${name}`);
}

console.log('');
console.log('=== CHECK CORE PIPELINE ===');

[
  'START',
  '01 CONTENT INTAKE',
  '02 CUSTOMER INSIGHT',
  '03 CONTENT GENERATION',
  '04 VIDEO BRIEF',
  '05 PROMPT ASSEMBLY',
  '06 ASSET SELECTION',
  '07 VEO PRODUCTION',
  '08 QUALITY GATE',
  'QUALITY PASS?',
  '09 HUMAN REVIEW',
  '10 CALIBRATION',
  '11 OUTPUT',
  '12 MEASUREMENT',
  '13 LEARNING LOOP',
  'QUALITY FAIL / RETRY'
].forEach(requireNode);

console.log('');
console.log('=== CHECK CALIBRATION GATE ===');

const reviewIndex = nodeNames.indexOf('09 HUMAN REVIEW');
const calibrationIndex = nodeNames.indexOf('10 CALIBRATION');
const outputIndex = nodeNames.indexOf('11 OUTPUT');

if (reviewIndex < 0 || calibrationIndex < 0 || outputIndex < 0) {
  console.error('FAIL - Không tìm thấy Review / Calibration / Output');
  process.exit(1);
}

if (!(reviewIndex < calibrationIndex && calibrationIndex < outputIndex)) {
  console.error('FAIL - Thứ tự REVIEW -> CALIBRATION -> OUTPUT sai');
  process.exit(1);
}

console.log('PASS - HUMAN REVIEW -> CALIBRATION -> OUTPUT');

console.log('');
console.log('=== CHECK QUALITY GATE ===');

const qualityNode = nodes.find(n => n.name === '08 QUALITY GATE');

if (!qualityNode) {
  console.error('FAIL - Không có QUALITY GATE');
  process.exit(1);
}

const qualityCode = qualityNode.parameters?.jsCode || '';

[
  'accuracy',
  'brand_consistency',
  'customer_relevance',
  'clarity',
  'trustworthiness',
  'legal_safety',
  'cta',
  'continuity'
].forEach(check => {
  if (!qualityCode.includes(check)) {
    console.error(`FAIL - QUALITY GATE thiếu: ${check}`);
    process.exit(1);
  }
});

console.log('PASS - 8 tiêu chí Quality Gate tồn tại');

console.log('');
console.log('=== CHECK CALIBRATION CONTENT ===');

const calibrationNode = nodes.find(n => n.name === '10 CALIBRATION');
const calibrationCode = calibrationNode?.parameters?.jsCode || '';

[
  'brand_check',
  'customer_check',
  'visual_check',
  'message_check',
  'final_adjustment'
].forEach(check => {
  if (!calibrationCode.includes(check)) {
    console.error(`FAIL - CALIBRATION thiếu: ${check}`);
    process.exit(1);
  }
});

console.log('PASS - Calibration có đầy đủ 5 lớp kiểm tra');

console.log('');
console.log('=== CHECK OUTPUT ===');

const outputNode = nodes.find(n => n.name === '11 OUTPUT');
const outputCode = outputNode?.parameters?.jsCode || '';

[
  'run_id',
  'customer_insight',
  'content',
  'video_brief',
  'prompts',
  'assets',
  'quality_gate',
  'calibration',
  'production'
].forEach(field => {
  if (!outputCode.includes(field)) {
    console.error(`FAIL - OUTPUT thiếu: ${field}`);
    process.exit(1);
  }
});

console.log('PASS - OUTPUT chứa dữ liệu cần thiết');

console.log('');
console.log('=== CHECK MEASUREMENT ===');

const measurementNode = nodes.find(n => n.name === '12 MEASUREMENT');
const measurementCode = measurementNode?.parameters?.jsCode || '';

[
  'views',
  'watch_time',
  'completion_rate',
  'engagement_rate',
  'leads',
  'contracts',
  'learning_loop'
].forEach(metric => {
  if (!measurementCode.includes(metric)) {
    console.error(`FAIL - MEASUREMENT thiếu: ${metric}`);
    process.exit(1);
  }
});

console.log('PASS - Measurement + Learning Loop tồn tại');

console.log('');
console.log('=== CHECK RETRY PATH ===');

const retryNode = nodes.find(n => n.name === 'QUALITY FAIL / RETRY');

if (!retryNode) {
  console.error('FAIL - Không có QUALITY FAIL / RETRY');
  process.exit(1);
}

const retryCode = retryNode.parameters?.jsCode || '';

if (!retryCode.includes('never publish failed output')) {
  console.error('FAIL - Retry policy không chặn failed output');
  process.exit(1);
}

console.log('PASS - Failed output bị chặn');

console.log('');
console.log('=== CHECK CONNECTIONS ===');

const requiredConnections = [
  ['START', '01 CONTENT INTAKE'],
  ['01 CONTENT INTAKE', '02 CUSTOMER INSIGHT'],
  ['02 CUSTOMER INSIGHT', '03 CONTENT GENERATION'],
  ['03 CONTENT GENERATION', '04 VIDEO BRIEF'],
  ['04 VIDEO BRIEF', '05 PROMPT ASSEMBLY'],
  ['05 PROMPT ASSEMBLY', '06 ASSET SELECTION'],
  ['06 ASSET SELECTION', '07 VEO PRODUCTION'],
  ['07 VEO PRODUCTION', '08 QUALITY GATE'],
  ['08 QUALITY GATE', 'QUALITY PASS?'],
  ['09 HUMAN REVIEW', '10 CALIBRATION'],
  ['10 CALIBRATION', '11 OUTPUT'],
  ['11 OUTPUT', '12 MEASUREMENT'],
  ['12 MEASUREMENT', '13 LEARNING LOOP']
];

for (const [from, to] of requiredConnections) {
  const target = JSON.stringify(connections[from] || {});
  if (!target.includes(to)) {
    console.error(`FAIL - Connection thiếu: ${from} -> ${to}`);
    process.exit(1);
  }
}

console.log('PASS - Core connections tồn tại');

console.log('');
console.log('==========================================');
console.log(' SANYO AI AUTOMATION v2 = PASS');
console.log('==========================================');
console.log('');
console.log('CALIBRATION GATE = PASS');
console.log('FINAL OUTPUT GATE = PASS');
console.log('QUALITY FAIL RETRY = PASS');
console.log('MEASUREMENT LOOP = PASS');
console.log('');
console.log('OUTPUT = ALLOWED');
console.log('');
