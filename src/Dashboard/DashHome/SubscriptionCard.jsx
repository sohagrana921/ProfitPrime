import { Link } from "react-router-dom";

const SubscriptionCard = ({
  companyName,
  planName,
  subscriptionDate,
  endDate,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      <div className="absolute top-0 right-0 p-4 text-gray-700">
        <Link>{companyName}</Link>
      </div>
      <div className="flex flex-col items-center justify-center bg-yellow-50 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">{planName}</h2>
        <p className="text-gray-600 mb-2">
          {subscriptionDate} - {endDate}
        </p>
      </div>
      {/* <img src={imageUrl} alt="Subscription" className="w-500 h-full" /> */}
    </div>
  );
};

export default SubscriptionCard;
