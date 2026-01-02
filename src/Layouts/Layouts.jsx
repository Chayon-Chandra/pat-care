import React from 'react';
import NavBar from '../Componentes/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Layouts;