import React, { useState } from 'react';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import '../../../Home/Services/AddService/AddService.css'

const PaymentForm = (props) => {
  // const data = props.paymentData;
  
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setpaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentComplete, setPaymentComplete] = useState({});

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setpaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setpaymentError(null);
      console.log('[PaymentMethod]', paymentMethod);
      const newData = {...props.paymentData}
      newData['PaymentInfo'] = paymentMethod;
      newData['status'] = 'Pending';
      newData['class'] = 'danger';
      // setPaymentComplete(newData);
      // console.log(paymentComplete)
      fetch('https://floating-forest-16007.herokuapp.com/ordered', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
  };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={{
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
                }} />
                {
                    paymentError && <p className="text-danger" style={{fontSize: '16px', fontFamily: `${"'Cabin', sans-serif"}`}}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p className="text-success" style={{fontSize: '16px', fontFamily: `${"'Cabin', sans-serif"}`}}>Payment Successful !!!</p>
                }
            <button className="btn btn-warning linkBtn py-2 mt-3 text-white" type="submit" disabled={!stripe}>
                PAY
            </button>
        </form>
    );
};

export default PaymentForm;