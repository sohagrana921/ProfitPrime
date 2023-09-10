import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import DataInsightForm from "./DataInsightForm";
import BusinessForm from "./BusinessForm";
import Marquee from "react-fast-marquee";
const AdminDashBoard = () => {
  const [activeTab, setActiveTab] = useState("addClass");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full bg-gradient-to-r">
      <div className="text-center my-16 md:my-24 md:mx-64">
        <p className="text-red-800">---Give a Trial---</p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800"><Marquee>Enter Data For Free Trial</Marquee></h3>
      </div>
      <Tabs className="my-12 text-center">
        <TabList className="flex justify-center gap-1 my-6">
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("addClass")}
              className={` px-8 py-4 rounded text-2xl font-bold ${activeTab == "addClass" ? " bg-red-800  text-white " : "bg-purple-950 text-white"
                }`}
            >
              Data Insights
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("myClass")}
              className={`px-8 py-4 rounded text-2xl font-bold ${activeTab == "myClass" ? " bg-red-800 text-white" : "bg-purple-950 text-white"
                }`}
            >
              Business Information
            </Link>
          </Tab>
        </TabList>
        <TabPanel>
          <DataInsightForm></DataInsightForm>
        </TabPanel>
        <TabPanel>
          <BusinessForm></BusinessForm>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminDashBoard;
