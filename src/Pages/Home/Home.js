import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';

import MakeAppointment from '../MakeAppointment/MakeAppointment';

import ContactUs from '../ContactUs/ContactUs';
import Treatment from '../Treatment/Treatment';
import Services from '../ServicesItems/Services';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
             <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;