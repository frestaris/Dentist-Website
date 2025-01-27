import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    preferredContact: {
      type: String,
      required: false,
    },
    patientStatus: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    referral: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
