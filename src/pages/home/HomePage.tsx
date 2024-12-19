import AboutSection from "./AboutSection";
import FAQSection from "./FaqSection";
import RoadmapSection from "./RoadmapSection";

import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonial";
import Tokenomics from "./Tokenomics";
import BuyingSection from "./BuyingSection";
// import ConnectWallet from "./WalletConnect";

const HomePage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <FAQSection />
      <BuyingSection />
      <Features />
      <Tokenomics />
      <Testimonials />
    </div>
  );
};

export default HomePage;
