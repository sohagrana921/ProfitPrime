import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Line,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import { BsPersonFillAdd } from "react-icons/bs";
import { GiNetworkBars, GiProfit } from "react-icons/gi";
import { useLocation } from "react-router-dom";

const FreeDemo1 = () => {
  const allData = useLocation();
  const { updatedUserData } = allData.state;

  return (
    <div className="mt-20">
      <h2 className="text-center py-10 font-serif font-bold text-5xl mb-10">
        Your Company Revenue Chart.
      </h2>
      <div className="bg-slate-300 grid grid-cols-1 lg:grid-cols-2 text-center mb-32 ">
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
                  Average Weekly Sales Revenue
                </h1>
                <h1 className="text-3xl font-bold">1065.64565 $</h1>
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
      </div>
      <div className="bg-slate-300 mb-20">
        <h1 className="text-4xl font-serif font-bold py-10 ml-10">Price & Sales Chart:</h1>
        <ResponsiveContainer width="80%" height={300}>
          <LineChart
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
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FreeDemo1;
