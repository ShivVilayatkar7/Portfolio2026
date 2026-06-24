import express from "express";

import {
  getPortfolio,
  updatePortfolio,
} from "../controllers/portfolioController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPortfolio);

router.put(
  "/",
  authMiddleware,
  updatePortfolio
);

export default router;