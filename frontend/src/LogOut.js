import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router'
// import CurrentUserContext from "./CurrentUserContext";



const LogOut = ({setToken}) => {
  useEffect(() => {
    setToken();
  }, [])
}


export default LogOut;