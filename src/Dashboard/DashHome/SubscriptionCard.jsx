import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "../../../animation_lmiy89am.json";
import Lottie from "lottie-react";
import { differenceInSeconds } from "date-fns";

const SubscriptionCard = ({
  companyName,
  planName,
  subscriptionDate,
  endDate,
}) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate the remaining time and update it every second
  useEffect(() => {
    const interval = setInterval(() => {
      const endDateParsed = new Date(endDate);
      const today = new Date();
      const timeRemaining = differenceInSeconds(endDateParsed, today);

      if (timeRemaining <= 0) {
        clearInterval(interval); // Stop the countdown when it reaches zero
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeRemaining / (60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
        const seconds = timeRemaining % 60;

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [endDate]);

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
      <div className=" justify-center items-center">
        <div>
          <Lottie animationData={anime} loop={true} />
        </div>
        <div className="flex flex-col items-center justify-center bg-purple-300 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-2 text-red-800">
            {planName} Plan
          </h2>
          <p className="mb-2 text-purple-950">
               Time: {subscriptionDate} - {endDate}
            <span>
            </span>
          </p>
          <p className="mb-2 text-red-800 font-bold">
            <span>{countdown.days} days,</span> <span>{countdown.hours} hours,</span> <span>{countdown.minutes} minutes,</span> <span>{countdown.seconds} seconds</span> left

          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
