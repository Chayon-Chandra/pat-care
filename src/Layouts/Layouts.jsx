import React from 'react';
import NavBar from '../Componentes/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';

const Layouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;