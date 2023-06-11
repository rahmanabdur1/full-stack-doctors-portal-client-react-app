import React from 'react';
import chair from '../../../src/assets/images/chair.png';
import bg from '../../../src/assets/images/bg.png';
import PrivateButton from '../../Components/PrivateButton/PrivateButton';

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})` }} >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br />Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrivateButton>Get Started</PrivateButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;