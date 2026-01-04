import React from 'react';
import NavBar from '../Componentes/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layouts = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Layouts;