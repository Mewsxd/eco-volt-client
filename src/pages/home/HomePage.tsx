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
import PolygonTokenPrice from "./TokenPrice";
import ContactSection from "./ContactSection";
// import ConnectWallet from "./WalletConnect";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className=" max-w-7xl mx-auto">
        <AboutSection />
        <PolygonTokenPrice tokenAddress="0xaAC208aBa017E39A51b9901d16beF8964776a569" />
        <Features />
        <RoadmapSection />
        <Tokenomics />
        <BuyingSection />
        <Testimonials />
        <FAQSection />
        <ContactSection/>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
