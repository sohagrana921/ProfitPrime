import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import DataInsightForm from "./DataInsightForm";
import BusinessForm from "./BusinessForm";
const AdminDashBoard = () => {
  const [activeTab, setActiveTab] = useState("addClass");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full mt-32">
      <Tabs className="my-12 text-center">
        <TabList className="flex justify-center gap-1 my-6">
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("addClass")}
              className={` px-8 py-4 rounded text-xl font-bold ${
                activeTab == "addClass" ? " bg-pink-700 text-white" : ""
              }`}
            >
              Data Insights
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("myClass")}
              className={`px-8 py-4 rounded text-xl font-bold ${
                activeTab == "myClass" ? " bg-pink-700 text-white" : ""
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