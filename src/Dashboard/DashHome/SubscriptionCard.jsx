import { Link } from "react-router-dom";

const SubscriptionCard = ({
  companyName,
  planName,
  subscriptionDate,
  endDate,
}) => {

  if(planName=='Prime'){
    endDate='1 sept 2024'
  }else{
    endDate='1 oct 2023'
  }
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-base-100">
      <div className="absolute top-0 right-0 p-4 text-gray-700">
        <Link>{companyName?companyName:'XY'} Company LTD</Link>
      </div>
      <div className="flex flex-col items-center justify-center bg-green-700 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">{planName} Plan</h2>
        <p className="text-white mb-2">
           
           <span> {subscriptionDate}  -{endDate}</span>
        </p>
      </div>
      {/* <img src={imageUrl} alt="Subscription" className="w-500 h-full" /> */}
    </div>
  );
};

export default SubscriptionCard;
