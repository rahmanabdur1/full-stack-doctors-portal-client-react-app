import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useTitle from '../hook/useHooks';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
     const [isAdmin] = useAdmin(user?.email)
     useTitle("Dashboard")
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                        <li><Link to='/dashboard'>My Appointment</Link></li>

                        { isAdmin &&
                         <>
                                <li><Link to='/dashboard/allusers'>All users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>All Doctors</Link></li>
                                <li><Link to='/dashboard/managedoctor'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;