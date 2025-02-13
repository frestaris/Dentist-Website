import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingStars from "../components/RatingStars";
import Button from "../components/Button";
import ReviewModal from "../components/ReviewModal";
import { PulseLoader } from "react-spinners";
import { baseURL } from "../utils/baseUrl";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const settings = {
    infinite: true,
    autoplay: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    draggable: false,
    swipeable: false,
    pauseOnHover: false,
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(`${baseURL}review/get-reviews`);
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  return (
    <div className="mx-auto overflow-hidden py-8">
      {/* Review Form */}
      <div className="overflow-hidden px-4 mb-8">
        <div className="h-[400px] relative">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://d3b3by4navws1f.cloudfront.net/shutterstock_167867885.jpg')",
              backgroundAttachment: "fixed",
              filter: "brightness(70%)",
              zIndex: -1,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Color overlay */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(129, 208, 234, 0.3), rgba(129, 208, 234, 0.3))",
              zIndex: -1,
            }}
          ></div>
          {/* HeroPicture Content */}
          <div className="flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-0 relative z-10">
            <Button className="hover:bg-white" onClick={openModal}>
              Leave a review
            </Button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="my-8">
        {loading ? (
          <div className="flex justify-center items-center">
            <PulseLoader size={10} color="#81d0ea" margin={4} />
          </div>
        ) : (
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={review.id || index}
                className="flex flex-col items-center"
              >
                <div className="text-center mt-8">
                  <p className="text-lg text-gray-600 font-semibold">
                    -{" "}
                    {review.author.charAt(0).toUpperCase() +
                      review.author.slice(1)}
                  </p>
                  <p className="text-xl text-gray-800 italic my-4">
                    "
                    {review.text.charAt(0).toUpperCase() + review.text.slice(1)}
                    "
                  </p>
                  <RatingStars rating={review.rating} />
                </div>
                <hr className="w-2/4 mx-auto border-t-2 mt-8 border-gray-300" />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-semibold text-center">
                Leave a Review
              </h2>
              <button
                className="text-gray-600 font-semibold hover:text-primary"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <ReviewModal setReviews={setReviews} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
