import { useState } from "react";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const ReviewModal = ({ setReviews, closeModal }) => {
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    rating: 0,
  });
  const [ratingError, setRatingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
    setRatingError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.text && formData.author && formData.rating > 0) {
      try {
        const response = await fetch(
          "http://localhost:5000/review/add-review",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Error submitting review");
        }

        const newReview = await response.json();

        setReviews((prevReviews) => [newReview, ...prevReviews]);
        closeModal();
        Swal.fire({
          icon: "success",
          title: "Review added Successfully!",
          timer: 1000,
          timerProgressBar: false,
          showConfirmButton: false,
        });
      } catch (error) {
        setErrorMessage("Failed to submit review. Please try again.", error);
      }
    } else {
      if (formData.rating === 0) {
        setRatingError(true);
      }
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
        {ratingError && (
          <p className="text-red-500 text-xs mt-2">Please select a rating.</p>
        )}
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

      {errorMessage && (
        <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
      )}

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
