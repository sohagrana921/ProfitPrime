import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    // Fetch payment history data from your server (adjust the URL as needed)
    axios
      .get(`http://localhost:5000/payment-history/${email}`)
      .then((response) => {
        setPayments(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching payment history:', error);
      });
  }, [email]);

  return (
    <div className="h-full w-full bg-gradient-to-r from-green-200 via-gray-200 to-green-200">
      <div className="flex items-center justify-center h-screen">
        <div className='p-4 bg-gradient-to-r from-green-200 via-blue-200 to-green-300 rounded-lg max-w-screen-md'>
          <h1 className="text-3xl font-semibold mb-4 text-indigo-600">Payment History</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="px-4 py-2">Transaction ID</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Plan</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment) => (
                  <tr key={payment.transactionId}>
                    <td className="px-4 py-2">{payment.transactionId}</td>
                    <td className="px-4 py-2">{new Date(payment.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2">
                      <span className="text-green-600">
                        ${typeof payment.price === 'number' ? payment.price.toFixed(2) : payment.price}
                      </span>
                    </td>
                    <td className="px-4 py-2">{payment.plan}</td>
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
