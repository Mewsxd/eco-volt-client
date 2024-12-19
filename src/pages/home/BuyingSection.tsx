import Steps from "./StepCard";

const BuyingSection = () => {
  return (
    <div className="px-4 font-inter text-center py-24">
      <h1 className=" text-3xl md:text-4xl font-bold font-robo-mono text-gray-900 mb-16">
        Get Your <span className=" text-green-400">EcoVolt Token</span> Today!
      </h1>
      <section className=" flex-col justify-between ">
        <div className=" flex-1 flex flex-col text-xl justify-between  gap-8">
          <h2>
            Token: <span className=" font-bold">EcoVolt</span>
          </h2>
          <h2>
            Contract Address:{" "}
            <span className=" font-bold break-words">
              0xB4F7cA91E01234ab3dEF5678Cc9aE091F1eD34bC
            </span>
          </h2>
          <button className="hidden font-robo-mono bg-blue-950 px-8 py-4 text-2xl rounded-xl text-green-400 transition">
            Buy Now
          </button>
        </div>
        <div className=" flex-1 border mt-6">
          <Steps />
        </div>
        <button className="block mx-auto mt-4 font-robo-mono bg-blue-950 px-8 py-4 text-2xl rounded-xl text-green-400 transition">
          Buy Now
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
