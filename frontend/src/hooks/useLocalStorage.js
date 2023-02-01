import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useLocalStorage = () => {

  const storeToken = (token) => {
    localStorage.setItem('token', token)
    return token
  }

  const removeToken = () => {
    localStorage.removeItem('token')

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

  return [storeToken, removeToken, verifyToken];
};

export default useLocalStorage;