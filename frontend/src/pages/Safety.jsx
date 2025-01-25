import {
  FaShieldAlt,
  FaUserShield,
  FaCalendarCheck,
  FaTooth,
  FaStethoscope,
  FaSyringe,
} from "react-icons/fa";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Safety = () => {
  return (
    <div className="mx-5 md:mx-20">
      {/* Hero Section */}
      <div className=" flex flex-col md:flex-row justify-between mt-20 gap-8">
        {/* Left side content */}
        <div className="md:w-1/2 md:text-left mb-4 md:mb-0 bg-gray-100 p-8">
          <h3 className="text-3xl font-semibold mb-2 text-gray-600 pb-4">
            Keeping our community safe.
          </h3>
          <blockquote className="italic text-lg text-gray-500 pb-6">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            minus earum, eius temporibus inventore modi ut iure dolor, ipsam
            pariatur, possimus suscipit! A totam, beatae ullam itaque ipsam
            cumque. Non? Ut, quibusdam? Ipsa quas accusamus sequi, quidem
            quaerat consequuntur, nisi in assumenda, tenetur corrupti aperiam
            animi! Aliquam ut quisquam, inventore excepturi delectus commodi ab
            praesentium neque. Placeat rerum labore eum."
          </blockquote>
          <p className="text-gray-500 text-lg">- Dr. Jane Smith</p>
        </div>

        {/* Right side image */}
        <div className="md:w-1/2  md:justify-end">
          <img
            src="https://media.istockphoto.com/id/1277540215/photo/portrait-of-a-caucasian-female-dentist-in-her-office.jpg?s=612x612&w=0&k=20&c=e2wmX8LcTZTiAZzbrc6iOUPXaqjcy9qUKmhRQcPYfqI="
            alt="Dental Office"
            className="max-h-80 object-contain "
          />
        </div>
      </div>

      {/* Safety Information Sections */}
      <section className="px-6 py-12 border-b-2 border-gray-200">
        <h3 className="text-3xl font-semibold mb-8 text-gray-600 pb-4">
          A safer visit starts before you come in.
        </h3>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Safety Measure 1 */}

          <div className="border-t-2 border-gray-200">
            <div className="my-4">
              <FaShieldAlt className="mx-auto text-4xl text-primary" />
            </div>
            <h3 className="text-sm pb-4 font-semibold mb-2 text-center uppercase text-gray-600">
              Enhanced Sanitation
            </h3>
            <p className="text-md text-gray-400">
              We follow strict sanitation protocols, including regular
              disinfection of surfaces and equipment, to ensure a safe and
              hygienic environment.
            </p>
          </div>

          {/* Safety Measure 2 */}

          <div className="border-t-2 border-gray-200">
            <div className="my-4">
              <FaUserShield className="mx-auto text-4xl text-primary" />
            </div>
            <h3 className="text-sm pb-4 font-semibold mb-2 text-center uppercase text-gray-600">
              Personal Protective Equipment
            </h3>
            <p className="text-md text-gray-400">
              Our team is equipped with top-quality PPE, including masks,
              gloves, and face shields, to minimize the risk of contamination.
            </p>
          </div>

          {/* Safety Measure 3 */}

          <div className="border-t-2 border-gray-200">
            <div className="my-4">
              <FaCalendarCheck className="mx-auto text-4xl text-primary" />
            </div>
            <h3 className="text-sm pb-4 font-semibold mb-2 text-center uppercase text-gray-600">
              Appointments Spaced Out
            </h3>
            <p className="text-md text-gray-400">
              We stagger appointment times to reduce the number of people in the
              office at once, ensuring proper social distancing.
            </p>
          </div>

          {/* Safety Measure 4 */}

          <div className="border-t-2 border-gray-200">
            <div className="my-4">
              <FaTooth className="mx-auto text-4xl text-primary" />
            </div>
            <h3 className="text-sm pb-4 font-semibold mb-2 text-center uppercase text-gray-600">
              Oral Health Safety
            </h3>
            <p className="text-md text-gray-400">
              We provide regular dental cleanings and checkups, ensuring optimal
              oral health and hygiene during your visits.
            </p>
          </div>

          {/* Safety Measure 5 */}
          <div className="border-t-2 border-gray-200">
            <div className="my-4">
              <FaStethoscope className="mx-auto text-4xl text-primary" />
            </div>
            <h3 className="text-sm pb-4 font-semibold mb-2 text-center uppercase text-gray-600">
              Medical Oversight
            </h3>
            <p className="text-md text-gray-400">
              Our medical professionals are available to monitor patient
              well-being and provide any necessary medical interventions during
              treatment.
            </p>
          </div>

          {/* Safety Measure 6 */}

          <div className="border-t-2 border-gray-200">
            <div className="my-4">
              <FaSyringe className="mx-auto text-4xl text-primary" />
            </div>
            <h3 className="text-sm pb-4 font-semibold mb-2 text-center uppercase text-gray-600">
              Vaccination Support
            </h3>
            <p className="text-md text-gray-400">
              We offer vaccination services to help protect against common
              diseases and ensure a safe environment for our patients and staff.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us section */}
      <section className="md:w-2/4 w-full mt-20">
        <h3 className="text-3xl font-semibold text-gray-600 pb-8">
          We're here to help.
        </h3>
        <p className="text-gray-600 leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          nesciunt eum ea officiis iste placeat, optio saepe, magni natus, aut
          quia. Officiis error reiciendis magni dolorem aut illo, in odit.
        </p>
        <Link to="/contact-us">
          <Button className="text-gray-700 hover:bg-gray-400 hover:text-white">
            contact us
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Safety;
