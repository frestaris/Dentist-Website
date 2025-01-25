import express from "express";

import { addReview, getReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/add-review", addReview);
router.get("/get-reviews", getReviews);

export default router;
