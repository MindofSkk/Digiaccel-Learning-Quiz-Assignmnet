import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const isAuth = useSelector((store) => store.auth.isAuth);
    // const token = useSelector((store) => store.auth.token);
    const location = useLocation();
   if(!isAuth) {
     return <Navigate to="/login" replace state={{data : location.pathname}} />
   }
   return children
}

export default RequireAuth