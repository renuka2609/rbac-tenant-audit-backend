import express from "express";
import authMiddleware from "./middleware/auth.js";
import { tenantGuard } from "./middleware/tenantGuard.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use(tenantGuard);

app.use("/api", testRoutes);

export default app;
