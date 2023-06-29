import React from 'react';

const AppointmentOption = ({appointmentoption,setTreatment}) => {
    const {name, slots}=appointmentoption
    return (
        <div className="card w-100 mt-10  shadow-xl">
        <div className="card-body my-10">
          <h2 className="card-title text-2xl justify-center text-secondary">{name}</h2>
          <p className='text-center'>{slots.length > 0 ? slots[0]: 'Try another day'}</p>
          <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
          <div className="card-actions justify-center">
            <label
            disabled={slots.length === 0}
             htmlFor="booking-modal" 
             onClick={()=>setTreatment(appointmentoption)} 
             className=" text-white btn btn-primary">open modal</label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOption;