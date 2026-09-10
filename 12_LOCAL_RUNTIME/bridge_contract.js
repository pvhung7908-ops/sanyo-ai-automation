const contract = require('../06_N8N/SYSTEM1_BRIDGE_CONTRACT.json');

const TASK_CAPABILITY = contract.task_capability;

function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function unwrapJob(payload) {
  return isObject(payload?.body) ? payload.body : payload;
}

function validateJob(payload) {
  const job = unwrapJob(payload);
  const errors = [];
  const requireString = (value, field) => {
    if (!isNonEmptyString(value)) errors.push(`MISSING_REQUIRED_CONTEXT:${field}`);
  };

  if (!isObject(job)) return { valid: false, job: null, errors: ['INVALID_CONTRACT:job must be an object'] };

  if (job.contract_version !== contract.contract_version) {
    errors.push(`INVALID_CONTRACT:contract_version must be ${contract.contract_version}`);
  }
  requireString(job.job_id, 'job_id');
  if (!contract.job.task_types.includes(job.task_type)) errors.push('INVALID_CONTRACT:task_type');

  if (!isObject(job.source) || job.source.system !== contract.job.source.system) {
    errors.push(`INVALID_CONTRACT:source.system must be ${contract.job.source.system}`);
  }
  requireString(job.source?.project_id, 'source.project_id');
  requireString(job.source?.task_id, 'source.task_id');

  requireString(job.content?.objective, 'content.objective');
  requireString(job.content?.audience, 'content.audience');
  requireString(job.content?.platform, 'content.platform');
  if (job.content?.approval_status !== contract.job.content.approval_status) {
    errors.push(`INVALID_CONTRACT:content.approval_status must be ${contract.job.content.approval_status}`);
  }

  if (!Array.isArray(job.source_refs) || job.source_refs.length < contract.job.source_refs.minimum_items) {
    errors.push('MISSING_REQUIRED_CONTEXT:source_refs');
  } else {
    job.source_refs.forEach((reference, index) => {
      if (!contract.job.source_refs.allowed_types.includes(reference?.type)) {
        errors.push(`INVALID_CONTRACT:source_refs[${index}].type`);
      }
      if (reference?.status !== contract.job.source_refs.required_status) {
        errors.push(`INVALID_CONTRACT:source_refs[${index}].status must be VERIFIED`);
      }
      if (!isNonEmptyString(reference?.path) && !isNonEmptyString(reference?.uri)) {
        errors.push(`MISSING_REQUIRED_CONTEXT:source_refs[${index}].path_or_uri`);
      }
    });
  }

  if (!Array.isArray(job.assets)) {
    errors.push('INVALID_CONTRACT:assets must be an array');
  } else if (job.assets.some(asset => asset?.status !== contract.job.assets.required_status)) {
    errors.push('MISSING_APPROVED_ASSET:assets must be APPROVED');
  }

  if (!isObject(job.return_delivery) || !contract.job.return_delivery.allowed_modes.includes(job.return_delivery.mode)) {
    errors.push('INVALID_CONTRACT:return_delivery.mode');
  }
  if (job.return_delivery?.mode === 'CALLBACK_WEBHOOK' && !isNonEmptyString(job.return_delivery.callback_url)) {
    errors.push('MISSING_REQUIRED_CONTEXT:return_delivery.callback_url');
  }

  if (job.task_type === 'VIDEO') {
    const video = job.video;
    if (!isObject(video)) {
      errors.push('MISSING_REQUIRED_CONTEXT:video');
    } else {
      requireString(video.brief_id, 'video.brief_id');
      if (video.shot_plan_status !== contract.job.video.shot_plan_status) {
        errors.push('INVALID_CONTRACT:video.shot_plan_status must be APPROVED');
      }
      if (!Array.isArray(video.shots) || video.shots.length < contract.job.video.minimum_shots) {
        errors.push('MISSING_REQUIRED_CONTEXT:video.shots');
      }
    }

    const character = job.character;
    if (!isObject(character) || typeof character.required !== 'boolean') {
      errors.push('MISSING_REQUIRED_CONTEXT:character.required');
    } else if (character.required) {
      requireString(character.character_id, 'character.character_id');
      requireString(character.reference_asset_id, 'character.reference_asset_id');
      if (character.identity_status !== contract.job.character.identity_status) {
        errors.push('MISSING_APPROVED_CHARACTER:character.identity_status must be APPROVED');
      }
      const characterAsset = Array.isArray(job.assets)
        && job.assets.find(asset => asset?.asset_id === character.reference_asset_id && asset?.status === 'APPROVED');
      if (!characterAsset) {
        errors.push('MISSING_APPROVED_CHARACTER:reference_asset_id must be an APPROVED asset');
      }
    }
  }

  return { valid: errors.length === 0, job, errors };
}

function emptyEvaluation(status = 'NOT_RUN') {
  return { status, criteria: [], critical_failures: [] };
}

function blockedResult(job, code, detail, provider = null) {
  const isVideo = job?.task_type === 'VIDEO';
  const characterRequired = Boolean(job?.character?.required);
  const characterLocked = isVideo && characterRequired && job.character.identity_status === 'APPROVED';

  return {
    contract_version: contract.contract_version,
    job_id: job?.job_id || null,
    task_type: job?.task_type || null,
    execution: {
      status: 'BLOCKED',
      provider: provider?.provider || null,
      model: provider?.model || null,
      capability: job?.task_type ? TASK_CAPABILITY[job.task_type] : null,
      output_reference: null,
      error: { code, detail }
    },
    technical_test: { status: 'NOT_RUN', tests: [] },
    quality_evaluation: emptyEvaluation(),
    identity_evaluation: {
      status: isVideo ? 'NOT_RUN' : 'NOT_APPLICABLE',
      character_id: job?.character?.character_id || null,
      character_lock: characterLocked ? 'LOCKED' : (isVideo ? 'NOT_LOCKED' : 'NOT_APPLICABLE'),
      per_shot: [],
      identity_drift: 'NOT_EVALUATED'
    },
    human_review: { status: 'NOT_RUN', reviewer: null, notes: [] },
    delivery: { mode: job?.return_delivery?.mode || 'SYNC_RESPONSE', delivered: false },
    next_action: 'BLOCK'
  };
}

function validateMeasurementEvent(event) {
  const errors = [];
  if (!isObject(event)) return { valid: false, errors: ['INVALID_CONTRACT:measurement event must be an object'] };
  if (event.contract_version !== contract.contract_version) errors.push('INVALID_CONTRACT:measurement.contract_version');
  requireMeasurementString(event.job_id, 'job_id', errors);
  if (event.source?.system !== contract.measurement_event.source_system) errors.push('INVALID_CONTRACT:measurement.source.system');
  if (event.measurement_status !== contract.measurement_event.measurement_status) errors.push('INVALID_CONTRACT:measurement.measurement_status');
  requireMeasurementString(event.measured_at, 'measured_at', errors);
  if (!isObject(event.metrics)) errors.push('MISSING_REQUIRED_CONTEXT:measurement.metrics');
  return { valid: errors.length === 0, errors };
}

function requireMeasurementString(value, field, errors) {
  if (!isNonEmptyString(value)) errors.push(`MISSING_REQUIRED_CONTEXT:measurement.${field}`);
}

module.exports = {
  contract,
  TASK_CAPABILITY,
  validateJob,
  blockedResult,
  validateMeasurementEvent
};
