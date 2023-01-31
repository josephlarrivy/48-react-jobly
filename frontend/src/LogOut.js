import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "./hooks/useLocalStorage";



const LogOut = ({setStateToken}) => {
  const navigate = useNavigate();
  const [storeToken, removeToken, verifyToken] = useLocalStorage()

  useEffect(() => {
    setStateToken();
    removeToken()
    navigate('/')
  }, [])

}


export default LogOut;