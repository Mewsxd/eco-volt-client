import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
import Steps from "./StepCard";
import { useState } from "react";
import logo from "../../assets/moonpay.svg";

const BuyingSection = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      id="buying-section"
      className="px-4 font-inter text-center py-12 lg:py-24"
    >
      <MoonPayBuyWidget
        variant="overlay"
        baseCurrencyCode="usd"
        baseCurrencyAmount="100"
        defaultCurrencyCode="eth"
        visible={visible}
      />
      <h1 className=" text-3xl md:text-4xl font-bold font-robo-mono text-gray-900 mb-10 lg:mb-16">
        Get Your <span className=" text-green-400">Solara Token</span> Today!
      </h1>
      <section className=" flex-col justify-between ">
        <div className=" flex-1 flex flex-col text-xl justify-between gap-4 lg:gap-8">
          <h2>
            Token: <span className=" font-bold">Solara Coin</span>
          </h2>
          <h2>
            Contract Address:{" "}
            <span className=" font-bold break-words">
              0xaAC208aBa017E39A51b9901d16beF8964776a569
            </span>
          </h2>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
            className="hidden font-robo-mono bg-[#7D00FF] px-8 py-4 text-2xl rounded-xl text-white transition"
          >
            <img src={logo} />
          </button>
        </div>
        <div className=" flex-1 mt-6">
          <Steps />
        </div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
          className="block mx-auto mt-4 font-robo-mono bg-[#7D00FF] px-8 py-4 text-2xl rounded-xl text-white transition"
        >
          <img src={logo} />
        </button>
      </section>
    </div>
  );
};

export default BuyingSection;

// import React from "react";

// interface Step {
//   step: number;
//   title: string;
//   description: string;
// }

// const StepCard: React.FC<Step> = ({ step, title, description }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
//       <div className="flex items-center space-x-4 mb-4">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
//           {step}
//         </div>
//         <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//       </div>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// const Steps: React.FC = () => {
//   const steps: Step[] = [
//     {
//       step: 1,
//       title: "Connect Your Wallet",
//       description:
//         "Connect your wallet (MetaMask for Polygon, Tonkeeper for TON, or Phantom for Solana).",
//     },
//     {
//       step: 2,
//       title: "Select Network",
//       description: "Choose your preferred network (Polygon, Solana, or TON).",
//     },
//     {
//       step: 3,
//       title: "Enter Token Quantity",
//       description: "Specify the number of tokens you wish to purchase.",
//     },
//     {
//       step: 4,
//       title: "Confirm Transaction",
//       description: "Confirm the transaction in your wallet to complete the process.",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
//           Purchase Tokens in 4 Easy Steps
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step) => (
//             <StepCard
//               key={step.step}
//               step={step.step}
//               title={step.title}
//               description={step.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Steps;
