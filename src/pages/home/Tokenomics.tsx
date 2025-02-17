import CircularDiagram from "../../component/CircularDiagrem";

const Tokenomics = () => {
  return (
    <div className=" text-black w-full py-14 lg:py-24 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold font-robo-mono text-black">
        <span className=" text-green-400">Tokenomics</span> at a Glance
      </h1>
      <div className="w-full flex items-center justify-center">
        <CircularDiagram />
      </div>
    </div>
  );
};

export default Tokenomics;
