import React from 'react';
import fluoride from '../../../src/assets/images/fluoride.png'
import cavity from '../../../src/assets/images/cavity.png'
import whitening from '../../../src/assets/images/whitening.png'
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Treatment',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the',
            img: cavity
        },
        {
            id: 3,
            name: 'whitening Treatment',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the',
            img: whitening
        },
    ]
    return (
        <dvi className=''>
            <div className='text-center pt-16'>
                <h2 className='text-xl font-bold text-primary uppercase'>Our Services</h2>
                <p className='text-3xl'>Services We Provider</p>
            </div>

            <div className='grid gap-6 mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </dvi>
    );
};

export default Services;