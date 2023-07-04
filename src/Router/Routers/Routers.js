import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import Testimonial from "../../Pages/Testimonial/Testimonial";
import SignUp from "../../Pages/UserCreateAndLogin/SignUp";
import Login from "../../Pages/UserCreateAndLogin/Login";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../../layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import InfoCards from "../../Pages/InfoCards/InfoCards";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<InfoCards></InfoCards>
            },
            {
              path:'/contact',
              element:<ContactUs></ContactUs>
            },
            {
                path: '/reviews',
                element: <Testimonial></Testimonial>
            },
            {
                path: '/appointment',
                element:<Appointment></Appointment>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
             
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
               path:'/dashboard',
               element:<MyAppointment></MyAppointment>
            },{
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
            ,{
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctors></AddDoctors></AdminRoute>,
             
                
            },
            ,{
                path:'/dashboard/managedoctor',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            ,{
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params})=> fetch(`https://full-doctors-portal-server-code.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])