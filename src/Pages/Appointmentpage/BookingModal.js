import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import {  toast } from 'react-toastify';

const BookingModal = ({date,treatment,setTreatment}) => {
    const {_id,name, slots} = treatment;
    const [user,loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');



    const handleBooking = event =>{
        event.preventDefault ();
        const slot= event.target.slot.value;

const booking = {
  treatmentId: _id,
  treatment:name,
  date: formattedDate,
  slot,
  patient:user.email,
  patientName:user.name,
  phone:event.target.phone.value
}

fetch('http://localhost:5000/booking',{

method: 'POST' ,
headers:{
  'content-type':'application/json'
},
body: JSON.stringify(booking)
})

.then(res=>res.json())
.then(data =>{

console.log(data);
  setTreatment(null);
  
})





      
     
    }
    return (
        

 <div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols- gap-3 justify-items-center mt-2' >
    <select name="slot" className="select select-bordered w-full max-w-xs">
  {
      slots.map((slot, index) => <option 
      key={index}
      value={slot}>{slot}</option>)
  }
  
 
</select>
    <input type="text" value={format(date, 'PP')} className="input w-full max-w-xs" />
    <input type="name"  name="name" disabled value={user?.displayName || ''} className="input w-full max-w-xs" />
    <input type="email" name="email" disabled value={user?.email || ''} className="input w-full max-w-xs" />
    <input type="text" name="phone" placeholder="phone-number" className="input w-full max-w-xs" />
    <input type="submit" value="Submit" className=" btn btn-secondary input w-full max-w-xs" /></form>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
   
  </div>
</div>
</div>
    );
};

export default BookingModal;