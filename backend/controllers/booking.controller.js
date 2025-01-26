import Booking from "../models/booking.model.js";

export const addBooking = async (req, res) => {
  const { name, selectedTime, date } = req.body;
  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters long" });
  }

  try {
    const formattedDate = new Date(date).toISOString().split("T")[0];

    const bookings = await Booking.find({ date: formattedDate });

    const isTimeBooked = bookings.some(
      (booking) => booking.selectedTime === selectedTime
    );

    if (isTimeBooked) {
      return res.status(400).json({ message: "Time slot is already booked" });
    }

    const booking = new Booking({
      name,
      selectedTime,
      date: formattedDate,
      status: "booked",
    });

    await booking.save();

    res.status(201).send({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).send({ message: "Error creating booking", error });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

export const getTimeSlots = async (req, res) => {
  const { date } = req.params;

  try {
    const timeSlots = [
      "07:00 AM",
      "07:30 AM",
      "08:00 AM",
      "08:30 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
    ];

    const bookings = await Booking.find({ date });

    const bookedTimeSlots = bookings.map((booking) => {
      return booking.selectedTime;
    });

    const timeSlotsWithStatus = timeSlots.map((time) => ({
      time,
      isBooked: bookedTimeSlots.includes(time),
    }));

    res.json(timeSlotsWithStatus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching time slots" });
  }
};
