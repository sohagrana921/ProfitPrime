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
  ResponsiveContainer,
} from "recharts";

const DataRevenue = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("https://profit-prime-server.vercel.app/revenueChart")
      .then((res) => res.json())
      .then((data) => {
        setChart(data);

        console.log(data);
      });
  });

  return (
    <div>
      <h1 className="text-center font-serif font-bold text-5xl mb-20">
        Business Information
      </h1>
      <ResponsiveContainer width="90%" height={200}>
        <LineChart
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
      </ResponsiveContainer>
    </div>
  );
};

export default DataRevenue;
