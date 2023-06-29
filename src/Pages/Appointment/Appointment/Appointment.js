import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableApppointment from '../AvailableAppointment/AvailableApppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    
    return (
        <div>
           <AppointmentBanner
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
           ></AppointmentBanner>
           <AvailableApppointment
            selectedDate={selectedDate}
           ></AvailableApppointment>
        </div>
    );
};

export default Appointment;