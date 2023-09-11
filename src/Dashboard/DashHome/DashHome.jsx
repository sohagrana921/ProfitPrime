import { useContext } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const DashHome = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [customer, setCustomer] = useState();
  useEffect(() => {
    axios
      .get(`https://profit-prime-server.vercel.app/user/${email}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer information:", error);
      });
  }, [email]);
  

  return (
    <div className="flex justify-center w-full items-center h-screen bg-green-100">
      <SubscriptionCard
        companyName={customer?.name}
        planName={customer?.userRole}
        subscriptionDate="Sep 8, 2023"
        endDate=""
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default DashHome;
