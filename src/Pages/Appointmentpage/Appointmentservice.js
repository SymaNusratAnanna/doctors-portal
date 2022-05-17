import React from 'react';

const Appointmentservice = ({service, setTreatment}) => {
    const {name,slots}= service;   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-secondary">{name}</h2>
    <p>{slots.length>0?
    <span>{slots[0]}</span>:<span  className='text-red-500'>No slot available</span>
  }</p>
  <p>{slots.length} {slots.length>1? 'spaces' : 'spaces'}available</p>
    <div className="card-actions justify-end">
    
      <label htmlFor="booking-modal" disabled={slots.length===0} onClick={()=> setTreatment(service)}className="btn btn-secondary text-white uppercase">Booking</label>
    </div>
  </div>
</div>
    );
};

export default Appointmentservice;