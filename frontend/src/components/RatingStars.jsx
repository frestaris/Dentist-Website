import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex justify-center items-center space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-gray-300" />
      ))}
    </div>
  );
};

export default RatingStars;
