import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
