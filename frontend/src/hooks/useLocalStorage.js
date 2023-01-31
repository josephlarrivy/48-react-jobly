import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useLocalStorage = () => {

  const [authed, setAuthed] = useState()

  const storeToken = (token) => {
    localStorage.setItem('token', token)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
  }

  const verifyToken = async () => {
    const storedToken = localStorage.getItem('token')
    const decodedToken = await JoblyApi.decodeToken(storedToken)

    if (decodedToken == 'invalid') {
      console.log('invalid')
      // console.log(decodedToken)
      setAuthed(false)
    } else {
      console.log('valid')
      // console.log(decodedToken)
      setAuthed(true)
    }

    
  }

  // console.log(authed)
  return [storeToken, removeToken, verifyToken, authed];
	
};

export default useLocalStorage;