import { Link } from "react-router-dom";
import Button from "../components/Button";
import { teamMembers } from "../utils/data";

const Overview = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="md:text-3xl text-lg font-semibold text-gray-400 mb-8">
          Your mouth is in great hands.
        </h2>
        <h1 className="md:text-8xl text-3xl font-bold text-gray-600 mb-20">
          Meet our team.
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Container */}
              <div className="bg-white h-[425px] shadow-md rounded-lg overflow-hidden w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Text Section */}
              <p className="my-6 text-2xl font-semibold text-gray-600">
                {member.name}
              </p>
              <p className="uppercase text-gray-400 mb-4 font-bold">
                {member.title}
              </p>
              <span className="text-gray-500 text-lg">
                {member.bio.length > 100
                  ? member.bio.slice(0, 100) + "..."
                  : member.bio}
              </span>
              {/* Button */}
              <div className="mt-4">
                <Link
                  to={`/dentist/${member.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <Button className="w-auto px-6 py-2 text-gray-700 hover:bg-gray-400 hover:text-white">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <h1 className="w-1/2 mt-10 text-2xl font-semibold text-gray-600">
          Our team of experienced oral care providers prioritizes your health at
          every step.
        </h1>
        <Button className="w-auto px-6 py-2 text-gray-700 hover:bg-gray-400 hover:text-white">
          <Link to="/contact-us">Get started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Overview;
