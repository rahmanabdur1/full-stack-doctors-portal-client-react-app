import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrivateButton from '../../Components/PrivateButton/PrivateButton';
const Treatment = () => {
    return (
        <section className='mt-20'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={treatment} className="max-w-sm h-2/3 hidden md:block lg:block rounded-lg shadow-2xl" alt='/' />
                    <div className='lg:w-1/3'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrivateButton>Get Started</PrivateButton>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Treatment;