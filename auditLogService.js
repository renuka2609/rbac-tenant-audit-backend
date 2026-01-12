import { auditLogs } from "../models/auditLogModel.js";

export function logAudit(action, user, meta = {}) {
  auditLogs.push({
    action,
    user_id: user.id,
    role: user.role,
    org_id: user.org_id,
    timestamp: new Date(),
    meta
  });

  console.log("AUDIT:", action);
}
