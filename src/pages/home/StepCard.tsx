import React from "react";

interface Step {
  step: number;
  title: string;
  description: string;
}

const StepCard: React.FC<Step> = ({ step, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 lg:hover:shadow-xl transition duration-300 ">
      <div className="flex flex-col items-center space-x-4 space-y-4 mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
          {step}
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Steps: React.FC = () => {
  const steps: Step[] = [
    {
      step: 1,
      title: "Connect Your Wallet",
      description:
        "Connect your wallet (MetaMask for Polygon, Tonkeeper for TON, or Phantom for Solana).",
    },
    {
      step: 2,
      title: "Select Network",
      description: "Choose your preferred network (Polygon, Solana, or TON).",
    },
    {
      step: 3,
      title: "Enter Token Quantity",
      description: "Specify the number of tokens you wish to purchase.",
    },
    {
      step: 4,
      title: "Confirm Transaction",

      description:
        "Confirm the transaction in your wallet to complete the process.",
    },
  ];

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Purchase Tokens in 4 Easy Steps
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-4  gap-6">
          {steps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
