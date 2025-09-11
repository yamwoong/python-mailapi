/**
 * Express app (no listen here).
 * Keeps config testable and reusable.
 */
import express from "express";
import cors from "cors";

const app = express();

// Basic middleware
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));

// Health endpoint for Step 0
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "backend" });
});

export default app;
