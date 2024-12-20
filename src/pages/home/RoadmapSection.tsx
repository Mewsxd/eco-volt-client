const RoadmapSection = () => {
  const roadmapData = [
    {
      phase: "Phase 1 :",
      phasein: "Foundation (0-6 Months)",
      title: "Token Launch",
      description:
        "Launch EcoVolt on Polygon, Solana, and TON networks. Establish liquidity pools on DEXs and integrate with EV charging networks.",
      date: "Q1 2024",
    },
    {
      phase: "Phase 2 :",
      phasein: "Growth (6–12 Months)",
      title: " Crowdfunding Expansion",
      description:
        "Launch a crowdfunding platform for green energy. Expand token payments to global EV charging stations and form partnerships with renewable energy providers.",
      date: "Q2 2024",
    },
    {
      phase: "Phase 3 :",
      phasein: "Expansion (12–18 Months)",
      title: "Carbon Marketplace",
      description:
        "Develop a carbon credit marketplace and onboard governments and NGOs for blockchain-based carbon offset tracking. Expand token adoption globally.",
      date: "Q3 2024",
    },
    {
      phase: "Phase 4 :",
      phasein: "Innovation (18–24 Months)",
      title: "Governance & Innovation",
      description:
        "Launch a decentralized governance platform, introduce rewards for eco-friendly actions, and establish a Green Energy Research Fund for innovation.",
      date: "Q4 2024",
    },
  ];
  return (
    <>
      <section className=" py-16 px-4 lg:px-32">
        <h2 className="text-[27px] lg:text-3xl text-center font-bold text-cgreen font-robo-mono mb-12">
          <span className="text-black">Our Roadmap to a</span> Sustainable
          <span className="text-black"> Future</span>
        </h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300"></div>

          <div className="space-y-12 lg:space-y-16">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center lg:items-${
                  index % 2 === 0 ? "start" : "end"
                } lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } relative`}
              >
                {/* Connector Line and Circle */}
                <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-green-700 lg:hidden xl:block shadow-lg border-4 border-white"></div>
                </div>

                {/* Roadmap Content */}
                <div
                  className={`bg-white shadow-md border  rounded-lg p-6 max-w-md w-full ${
                    index % 2 === 0 ? " lg:ml-8" : " lg:mr-8"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-cgreen mb-2 font-inter">
                    {item.phase}
                    <span className="text-gray-600 font-normal text-base">
                      {" "}
                      {item.phasein}
                    </span>
                  </h3>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 font-robo-mono">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-base font-inter">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-cgreen font-inter">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
