import { useContext } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const DashHome = () => {
  const {user}=useContext(AuthContext);
  const email =user?.email;
  console.log(email);
  const [customer, setCustomer] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000//user/${email}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer information:", error);
      });
  }, [email]);
  console.log(customer);

  return (
    <div className="flex justify-center w-full items-center h-screen bg-green-100">
      <SubscriptionCard
        companyName={customer?.name} 
        planName={customer?.userRole}
        subscriptionDate="Sep 1, 2023"
        endDate=""
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default DashHome;
