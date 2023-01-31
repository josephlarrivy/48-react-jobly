import React from "react";
import { Navigate } from 'react-router'

const LogOut = ({setToken, token}) => {
    setToken('');
    <Navigate to='/login' />
}


export default LogOut;