import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { addLineBreakAfterWords } from "../utils/functions";

function DoctorProfile({ doctors }) {
  const { name } = useParams();

  const doctor = doctors.find(
    (doc) => doc.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!doctor) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-red-500">Doctor not found</h1>
      </div>
    );
  }

  return (
    <div className="m-8 md:m-20">
      <div className="float-left w-full sm:w-1/3 mr-8 mb-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
      <div className="text-gray-500 text-lg sm:flex-1">
        <h1 className="mb-6 text-4xl font-semibold text-gray-600">
          Dr. {doctor.name}
        </h1>
        <h2 className="uppercase text-gray-400 mb-4">{doctor.title}</h2>
        <div className="text-gray-500 text-lg">
          {addLineBreakAfterWords(doctor.bio, 150, "20px")}
        </div>
      </div>
    </div>
  );
}

DoctorProfile.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DoctorProfile;
