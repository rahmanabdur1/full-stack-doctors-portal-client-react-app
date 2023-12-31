import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useEffect } from 'react';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItems = (
        <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li> <button onClick={handleSignOut}>SignOut</button></li>

                </>
                :
                <li><Link to='/login'>Login</Link></li>

            }

        </React.Fragment>
    );

    // useEffect(() => {
    //     window.onscroll = function () {
    //         scrollFunction();
    //     };
    // }, []);

    // const scrollFunction = () => {
    //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //         document.getElementById("navbar").style.padding = "30px 10px";
            
    //     } else {
           
            
    //     }
    // };

    return (
        <div className='shadow'>
            <div className='navbar flex justify-between shadow'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={1}
                            className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute duration-700 ease-in ${'top-6' ? 'top-[-120px]' : ''
                                }`}
                        >
                            {menuItems}
                        </ul>

                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
