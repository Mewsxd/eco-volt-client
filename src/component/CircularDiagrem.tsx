/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Public Sale", value: 30, color: "#FF8A80" },
//   { name: "Ecosystem Development & Partnerships", value: 20, color: "#CE93D8" },
//   { name: "Staking Rewards & Incentives:", value: 20, color: "#80DEEA" },
//   { name: "Team & Advisors (vested)", value: 15, color: "#FFEB3B" },
//   { name: "Marketing & Community Building", value: 10, color: "#81C784" },
//   { name: "Reserve Fund", value: 5, color: "#98ADC4" },
// ];

// const CircularDiagram = () => {
//   return (
//     <>
//       <div className=" hidden md:flex md:justify-center font-inter">
//         <PieChart width={500} height={500}>
//           <Pie
//             data={data}
//             dataKey="value"
//             cx="50%"
//             cy="50%"
//             outerRadius={150} // Increase outer radius
//             innerRadius={90} // Increase inner radius
//             label
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//           {/* Legend */}
//           {/* <div className="">
//             {" "}
//             <Legend layout="vertical" align="center" verticalAlign="bottom" />
//           </div> */}
//           <Legend layout="vertical" align="center" verticalAlign="bottom" />
//         </PieChart>
//       </div>
//       <div className=" flex justify-center items-center font-inter w-full max-w-[600px] mx-auto my-0 md:hidden">
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             {/* Pie */}
//             <Pie
//               data={data}
//               dataKey="value"
//               cx="50%"
//               cy="50%"
//               outerRadius="80%"
//               innerRadius="50%"
//               label
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>

//             {/* Legend */}
//             <Legend layout="vertical" align="center" verticalAlign="bottom" />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </>
//   );
// };

// export default CircularDiagram;

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Public Sale", value: 30 },
  { name: "Ecosystem Development & Partnerships", value: 20 },
  { name: "Staking Rewards & Incentives", value: 20 },
  { name: "Team & Advisors (vested)", value: 15 },
  { name: "Marketing & Community Building", value: 10 },
  { name: "Reserve Fund", value: 5 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#CE93D8",
  "#ff0000",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  //@ts-ignore
  cx,
  //@ts-ignore
  cy,
  //@ts-ignore
  midAngle,
  //@ts-ignore
  innerRadius,
  //@ts-ignore
  outerRadius,
  //@ts-ignore
  percent,
  //@ts-ignore
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Example = () => {
  return (
    <div className=" w-full h-[500px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120} // Increased outer radius for a larger chart
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend layout="horizontal" align="center" verticalAlign="bottom" />{" "}
          {/* Added Legend */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
