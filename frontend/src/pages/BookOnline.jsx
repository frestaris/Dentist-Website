import { useState } from "react";
import { timeSlots } from "../utils/data";
import { getDates } from "../utils/functions";
import { RiArrowDownSLine } from "react-icons/ri";
import Calendar from "react-calendar";
import Button from "../components/Button";
import ReviewBookingModal from "../components/ReviewBookingModal";
import Swal from "sweetalert2";

const BookOnline = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [visibleDates, setVisibleDates] = useState(2);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");

  const dates = getDates(selectedDate, visibleDates);

  const handleTimeSelect = (time, date) => {
    const formattedTime = `${date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
    })} ${time}`;

    if (selectedTime === formattedTime) {
      setSelectedTime(null);
    } else {
      setSelectedTime(formattedTime);
    }
  };

  const loadMoreDates = () => {
    setVisibleDates((prevCount) => prevCount + 3);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setVisibleDates(1);
  };

  const tileDisabled = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today || date.getDay() === 0 || date.getDay() === 6;
  };

  const tileClassName = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date.getTime() === today.getTime()) {
      return "text-red-500";
    }
    if (date.getTime() === selectedDate.getTime()) {
      return "text-primary scale-115 font-bold";
    }
    if (date < today || date.getDay() === 0 || date.getDay() === 6) {
      return "text-gray-400";
    }

    return null;
  };

  const handleBookAppointment = async () => {
    if (name.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Name must be at least 3 characters long.",
      });
      return;
    }

    setModalOpen(false);

    const bookingData = {
      name,
      selectedTime,
      date: selectedDate.toISOString(),
    };

    try {
      const response = await fetch(
        "http://localhost:5000/booking/add-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to book the appointment.");
      }

      Swal.fire({
        icon: "success",
        title: "Appointment Booked Successfully!",
        text: `Appointment booked for ${name} at ${selectedTime}`,
        showConfirmButton: true,
      });

      setName("");
      setSelectedTime(null);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: `There was an issue booking your appointment. Please try again. Error: ${error.message}`,
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full my-8 p-6 border border-gray-300 rounded-lg bg-gray-50">
      {/* Left side: Calendar */}
      <div className="md:w-1/3 w-full text-center">
        <Calendar
          prev2Label={null}
          next2Label={null}
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={tileDisabled}
          tileClassName={tileClassName}
          className="border rounded-lg shadow-lg py-4 custom-calendar"
          showNeighboringMonth={false}
          prevLabel={
            <span className="text-primary px-4 text-2xl flex items-center">
              {"<"}
            </span>
          }
          nextLabel={
            <span className="text-primary px-4 text-2xl flex items-center">
              {">"}
            </span>
          }
        />
        {selectedTime && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">You have selected:</p>
            <strong className="text-lg text-blue-500">{selectedTime}</strong>
            <div>
              <Button
                onClick={() => setModalOpen(true)}
                className="w-auto px-6 py-2 text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                Book appointment
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Right side: Appointment booking */}
      <div className="md:w-2/3 w-full md:ml-8 m-0 mt-8 md:mt-0">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Book an Appointment
        </h2>
        <hr />
        {dates.map((date, index) => (
          <div key={index} className="mt-6">
            <div className="font-semibold text-gray-800">
              <span>
                {`${date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}, ${date.toLocaleDateString("en-US", { weekday: "short" })}`}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {timeSlots.map((time, timeIndex) => {
                const formattedTime = `${date.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                })} ${time}`;

                return (
                  <button
                    key={timeIndex}
                    className={`w-[65px] py-2 text-sm font-medium border rounded-md transition duration-200 ${
                      selectedTime === formattedTime
                        ? "bg-primary text-white scale-110 border-primary"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-primary hover:text-primary hover:scale-110"
                    }`}
                    onClick={() => handleTimeSelect(time, date)}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-8 font-bold text-primary">
          <button onClick={loadMoreDates} className="flex items-center">
            More <RiArrowDownSLine className="ml-2 text-2xl" />
          </button>
        </div>
      </div>

      {/* Modal for booking the appointment */}
      <ReviewBookingModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectedTime={selectedTime}
        name={name}
        setName={setName}
        handleBookAppointment={handleBookAppointment}
      />
    </div>
  );
};

export default BookOnline;
