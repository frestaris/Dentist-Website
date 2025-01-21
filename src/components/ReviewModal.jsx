import { useState } from "react";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa";

const ReviewModal = ({ setReviews, closeModal }) => {
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text && formData.author && formData.rating > 0) {
      const newReview = {
        id: Date.now(), // Unique ID
        ...formData,
      };
      setReviews((prevReviews) => [newReview, ...prevReviews]);
      closeModal(); // Close modal after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-medium mb-2">
          Rating
        </label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer ${
                formData.rating >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
      </div>
      <label htmlFor="text" className="block text-sm font-medium mb-2">
        Review
      </label>
      <textarea
        id="text"
        name="text"
        value={formData.text}
        onChange={handleInputChange}
        rows="4"
        className="w-full p-2 border rounded"
        required
      />
      <Button
        type="submit"
        className="text-gray-700 hover:bg-gray-400 hover:text-white"
      >
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewModal;
