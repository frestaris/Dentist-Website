import express from "express";

import {
  addBooking,
  getTimeSlots,
  getBookings,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/add-booking", addBooking);
router.get("/bookings", getBookings);
router.get("/bookings/:date", getTimeSlots);

export default router;
