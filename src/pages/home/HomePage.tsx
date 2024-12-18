import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonial";
import Tokenomics from "./Tokenomics";

const HomePage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <HeroSection />
      <Features />
      <Tokenomics />
      <Testimonials />
    </div>
  );
};

export default HomePage;
