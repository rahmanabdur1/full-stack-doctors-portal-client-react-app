import React, {  useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import useTitle from '../../../hook/useHooks';
const AvailableApppointment = ({selectedDate}) => {
    const [treatment, setTreatment]=useState(null)
    const date = format(selectedDate, 'PP');
    useTitle("Appointment")
    const {data:appointmentoptions = [], refetch,isLoading}=useQuery({
        queryKey: ['appointmentoptions',date],
        //combinationkey
        queryFn: async() =>{
            const res =await fetch (`https://full-doctors-portal-server-code.vercel.app/appointmentOptions?date=${date}`)
            const data =await res.json();
            return data
        }      
    })
 
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section>
        <div className='mt-16'>
        <p className='text-center text-secondary text-2xl text-bold'>You have selected date: {format(selectedDate, 'PP')}</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointmentoptions.map(option => <AppointmentOption
                key={option._id}
                appointmentoption={option}
                setTreatment={setTreatment}
                ></AppointmentOption>)
            }
        </div>
       {
        treatment &&  <BookingModal
        selectedDate={selectedDate}
       treatment={treatment}
       setTreatment={setTreatment}
       refetch={refetch}
       ></BookingModal>
       }
        </section>
    );
};

export default AvailableApppointment;