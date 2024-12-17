const RoadmapSection = () => {
  const timelineData = [
    {
      year: "2021",
      title: "FIRST STEPS",
      description:
        "Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard.",
      color: "text-cyan-500",
      borderColor: "border-cyan-500",
    },
    {
      year: "2020",
      title: "SECOND STEPS",
      description:
        "Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard.",
      color: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      year: "2019",
      title: "THIRD STEPS",
      description:
        "Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard.",
      color: "text-red-500",
      borderColor: "border-red-500",
    },
    {
      year: "2018",
      title: "FOURTH STEPS",
      description:
        "Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard.",
      color: "text-blue-700",
      borderColor: "border-blue-700",
    },
    {
      year: "2017",
      title: "FIFTH STEPS",
      description:
        "Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400",
    },
    {
      year: "2016",
      title: "SIXTH STEPS",
      description:
        "Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard.",
      color: "text-green-500",
      borderColor: "border-green-500",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-gray-50 py-16">
        {/* Start Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wider">
            START
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex w-full mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Content Container */}
              <div
                className={`relative w-1/2 ${
                  index % 2 === 0 ? "pl-10" : "pr-10 text-right"
                }`}
              >
                {/* Line Dot */}
                <div
                  className={`absolute top-4 left-0 w-8 h-8 rounded-full bg-white border-4 ${item.borderColor} transform -translate-x-1/2`}
                ></div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-lg p-5">
                  <h3
                    className={`text-lg font-bold uppercase mb-2 tracking-wide ${item.color}`}
                  >
                    {item.year}
                  </h3>
                  <h4 className="text-gray-800 font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Finish Title */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wider">
            FINISH
          </h1>
        </div>
      </div>
    </>
  );
};

export default RoadmapSection;
