import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import './CheckoutForm.css'
import { Link } from "react-router-dom";

const CheckoutForm = ({pay}) => {
    const stripe = useStripe();
    const elements = useElements();
    // const [cardError, setError] = useState('');
    // const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

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
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            // setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // setError('')
        }

        // setProcessing(true)
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            pay,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'unknown',
                        email:  'anonymous'
                        // name: user?.displayName || 'unknown',
                        // email: user?.email || 'anonymous'
                    },
                },
            },
            
        );
        if(confirmError){
            // setError(confirmError.message)
        }
        console.log('intend' ,paymentIntent);
        // setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
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
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <Link to='/dashboard/dashhome'>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      </Link>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      </form>
        {transactionId && <p>Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;