import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hook/useHooks';

const ErrorElement = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    useTitle("Error")
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    };
    return (
        <div className='mt-20'>
            <p className='text-red-500 text-3xl text-center'>SomeThing went Wrong!</p>
            <p className='text-3xl text-center'>{error.statusText || error.message}</p>
            <h4 className="text-3xl text-center"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
        </div>
    );
};

export default ErrorElement;