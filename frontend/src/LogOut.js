import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



const LogOut = ({setToken}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setToken();
    navigate('/')
  }, [])

}


export default LogOut;