import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Public Sale", value: 30, color: "#FF8A80" },
  { name: "Ecosystem Development & Partnerships", value: 20, color: "#CE93D8" },
  { name: "Staking Rewards & Incentives:", value: 20, color: "#80DEEA" },
  { name: "Team & Advisors (vested)", value: 15, color: "#FFEB3B" },
  { name: "Marketing & Community Building", value: 10, color: "#81C784" },
  { name: "Reserve Fund", value: 5, color: "#98ADC4" },
];

const CircularDiagram = () => {
  return (
    <>
      <div className=" hidden md:flex md:justify-center font-inter">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={150} // Increase outer radius
            innerRadius={90} // Increase inner radius
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* Legend */}
          {/* <div className="">
            {" "}
            <Legend layout="vertical" align="center" verticalAlign="bottom" />
          </div> */}
          <Legend layout="vertical" align="center" verticalAlign="bottom" />
        </PieChart>
      </div>
      <div className=" flex justify-center items-center font-inter w-full max-w-[600px] mx-auto my-0 md:hidden">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            {/* Pie */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              innerRadius="50%"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            {/* Legend */}
            <Legend layout="vertical" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CircularDiagram;
