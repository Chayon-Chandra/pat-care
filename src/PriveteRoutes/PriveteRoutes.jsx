import React, { use } from 'react';
import { AuthConText } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PriveteRoutes = ({children}) => {
    const {user, loading}  = use(AuthConText);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    };

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to ="/login"></Navigate>
    );
};

export default PriveteRoutes;