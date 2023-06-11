import React from 'react';
import footer from '../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer
            style={{
                backgroundImage: `url(${footer})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
            }}
            className="p-10">

            <div className="footer flex justify-around ">
                <div >
                    <span className="footer-title">Services</span>
                    <Link className="">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <p className='text-center mt-20'>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>

    );
};

export default Footer;