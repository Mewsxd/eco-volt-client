import AboutSection from "./AboutSection";
import FAQSection from "./FaqSection";
import RoadmapSection from "./RoadmapSection";

import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonial";
import Tokenomics from "./Tokenomics";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Steps from "./StepCard";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className=" max-w-7xl mx-auto">
        <AboutSection />
        <Features />
        <RoadmapSection />
        <Tokenomics />
        <Testimonials />
        <FAQSection />
        {/* <Rtttt/> */}
        <Steps/>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
