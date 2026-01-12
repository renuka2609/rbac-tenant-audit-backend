# RBAC + Tenant Isolation + Audit Logs (Backend Foundation)

## Objective
This module provides the security foundation for the system:
- **RBAC**: Role-based access control for Admin, Reviewer, Requester, and Vendor.
- **Tenant Isolation**: All data access scoped by `org_id` to prevent cross-org data leaks.
- **Audit Logs**: Tracks critical actions for audit-ready history.

---

## Folder Structure
backend
│
├── app.js
├── server.js
├── package.json
│
├── middleware
│   ├── auth.js
│   ├── rbac.js
│   └── tenantGuard.js
│
├── models
│   └── auditLogModel.js
│
├── services
│   └── auditLogService.js
│
└── routes
    └── testRoutes.js


