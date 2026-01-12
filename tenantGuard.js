export function tenantGuard(req, res, next) {
  if (!req.user || !req.user.org_id) {
    return res.status(401).json({ message: "Organization missing" });
  }

  req.orgId = req.user.org_id;

  // Vendor isolation
  if (req.user.role === "Vendor") {
    req.vendorId = req.user.vendor_id;
  }

  next();
}
