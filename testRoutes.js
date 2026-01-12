import express from "express";
import { allowRoles } from "../middleware/rbac.js";
import { logAudit } from "../services/auditLogService.js";

const router = express.Router();

/* Create Vendor */
router.post(
  "/vendor",
  allowRoles("Admin", "Requester"),
  (req, res) => {
    logAudit("Create Vendor", req.user);
    res.json({ message: "Vendor created" });
  }
);

/* Reviewer Action */
router.post(
  "/review",
  allowRoles("Reviewer"),
  (req, res) => {
    logAudit("Reviewer submitted review", req.user);
    res.json({ message: "Review submitted" });
  }
);

/* Vendor Submission */
router.post(
  "/vendor/submit",
  allowRoles("Vendor"),
  (req, res) => {
    logAudit("Vendor submitted assessment", req.user);
    res.json({ message: "Assessment submitted" });
  }
);

export default router;
