import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useLocalStorage = () => {

  const storeToken = (token) => {
    localStorage.setItem('token', token)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
  }

  const verifyToken = () => {
    const storedToken = localStorage.getItem('token')
    const decodedToken = JoblyApi.decodeToken(storedToken)

    if (decodedToken === 'invalid') {
      console.log('not verified')
    } else {
      console.log('verified')
    }
  }

  return [storeToken, removeToken, verifyToken];
	
};

export default useLocalStorage;