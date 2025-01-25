import { Link } from "react-router-dom";
import Button from "../../components/Button";

const MeetTheTeam = () => {
  return (
    <div className="overflow-hidden px-4">
      <div className="h-screen relative mb-8">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.sgu.edu/wp-content/uploads/2020/11/GradCollage_845x500.jpg')",

            backgroundAttachment: "fixed",
            filter: "brightness(70%)",
            zIndex: -1,
          }}
        ></div>
        {/* Color overlay */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(129, 208, 234, 0.3), rgba(129, 208, 234, 0.3))",
            zIndex: -1,
          }}
        ></div>
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-0 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg mb-5">
            Top-notch dentistry, from our top dentists.
          </h1>
          <Link to="/overview">
            <Button className="hover:bg-white">meet the team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
