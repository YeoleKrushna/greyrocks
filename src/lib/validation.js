// Validation helpers for certificate IDs
export function normalizeId(raw) {
  if (typeof raw !== "string") return "";
  return raw.trim().toUpperCase();
}

// Accepts IDs like GR-AI-2026-FC1AC8
export function isValidCertificateId(id) {
  return /^GR-[A-Z0-9]{1,12}-\d{4}-[A-Z0-9]{3,12}$/.test(id);
}
