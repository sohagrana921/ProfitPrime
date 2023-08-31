import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// const data = [
//   {
//     name: "Product A",
//     sells: 4000,
//     price: 2400,
//     terget: 2400
//   },
//   {
//     name: "Product B",
//     sells: 3000,
//     price: 1398,
//     terget: 2210
//   },
//   {
//     name: "Product C",
//     sells: 1000,
//     price: 2800,
//     terget: 2290
//   },
//   {
//     name: "Product D",
//     sells: 1880,
//     price: 1908,
//     terget: 2000
//   },
//   {
//     name: "Product E",
//     sells: 990,
//     price: 1500,
//     terget: 2181
//   },
//   {
//     name: "Product F",
//     sells: 1390,
//     price: 2500,
//     terget: 2500
//   },
//   {
//     name: "Product G",
//     sells: 1490,
//     price: 1900,
//     terget: 2100
//   }
// ];

const CosultingRevenue = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("/ConsultingRevenue.json")
      .then((res) => res.json())
      .then((data) => {
        setChart(data);
      });
  });
  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={chart}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sells"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="price"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="target"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
};

export default CosultingRevenue;
