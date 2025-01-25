import HeroPicture from "./HeroPicture";
import HeroContent from "./HeroContent";
import MeetTheTeam from "./MeetTheTeam";
import Sponsors from "./Sponsors";
import BottomPicture from "./BottomPicture";

const HomeLayout = () => {
  return (
    <div className="space-y-20">
      <HeroPicture />
      <HeroContent />
      <MeetTheTeam />
      <Sponsors />
      <BottomPicture />
    </div>
  );
};

export default HomeLayout;
