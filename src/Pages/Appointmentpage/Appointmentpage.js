import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import Availableappointments from './Availableappointments';

const Appointmentpage = () => {
    const[date, setDate] = useState(new Date());
    return (
        <div>
            

<AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
<Availableappointments date={date}></Availableappointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointmentpage;