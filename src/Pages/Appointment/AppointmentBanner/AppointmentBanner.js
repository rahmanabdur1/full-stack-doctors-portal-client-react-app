import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({setSelectedDate,selectedDate}) => {
       
    return (
        <header className='my-6'>
         <div className="hero" style={{ backgroundImage: `url(${bg})` }} >
          <div className="hero-content flex-col lg:flex-row-reverse">
         <img src={chair} className="rounded-lg max-w-sm shadow-2xl" alt='dentist chair' />
           <div className='mr-6'>
            <DayPicker
             mode="single"
             selected={selectedDate}
             onSelect={setSelectedDate}
            
            />
        
            </div>
          </div>
        </div>
        </header>
    );
};

export default AppointmentBanner;