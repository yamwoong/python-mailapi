/**
 * Response type for /health endpoints (backend & python)
 *
 * Example:
 * {
 *   "status": "ok",
 *   "service": "backend",
 *   "timestamp": "2025-09-12T14:30:00Z"
 * }
 */

export type HealthResponse = {
  status: "ok" | "healthy" | string;

  service?: string;

  timestamp?: string;
};
