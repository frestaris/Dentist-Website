import Button from "../components/Button";

const ReviewBookingModal = ({
  modalOpen,
  setModalOpen,
  selectedTime,
  name,
  setName,
  handleBookAppointment,
}) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between item-center mb-4">
          <h3 className="text-xl font-semibold">Book Your Appointment</h3>
          <button
            className="hover:text-red-400 text-xl"
            onClick={() => setModalOpen(false)}
          >
            X
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          You have selected: <strong>{selectedTime}</strong>
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <Button
          onClick={handleBookAppointment}
          className="sm:py-5 py-1 text-gray-700 hover:bg-gray-400  hover:text-white"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default ReviewBookingModal;
