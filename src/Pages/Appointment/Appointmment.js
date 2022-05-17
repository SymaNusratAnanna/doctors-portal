import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Home/PrimaryButton';


const Appointmment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex mt-20'>
            <div className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
            
            <img className='mt-[-100px]' src={doctor}  alt="" />

        </div>
        <div className='flex-1 px-5'>
        <h3 className='test-xl text-primary'>Appointment</h3>
        <h2 className='text-3xl text-white py-5'>Make Appointment Today</h2>
        <p className='text-white'>
            lorem 
        </p>
            </div> 
            </div>
            <PrimaryButton>Get Strted</PrimaryButton>
        </section>
    );
};

export default Appointmment;