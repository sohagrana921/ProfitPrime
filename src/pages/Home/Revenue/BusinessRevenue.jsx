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
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { BsPersonFillAdd } from "react-icons/bs";
import { GiNetworkBars, GiProfit } from "react-icons/gi";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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

const FreeDemo = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("https://profit-prime-server.vercel.app/businessRevenue")
      .then((res) => res.json())
      .then((data) => {
        setChart(data);
      });
  });
  return (
    <div>
      <h2 className="text-center py-10 font-serif font-bold text-5xl mb-10">
        Your Company Revenue Chart.
      </h2>
      <div className="bg-slate-300 grid grid-cols-1 lg:grid-cols-3 text-center mb-32 ">
        <div>
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="text-5xl">
                <BsPersonFillAdd></BsPersonFillAdd>
              </div>
              <div className="text-left text-3xl font-serif font-bold ml-2">
                <h1>133</h1>
                <h1>New Customer</h1>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="text-5xl">
                <GiProfit></GiProfit>
              </div>
              <div className="text-left text-3xl font-serif font-bold ml-2">
                <h1>199.562 $</h1>
                <h1>Company Profit</h1>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="text-5xl">
                <GiNetworkBars></GiNetworkBars>
              </div>
              <div className="text-left text-3xl font-serif font-bold ml-2">
                <h1>199.5556 $</h1>
                <h1>Sales Revenue</h1>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div>
          <div>
            <div className="">
              <div className="mt-10">
                <h1 className="text-2xl font-serif font-bold">
                  Average Weekly Sales
                </h1>
                <h1 className="text-3xl font-bold">1065.64565 $</h1>
              </div>
              <div className="mt-20">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chart}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="price" fill="#8884d8" barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10">
            <h1 className="text-3xl font-serif font-bold">Average Sales</h1>
            <h1 className="text-3xl font-bold">1445 $</h1>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
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
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="">
        <div className=" bg-slate-300">
          <h1 className="text-2xl font-bold py-5 lg:ml-5">
            Sales & Price Chart:
          </h1>
          <div className="md:ml-10"> 
            <ResponsiveContainer width="70%" height={300}>
              <BarChart
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
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-20  bg-slate-300">
        <h1 className="text-2xl font-bold py-5 md:ml-5">
          Last seven month sells chart:
        </h1>

        <div className="md:ml-10">
          <ResponsiveContainer width="80%" height={200}>
            <AreaChart
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
      </div>
      <div className="mt-20  mb-20 bg-slate-300">
        <h1 className="text-2xl font-bold py-5 md:ml-5">
          Our product price chart:
        </h1>

        <div className="md:ml-10">
          <ResponsiveContainer width="80%" height={200}>
            <BarChart
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
              <Bar
                dataKey="price"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
