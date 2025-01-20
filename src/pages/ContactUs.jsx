import { useState } from "react";
import Button from "../components/Button";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    patientStatus: "",
    provider: "",
    message: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = [];

    if (!formData.firstName) missingFields.push("First Name");
    if (!formData.email) missingFields.push("Email");
    if (!formData.phone) missingFields.push("Phone");
    if (!formData.patientStatus) missingFields.push("Patient Status");

    if (missingFields.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}`,
        confirmButtonText: "Okay",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Form Submitted Successfully!",
      text: "We will get back to you soon.",
      confirmButtonText: "Okay",
      timer: 5000,
      timerProgressBar: false,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredContact: "",
      patientStatus: "",
      provider: "",
      message: "",
      referral: "",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Column */}
      <div>
        <h2 className="text-3xl text-gray-600 font-semibold">
          Your smile starts here
        </h2>
        <p className="text-lg text-gray-500 my-8">
          Get started at our modern First Hill office in Seattle using the form
          below. You can also give us a call at (123) 456-7890 to chat with our
          helpful front office team—or we’re cool with texting too!
        </p>
        <div className="space-y-6">
          <h3 className="text-md text-gray-600 font-semibold mb-4 uppercase">
            Request an appointment
          </h3>
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name <span className="text-gray-400">(required)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-gray-400">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone <span className="text-gray-400">(required)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border"
                />
              </div>
            </div>

            {/* Preferred Contact */}
            <div className="mb-8">
              <label className="block text-md font-medium mt-8 mb-1">
                How should we reach you?
              </label>
              <p className="text-gray-400 text-sm mb-4">
                Let us know how to get back to you. We'll be in touch by the
                next business day.
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="call"
                    onChange={handleChange}
                    checked={formData.preferredContact === "call"}
                  />
                  <span className="text-gray-600 pl-1 text-sm">Call me</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="text"
                    onChange={handleChange}
                    checked={formData.preferredContact === "text"}
                  />
                  <span className="text-gray-600 pl-1 text-sm">Text me</span>
                </label>
                <label className="flex items-center mb-6">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    onChange={handleChange}
                    checked={formData.preferredContact === "email"}
                  />
                  <span className="text-gray-600 pl-1 text-sm">Email me</span>
                </label>
              </div>
            </div>

            <hr />
            {/* Patient Status */}
            <div>
              <label className="block text-md font-medium mt-8 mb-1">
                Have we seen you before?{" "}
                <span className="text-gray-400">(required)</span>
              </label>
              <div className="flex flex-col gap-1 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="patientStatus"
                    value="new"
                    onChange={handleChange}
                    checked={formData.patientStatus === "new"}
                  />
                  <span className="text-gray-600 pl-1 text-sm">
                    I'm a new patient
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="patientStatus"
                    value="returning"
                    onChange={handleChange}
                    checked={formData.patientStatus === "returning"}
                  />
                  <span className="text-gray-600 pl-1 text-sm">
                    I'm a returning patient
                  </span>
                </label>
              </div>
            </div>

            {/* Provider Selection */}
            <div>
              <label
                htmlFor="provider"
                className="block text-md font-medium mt-8 mb-1"
              >
                Do you have a specific provider you'd like to see?
              </label>
              <select
                id="provider"
                name="provider"
                value={formData.provider}
                onChange={handleChange}
                className="w-full p-4 mt-2 border mb-8"
              >
                <option value="">Select an option</option>
                <option value="provider1">Dr. John Doe</option>
                <option value="provider2">Dr. Jane Smith</option>
                <option value="provider3">Dr. Alice Johnson</option>
              </select>
            </div>
            <hr />
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium mt-8"
              >
                Message <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 mt-2 border"
              />
            </div>

            {/* Referral Source */}
            <div>
              <label
                htmlFor="referral"
                className="block text-md font-medium mt-8 mb-1"
              >
                How did you hear about us?
              </label>
              <select
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-4 my-4 border "
              >
                <option value="">Select an option</option>
                <option value="google">Google</option>
                <option value="friend">A friend</option>
                <option value="social_media">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <Button className="text-gray-700 hover:bg-gray-500 hover:text-white">
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d144.9537363153202!3d-37.81627937975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773c0fdd2a0a0!2sMedical%20Center!5e0!3m2!1sen!2s!4v1697651521647!5m2!1sen!2s"
          width="100%"
          height="300"
          allowFullScreen=""
          className="mb-10"
          loading="lazy"
        ></iframe>
        <hr />
        {/* Contact Information */}
        <div className="my-8">
          <h3 className="text-md text-gray-600 font-semibold mb-6 uppercase">
            Contact Information
          </h3>
          <p className="mt-4 mb-2 text-cyan-500 font-semibold underline">
            Dental Center
          </p>
          <p className="text-gray-500 text-md mb-4">
            123 Dental Lane, Health City, HC 12345
          </p>
          <p className="text-gray-500 text-md mb-1">
            Call:{" "}
            <span className=" text-cyan-500 font-semibold underline">
              (123) 456-7891
            </span>
          </p>
          <p className="text-gray-500 text-md mb-1">
            Text:{" "}
            <span className=" text-cyan-500 font-semibold underline">
              (123) 456-7891
            </span>
          </p>
          <p className="text-gray-500 text-md mb-8">
            Email:{" "}
            <a
              href="mailto:info@dentalcenter.com"
              className=" text-cyan-500 font-semibold underline"
            >
              info@dentalcenter.com
            </a>
          </p>
          <hr />
          <h3 className="text-md text-gray-600 font-semibold mt-8 mb-4 uppercase">
            HOURS
          </h3>
          <ul className="list-none mt-2 mb-8 space-y-1 text-gray-500">
            <li>Monday — 7am to 4pm</li>
            <li>Tuesday — 7am to 4pm</li>
            <li>Wednesday — 7am to 4pm</li>
            <li>Thursday — 7am to 4pm</li>
            <li>Friday — 7am to 3pm</li>
            <li>Saturday — Closed</li>
            <li>Sunday — Closed</li>
          </ul>
          <hr />
          <h4 className="text-md text-gray-600 font-semibold mt-8 mb-4 uppercase">
            Emergencies
          </h4>
          <p className="text-gray-500 text-md mb-8">
            Call us for Emergency dental treatment at our office in the 123
            Dental Lane with quick access to central Health City.
          </p>
          <hr />
          <h4 className="text-md text-gray-600 font-semibold mt-8 mb-4 uppercase">
            Parking
          </h4>
          <p className="text-gray-500 text-md mb-8">
            Parking is available in our building, with access at the bottom of
            Rush Street on the North side. Street parking is also available on
            two-hour parking meters on each street surrounding our location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
