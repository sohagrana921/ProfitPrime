import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import { BsPersonFillAdd } from "react-icons/bs";
import { GiNetworkBars, GiProfit } from "react-icons/gi";
import { PieChart, Pie, Cell } from "recharts";
import { useLocation } from "react-router-dom";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group C", value: 300 },
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
  const allData = useLocation();
  const { updatedUserData } = allData.state;

  return (
    <div className="">
      <div className="text-center my-16 md:mt-32 md:mx-64">
        <p className="text-red-800">---Data Insights---</p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">Company Revenue</h3>
      </div>
      <div className="bg-sky-300 grid grid-cols-1 lg:grid-cols-3 text-center mb-32 ">
        <div>
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="text-5xl">
                <BsPersonFillAdd></BsPersonFillAdd>
              </div>
              <div className="text-left text-xl font-serif font-bold ml-2">
                <h1 className="text-red-800">133</h1>
                <h1 className="text-purple-950 uppercase">New Customer</h1>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="text-5xl">
                <GiProfit></GiProfit>
              </div>
              <div className="text-left text-xl font-serif font-bold ml-2 text-purple-950 uppercase">
                <h1 className="text-red-800">199.562 $</h1>
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
              <div className="text-left text-xl font-serif font-bold ml-2 text-purple-950 uppercase">
                <h1 className="text-red-800">199.5556 $</h1>
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
                <h1 className="text-xl font-bold text-red-800">1065.64565 $</h1>
                <h1 className="text-xl font-serif font-bold uppercase text-purple-950">
                  Average Weekly Sales Revenue
                </h1>
              </div>
              <div className="mt-20">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={updatedUserData}>
                    <XAxis dataKey="names" stroke="#8884d8" />
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
            <h1 className="text-xl font-bold text-red-800">1445 $</h1>
            <h1 className="text-xl font-serif font-bold uppercase text-purple-950">
              Average Sales Target
            </h1>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
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

      <div className=" bg-sky-300 py-10 mb-20">
        <ResponsiveContainer width="70%" height={300}>
          <BarChart
            data={updatedUserData}
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
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="price" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FreeDemo;
