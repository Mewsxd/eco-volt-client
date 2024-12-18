import AboutSection from "./AboutSection";
import FAQSection from "./FaqSection";
import HeroSection from "./HeroSection";
import RoadmapSection from "./RoadmapSection";

const HomePage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
