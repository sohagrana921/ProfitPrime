import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import "./CheckoutForm.css";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const CheckoutForm = ({ pay, userRole }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState('');

  const price=parseFloat(pay).toFixed(2);
  const email = user?.email;

  useEffect(() => {
    if (price > 0) {
      axios.post('http://localhost:5000/create-payment-intent', { price }) 
        .then(res => {
          console.log(res);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
          console.error('Error fetching client secret:', error);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('')
    }

    setProcessing(true)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // name: "unknown",
            // email: "anonymous",
            name: user?.displayName || 'unknown',
            email: user?.email || 'anonymous'
          },
        },
      });
      console.log(user);
    if (confirmError) {
      setError(confirmError.message)
    }
    console.log("intend", paymentIntent);
    setProcessing(false)
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // const payment = {
      //     email: user?.email,
      //     transactionId: paymentIntent.id,
      //     price,
      //     date: new Date(),
      //     className:classItem.className,
      //     classItem,
      //     status:'pending'
      // }
      // axiosSecure.post('/payments', payment)
      //     .then(res => {
      //         console.log(res.data);
      //         if (res.data?.result?.insertedId) {
      //             //
      //         }
      //     })
      

      const updateUserRole = async (email, userRole) => {
        try {
          const response = await axios.post('http://localhost:5000/update-user', {
            email,
            userRole,
          });
      
          if (response.status === 200) {
            console.log('User role updated successfully');
            // Perform any additional actions or state updates as needed
          } else {
            console.error('Failed to update user role');
          }
        } catch (error) {
          console.error('Error updating user role:', error);
        }
      };

      updateUserRole(email,userRole);



    }
  };
  console.log(transactionId);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/* <Link to="/info">
          <button
            className="btn btn-sm bg-green-800 text-white"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </Link> */}

        <p>{cardError}</p>
        <button className="btn btn-sm bg-green-800 text-white" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
      </form>
      {transactionId && (
        <p>Transaction complete with transactionId: {transactionId}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
