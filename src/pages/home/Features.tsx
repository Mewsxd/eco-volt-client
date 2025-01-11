import { MdOutlineCurrencyExchange } from "react-icons/md";
import { SiMultisim } from "react-icons/si";
import { FaGift } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

const Features = () => {
  const features = [
    {
      title: "Low Transaction Fees",
      description:
        "Enjoy near-zero fees on Polygon and Solana for fast and affordable transactions",
      icon: <MdOutlineCurrencyExchange />,
    },
    {
      title: "Multi-Network Compatibility",
      description:
        "Use Token Name seamlessly across Polygon, Solana, and TON ecosystems",
      icon: <SiMultisim />,
    },
    {
      title: "Rewards for Eco-Friendly Actions",
      description:
        "Earn tokens for using EVs or installing renewable energy systems.",
      icon: <FaGift />,
    },
    {
      title: "Any Time Support",
      description: "Trade carbon credits transparently on the blockchain. ",
      icon: <AiFillSafetyCertificate />,
    },
    {
      title: "Sustainable Growth",
      description:
        "Built on robust blockchain networks for reliability and performance.",
      icon: <MdOutlineSecurity />,
    },
  ];

  return (
    <section
      id="services"
      className=" px-4 font-inter bg-white text-center my-16 lg:my-24"
    >
      {/* Header Section */}
      <h2 className="text-3xl md:text-4xl font-bold font-robo-mono text-gray-900 mb-10 lg:mb-16">
        Why Choose <span className="text-green-400">Solara?</span>
      </h2>
      {/* <p className="text-gray-500 max-w-lg mx-auto mb-12 text-sm md:text-base">
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </p> */}

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#00384f] text-white rounded-lg mb-4">
              <span className="text-3xl">{feature.icon}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed max-w-xs text-base">
              {feature.description}
            </p>

            {/* Dashed Line */}
            {index !== features.length - 1 && (
              <div className="hidden lg:block absolute right-[-1.25rem] top-8 w-10 border-t-2 border-dashed border-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
