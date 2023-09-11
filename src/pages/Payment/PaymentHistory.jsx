import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    // Fetch payment history data from your server (adjust the URL as needed)
    axios
      .get(`https://profit-prime-server.vercel.app/payment-history/${email}`)
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching payment history:", error);
      });
  }, [email]);

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center h-screen">
        <div className="p-4  rounded-lg md:w-full">
          <div className="text-center my-16 md:mb-20 md:mx-64">
            <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">Payment History</h3>
          </div>
          <div className="overflow-x-auto bg-purple-300 rounded-lg p-5">
            <table className="md:w-full table-auto">
              <thead>
                <tr>
                  <th className="md:px-4 px-1 py-2 text-red-800">Transaction ID</th>
                  <th className="md:px-4 px-1 py-2 text-red-800">Date</th>
                  <th className="md:px-4 px-1 py-2 text-red-800">Amount</th>
                  <th className="md:px-4 px-1 py-2 text-red-800">Plan</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment) => (
                  <tr key={payment.transactionId} className="text-center">
                    <td className="md:px-4 px-1 py-2">
                      {payment.transactionId}
                    </td>
                    <td className="md:px-4 px-1 py-2">
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                    <td className="md:px-4 px-1 py-2">
                      <span className="text-green-600">
                        $
                        {typeof payment.price === "number"
                          ? payment.price.toFixed(2)
                          : payment.price}
                      </span>
                    </td>
                    <td className="md:px-4 px-1 py-2">{payment.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
