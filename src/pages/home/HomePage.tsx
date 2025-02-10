import AboutSection from "./AboutSection";
import FAQSection from "./FaqSection";
import RoadmapSection from "./RoadmapSection";

import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonial";
import Tokenomics from "./Tokenomics";
import Footer from "./Footer";
import NavBar from "./NavBar";
import BuyingSection from "./BuyingSection";

import ContactSection from "./ContactSection";
import Chart from "./Chart";

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
        <BuyingSection />
        <Chart />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
