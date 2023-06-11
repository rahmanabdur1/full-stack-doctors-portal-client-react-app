import React from 'react';
import clock from '../../../src/assets/icons/clock.svg';
import marker from '../../../src/assets/icons/marker.svg';
import phone from '../../../src/assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 am to 5:00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9:00 am to 5:00pm everyday',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 3,
            name: 'Contact us',
            description: 'Open 9:00 am to 5:00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid gap-6 mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <InfoCard
                    key={cardData.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;