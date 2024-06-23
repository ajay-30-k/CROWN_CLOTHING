import { Alert, Box } from "@mui/material";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckOutButton = ({ price }) => {
  const [paymentStatus, setPaymentStatus] = useState(null)
  const priceForStripe = price * 100;
  const Publishablekey ="pk_test_51PQvHqP6rYJ1GJ5LJKKM7OSGJY5d37w8OZFKFVssAMzGYqlYY9nCMqB9QcbMRJhw5No1eMWBg6v6OUHqe0jo1aVZ00zeevsYbK";
  const onToken = (token) => {
    console.log(token);

    // Simulating a payment process for demonstration purposes
    // In a real application, you would make an API call to your server to process the payment
    const isPaymentSuccessful = true; // Replace with actual payment success status

    if (isPaymentSuccessful) {
      setPaymentStatus('success');
      // alert('Payment successful');
    } else {
      setPaymentStatus('error');
      // alert('Payment failed');
    }
  };  
  return(
    <div>
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        {paymentStatus === 'success' && (
          <Alert variant="filled" severity="success" onClose={() => setPaymentStatus(null)}>
            Payment successful!
          </Alert>
        )}
        {paymentStatus === 'error' && (
          <Alert variant="filled" severity="error" onClose={() => setPaymentStatus(null)}>
            Payment failed. Please try again.
          </Alert>
        )}
      </Box>
        <StripeCheckout
        lable='Pay Now'
        name='Crown Clothing LTD'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        discription={`Your Total is ₹${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={Publishablekey}
        />
    </div>
     )

};
export default StripeCheckOutButton