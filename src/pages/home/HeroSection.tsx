import { HashLink } from "react-router-hash-link";
import bkg from "../../assets/hero-bkg.jpg";
import { useEffect, useState } from "react";

type ApiResponse = {
  token_price_usd: string;
};
const HeroSection = () => {
  const [tokenPrice, setTokenPrice] = useState<string | undefined>();
  const [flash, setFlash] = useState(false);

  const fetchTokenPrice = async () => {
    const req = await fetch("https://solara-server.onrender.com/token_price");
    const res: ApiResponse = await req.json();
    setTokenPrice(res.token_price_usd.slice(0, 7));
    // Trigger the flash effect
    setFlash(true);
    setTimeout(() => setFlash(false), 1000); // Remove after 1s
  };

  useEffect(() => {
    fetchTokenPrice();
    const interval = setInterval(() => {
      fetchTokenPrice();
    }, 5000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="relative bg-cover bg-center h-dvh md:h-[92vh] mb-16 flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${bkg})` }}
    >
      <h1 className="font-robo-mono text-3xl lg:text-5xl lg:max-w-5xl mb-4 z-10 mx-4">
        Fueling the Green Revolution with{" "}
        <span className=" text-green-400 leading-relaxed">Blockchain</span>{" "}
        Technology
      </h1>
      <h2 className="font-inter text-base lg:text-lg mb-6 z-10 max-w-3xl mx-4">
        Introducing Solara Coin, the cryptocurrency driving renewable energy
        adoption. Pay for EV charging, fund green projects, and earn rewards for
        eco-friendly actions.
      </h2>
      <div className="lg:space-x-4 z-10 mx-4 flex flex-col sm:flex-row items-center gap-5">
        <HashLink smooth to={"/#buying-section"}>
          <button className=" font-inter bg-cgreen px-6 py-2 rounded-xl text-white transition">
            Buy Now
          </button>
        </HashLink>
        <HashLink smooth to={"/#about-section"}>
          <button className=" font-inter border px-6 py-2 rounded-xl text-white transition ">
            Explore Our Mission
          </button>
        </HashLink>
      </div>
      <h2 className="font-inter text-[15px] underline mb-6 z-10 max-w-64 lg:max-w-4xl mt-10 mx-4">
        Join 10,000+ users in building a sustainable future
      </h2>
      <div className="bg-black bg-opacity-60 w-fit h-fit flex flex-col sm:flex-row items-center px-4 z-10 text-lg py-2 rounded-lg">
        <p className="text-white font-bold font-inter"> Solara price :</p>
        <h2
          className={`font-inter text-lg p-2 rounded-lg z-10 max-w-64 lg:max-w-4xl ml-0 sm:ml-4 transition-all duration-500 ${
            flash ? "animate-flash " : ""
          }`}
        >
          <span className="text-cgreen">$</span>
          {tokenPrice ? `${tokenPrice}` : "Loading..."}
        </h2>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
    </div>
  );
};

export default HeroSection;

// import bkg from "../../assets/hero-bkg.jpg";

// const HeroSection = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center text-white h-screen flex flex-col justify-center items-center"
//       style={{ backgroundImage: `url(${bkg})` }}
//     >
//       <h1 className="font-robo-mono text-4xl mb-4 text-shadow">
//         Fueling the Green Revolution with Blockchain Technology
//       </h1>
//       <h2 className="font-inter text-lg mb-6 text-shadow">
//         Introducing Your Token Name, the cryptocurrency driving renewable energy
//         adoption. Pay for EV charging, fund green projects, and earn rewards for
//         eco-friendly actions.
//       </h2>
//       <div className="space-x-4">
//         <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition">
//           Buy Now
//         </button>
//         <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition">
//           Explore Our Mission
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
