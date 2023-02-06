import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useLocalStorage = () => {

  const storeData = (token) => {
    localStorage.setItem('token', token)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
  }
  
  const retrieveToken = () => {
    const storedToken = localStorage.getItem('token')
    console.log(storedToken);
    return storedToken
  }

  const verifyToken = async () => {
    const storedToken = localStorage.getItem('token')
    const decodedToken = await JoblyApi.decodeToken(storedToken)
    if (decodedToken == 'invalid') {
      return null;
    } else {
      return decodedToken;
    }
  }

  return [storeData, removeToken, verifyToken, retrieveToken];
};

export default useLocalStorage;




// verify what's happenning in middleware using insomnia requests
// make sure what the React part of app is sending is the same as what is working in insomnia requests
// email Christos when i get things working