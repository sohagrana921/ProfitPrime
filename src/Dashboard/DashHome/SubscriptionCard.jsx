import { Link } from "react-router-dom";
import anime from "../../../animation_lmiy89am.json";
import Lottie from "lottie-react";

const SubscriptionCard = ({
  companyName,
  planName,
  subscriptionDate,
  endDate,
}) => {
  if (planName == "Prime") {
    endDate = "15 Sept 2024";
  } else {
    endDate = "15 Oct 2023";
  }
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-base-100">
      <div className="absolute top-0 right-0 p-4 text-gray-700">
        <Link to={"/dashboard/profile"}>
          {companyName ? companyName : "XY"}
        </Link>
      </div>
      <div>
        <div>
          <Lottie animationData={anime} loop={true} />
        </div>
        <div className="flex flex-col items-center justify-center bg-purple-300 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-2 text-red-800">
            {planName} Plan
          </h2>
          <p className="mb-2 text-purple-950">
            <span>
              {" "}
              {subscriptionDate} -{endDate}
            </span>
          </p>
        </div>
      </div>
      {/* <img src={imageUrl} alt="Subscription" className="w-500 h-full" /> */}
    </div>
  );
};

export default SubscriptionCard;
