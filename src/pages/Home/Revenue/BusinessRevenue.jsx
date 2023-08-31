import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     price: 4000,
//     sells: 2400,
//     target: 2400
//   },
//   {
//     name: "Page B",
//     price: 3000,
//     sells: 1398,
//     target: 2210
//   },
//   {
//     name: "Page C",
//     price: 2000,
//     sells: 9800,
//     target: 2290
//   },
//   {
//     name: "Page D",
//     price: 2780,
//     sells: 3908,
//     target: 2000
//   },
//   {
//     name: "Page E",
//     price: 1890,
//     sells: 4800,
//     target: 2181
//   },
//   {
//     name: "Page F",
//     price: 2390,
//     sells: 3800,
//     target: 2500
//   },
//   {
//     name: "Page G",
//     price: 3490,
//     sells: 4300,
//     target: 2100
//   }
// ];
import { AreaChart, Area, ResponsiveContainer } from "recharts";

import { PieChart, Pie } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const BusinessRevenue = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("/BusinessRevenue.json")
      .then((res) => res.json())
      .then((data) => {
        setChart(data);
      });
  });
  return (
    <div className="mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <BarChart
            width={500}
            height={300}
            data={chart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sells" fill="#8884d8" />
            <Bar dataKey="price" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <PieChart width={600} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie
              dataKey="value"
              data={data02}
              cx={500}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="50%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={chart}
            syncId="anyId"
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
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-20">
        <BarChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sells" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default BusinessRevenue;
