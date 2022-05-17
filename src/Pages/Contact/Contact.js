import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex w-100 mt-5'>
            
            <div className=' items-center'>

               <div>
               <h2 className='text-white text-xl font-bold'>  Stay connected with us</h2>
               </div>
               <div  items-center>
               <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

                <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />

               <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
               </div>



</div>



        </section>
    );
};

export default Contact;