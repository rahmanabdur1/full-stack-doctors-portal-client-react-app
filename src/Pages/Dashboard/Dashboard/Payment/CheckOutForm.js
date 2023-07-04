import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckOutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransitionId] = useState('');
  const [processing, setProcessing] = useState(false);

  const { price, email, patient, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://full-doctors-portal-server-code.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    }
    else {
      setCardError('');
    }
    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    console.log(paymentIntent,'j')
    if (paymentIntent.status === "succeeded") {
      console.log('card info', card);
      // store payment info in the database
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id
      }
      fetch('https://full-doctors-portal-server-code.vercel.app/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            setSuccess('Congrats! your payment completed');
            setTransitionId(paymentIntent.id);
          }
        })
    }
    setProcessing(false);


  }

  return (
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
      <button
        className='btn btn-sm mt-4 btn-primary'
        type="submit"
        disabled={!stripe || processing}
      >
        Pay
      </button>
      {cardError && <p>{cardError}</p>}
      {success && (
        <div>
          <p className='text-green'>{success}</p>
          <p>Your transitionId: <span>{transitionId}</span></p>
        </div>
      )}
    </form>
  );
};

export default CheckOutForm;
