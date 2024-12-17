import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import RoadmapSection from "./RoadmapSection";

const HomePage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <HeroSection />
      <AboutSection />
      <RoadmapSection/>
    </div>
  );
};

export default HomePage;
