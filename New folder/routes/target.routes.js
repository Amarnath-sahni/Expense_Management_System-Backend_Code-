import express from "express";
import { addTarget, getTarget } from "../controller/target.controller.js";

export const targetRouter = express.Router();

// Add or update target
targetRouter.post("/add", addTarget);

// Fetch all targets
targetRouter.get("/fetch", getTarget);

export default targetRouter;
