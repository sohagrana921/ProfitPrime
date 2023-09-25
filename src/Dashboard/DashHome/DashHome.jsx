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
  const [payments, setPayments] = useState([]);
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Fetch payment history data from your server (adjust the URL as needed)
    axios
      .get(`https://profit-prime-server.vercel.app/payment-history/${email}`)
      .then((response) => {
        setPayments(response.data[0]);
        console.log(response.data);

        const paymentDate = new Date(payments?.date);
        if (customer?.userRole === "yearlyPrime" || customer?.userRole === "yearlyBasic") {
          const oneYearLater = new Date(paymentDate);
          oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
          setEndDate(oneYearLater.toLocaleDateString());
        } else {
          const oneMonthLater = new Date(paymentDate);
          oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
          setEndDate(oneMonthLater.toLocaleDateString());
        }
      })
      .catch((error) => {
        console.error("Error fetching payment history:", error);
      });
  }, [customer?.userRole, email, payments?.date]);




  useEffect(() => {
    axios
      .get(`https://profit-prime-server.vercel.app/user/${email}`)
      .then((response) => {
        setCustomer(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching customer information:", error);
      });
  }, [email]);

  return (
    <div className="flex justify-center w-full items-center h-screen">
      <SubscriptionCard
        companyName={customer?.name}
        planName={customer?.userRole}
        subscriptionDate={new Date(payments?.date).toLocaleDateString()}
        endDate={endDate}
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default DashHome;
