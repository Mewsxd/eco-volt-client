const Chart = () => {
  return (
    <div className="relative w-full pb-[550px] md:pb-[600px]  ">
      <div className="absolute top-0 left-0 w-full h-full py-10 lg:py-16 px-4 lg:px-32">
        <iframe
          className="w-full h-[500px] border-0 rounded-xl"
          src="https://dexscreener.com/polygon/0x0C9F1ffC02d6d001EffDbDF90BB80e1438140895?embed=1&loadChartSettings=0&trades=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
          title="Dexscreener Chart"
        ></iframe>
      </div>
    </div>
  );
};

export default Chart;
// pb-[125%] md:pb-[65%]
