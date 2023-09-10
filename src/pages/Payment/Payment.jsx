import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import anime from '../../../animation_lmdq6nzz.json'
import Lottie from "lottie-react";

const Payment = () => {
  const { plan, billingOption } = useParams();

  let paymentValue = 0;

  if (plan === "Basic" && billingOption === "monthly") {
    paymentValue = 10;
  } else if (plan === "Basic" && billingOption === "yearly") {
    paymentValue = 100;
  } else if (plan === "Prime" && billingOption === "monthly") {
    paymentValue = 20;
  } else if (plan === "Prime" && billingOption === "yearly") {
    paymentValue = 200;
  }

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
  return (
    <div className="flex flex-col items-center">
      <div className="text-center my-16 md:my-24 md:mx-64">
        <p className="text-red-800">---You have selected the {plan} plan on {billingOption} billing.---</p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">        Payment</h3>
      </div>
      <p className="text-red-800 text-xl">Payment Value: ${paymentValue}</p>

      <div className="md:flex justify-center items-center">
        <div className="text-center lg:text-left ">
          <Lottie animationData={anime} loop={true} />
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm pay={paymentValue} userRole={plan} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
