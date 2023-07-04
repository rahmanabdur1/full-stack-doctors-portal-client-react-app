import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hook/useHooks';

const BookingModal = ({ refetch,treatment, selectedDate, setTreatment }) => {
  const { name: treatmentName, slots ,price} = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext)
  useTitle("BookingModal")
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price
    }
    console.log(booking);

    fetch('https://full-doctors-portal-server-code.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged){
          setTreatment(null);
          toast.success('Booking confirmed');
          refetch()
        }
        else{
          toast.error(data.message)
        }
       
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-center text-lg">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="gap-4 grid grid-cols-1 mt-6">
            <input type="text" disabled value={date} className="input input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot, i) => <option
                  value={slot}
                  key={i}
                >{slot}</option>)
              }
            </select>
            <input type="name" name="name" readOnly defaultValue={user?.displayName} placeholder="Type here name" className="input input-bordered w-full" />
            <input type="email" name="email" readOnly defaultValue={user?.email} placeholder="Type here email" className="input input-bordered w-full" />
            <input type="name" name="phone" placeholder="Type here phone" className="input input-bordered w-full" />
            <br />
            <input type="submit" value="Submit" className="input input-bordered w-full btn btn-accent" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
