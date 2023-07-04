import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';
import './MyApppointment.css';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://full-doctors-portal-server-code.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    return currentTime;
  };

  return (
    <div className="ml-10">
      <h1 className="text-3xl mb-6 text-secondary">My Appointments</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings &&
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slots} {getCurrentTime()}</td>
                  <td>
                 
                    {booking.price && !booking.paid ? (
                     <Link to={`/dashboard/payment/${booking._id}`}>
                      <button
                       className='btn btn-primary
                        btn-sm pulsing-button'>
                        Pay</button>
                     </Link>
                    ) : (
                      booking.price && booking.paid && (
                        <span className='btn btn-primary'>Paid</span>
                      )
                    )}
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
