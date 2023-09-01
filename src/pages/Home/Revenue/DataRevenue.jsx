import { useState } from "react";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// const data = [
//   {
//     name: "productA",
//     sales: 4000,
//     unitPrice: 1500,
//     amt: 2400,
//   },
//   {
//     name: "productB",
//     sales: 5000,
//     unitPrice: 1650,
//     amt: 2210,
//   },
//   {
//     name: "productC",
//     sales: 2050,
//     unitPrice: 1900,
//     amt: 2290,
//   },
//   {
//     name: "productD",
//     sales: 1000,
//     unitPrice: 1600,
//     amt: 2000,
//   },
//   {
//     name: "productE",
//     sales: 1860,
//     unitPrice: 1300,
//     amt: 2181,
//   },
//   {
//     name: "productF",
//     sales: 1600,
//     unitPrice: 2000,
//     amt: 2500,
//   },
//   {
//     name: "productG",
//     sales: 1850,
//     unitPrice: 2500,
//     amt: 2100,
//   },
// ];

const DataRevenue = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("/revenueChart.json")
      .then((res) => res.json())
      .then((data) => {
        setChart(data);

        console.log(data);
      });
  });

  return (
    <div>
      <h1 className="text-center font-serif font-bold text-5xl mb-20">Business Information</h1>
      <LineChart
        width={600}
        height={400}
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
        <Line
          type="monotone"
          dataKey="unitPrice"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default DataRevenue;
