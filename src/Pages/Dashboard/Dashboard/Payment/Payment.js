import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import Loading from '../../../Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  const booking = useLoaderData();
  const navigation =useNavigation();

  console.log('...', booking);
  const { treatment, price, appointmentDate, slot } = booking;
  if(navigation.state === "loading"){
    return <Loading></Loading>
  }
  return (
    <div className="ml-10 mt-8">
      <div className='text-center'>
        <h3>Payment for {treatment}</h3>
        <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
      </div>
      <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

