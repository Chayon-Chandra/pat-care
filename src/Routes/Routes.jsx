import React from 'react';
import { createBrowserRouter } from "react-router";
import Layouts from '../Layouts/Layouts';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Services from '../pages/Services/Services';




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
        Component:Profile
      }


    ]
  },

]);


export default router;