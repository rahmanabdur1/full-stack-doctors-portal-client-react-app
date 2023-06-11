import { createBrowserRouter } from "react-router-dom";


import Login from "../../Pages/Login/Login";

import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import Reviews from "../../Pages/Reviews/Reviews";
import MakeAppointment from "../../Pages/MakeAppointment/MakeAppointment";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/review',
                element: <Reviews></Reviews>
            },
            {
                path: '/appointment',
                element: <MakeAppointment></MakeAppointment>
            },

        ]
    }
])