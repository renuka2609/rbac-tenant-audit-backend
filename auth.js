export default function authMiddleware(req, res, next) {
  // MVP: simulate decoded token
  req.user = {
    id: "user_1",
    role: "Admin", // change to Reviewer / Requester / Vendor
    org_id: "org_1",
    vendor_id: "vendor_1" // only for Vendor role
  };

  next();
}
