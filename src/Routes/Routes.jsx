import React from 'react';
import { createBrowserRouter } from "react-router";
import Layouts from '../Layouts/Layouts';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Services from '../pages/Services/Services';
import ServiceDetails from '../Componentes/ServiceDetails/ServiceDetails';
import LogIn from '../Componentes/LogIn/LogIn';
import Register from '../Componentes/Register/Register';
import PriveteRoutes from '../PriveteRoutes/PriveteRoutes';





const router = createBrowserRouter([
  { 
    path: "/",
    Component: Layouts,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        index: true,
        Component:Home
      },
      {
        path:"/services",
        Component:Services
      },
      {
        path:"/profile",
        element: <PriveteRoutes>
          <Profile></Profile>
        </PriveteRoutes>
        
      },
      {
        path:"/services/:id",
         element: <PriveteRoutes>
          <ServiceDetails></ServiceDetails>
         </PriveteRoutes>
      },
      {
        path:"/login",
        Component: LogIn
      },
      {
        path:"/register",
        Component: Register
      }


    ]
  },

]);


export default router;