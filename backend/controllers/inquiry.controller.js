import Inquiry from "../models/inquiry.model.js";

export const addInquiry = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    preferredContact,
    patientStatus,
    provider,
    message,
    referral,
  } = req.body;

  if (!firstName || !email || !phone || !patientStatus) {
    return res.status(400).json({
      error: "First Name, Email, Phone, and Patient Status are required.",
    });
  }
  if (
    isNaN(phone) ||
    phone.toString().length < 10 ||
    phone.toString().length > 15
  ) {
    return res.status(400).json({
      error: "Phone must be a valid number between 10 and 15 digits.",
    });
  }

  try {
    const newInquiry = new Inquiry({
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      patientStatus,
      provider,
      message,
      referral,
    });

    await newInquiry.save();

    res.status(201).json({
      message: "Inquiry submitted successfully!",
      inquiry: newInquiry,
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({
      error:
        "There was an error processing your inquiry. Please try again later.",
    });
  }
};

export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();

    res.status(200).json(inquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching inquiries", error });
  }
};
