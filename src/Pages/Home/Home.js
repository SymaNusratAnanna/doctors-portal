import React from 'react';
import Appointmment from '../Appointment/Appointmment';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import Footer from '../Shared/Footer/Footer';
import Testimonal from '../Testi monials/Testimonal';
import Banner from './Banner/Banner';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointmment></Appointmment>
            <Testimonal></Testimonal>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;