import Review from "../models/review.model.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
};

export const addReview = async (req, res) => {
  try {
    const { text, author, rating } = req.body;
    if (!text || !author || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newReview = new Review({ text, author, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: "Error adding review" });
  }
};
