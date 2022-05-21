import { format } from 'date-fns';

import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

import Appointmentservice from './Appointmentservice';
import BookingModal from './BookingModal';

const Availableappointments = ({date}) => {
    // const [services,setServices ] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date,'PP');
    const {data: services, isLoading,refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res=> res.json()) )


    if(isLoading)
    {
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=> res.json())
    //     .then(data => setServices(data));
    // },[formattedDate])

    return (
        <div>
           <h4 className='text-primary text-center'>Available Appointments on {format(date, 'PP')}</h4> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   services?.map(service=> <Appointmentservice
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                   
                   ></Appointmentservice>)
               }
           </div>
           {treatment && <BookingModal date={date} treatment={treatment}
           setTreatment={setTreatment}
           refetch={refetch}
           ></BookingModal>}
        </div>
    );
};

export default Availableappointments;