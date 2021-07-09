import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm/PaymentForm';

const stripePromise = loadStripe('pk_test_51J3169Dq7OvvBP83JPC9hFLdRUtveMUbHrh7Mrg27leZ60Yf43mQAVwLI4diVOq1K86vkh6USl0TfpdR2nJePJ1B00r9tuAmaB');
const Payment = (props) => {
    console.log(props.paymentData);
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm paymentData={props.paymentData}></PaymentForm>
        </Elements>
    );
};

export default Payment;