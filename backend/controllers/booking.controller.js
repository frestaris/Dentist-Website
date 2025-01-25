import Booking from "../models/booking.model.js";

export const addBooking = async (req, res) => {
  const { name, selectedTime, date } = req.body;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters long" });
  }

  try {
    const booking = new Booking({
      name,
      selectedTime,
      date,
    });

    await booking.save();
    res.status(201).send({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).send({ message: "Error creating booking", error });
  }
};
