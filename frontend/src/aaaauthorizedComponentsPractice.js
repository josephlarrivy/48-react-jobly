import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";



const AuthorizedComponent = ({ stateToken }) => {

  const [storeToken, removeToken, verifyToken] = useLocalStorage();
 
  useEffect(() => {
    const compareTokens = (tokenCheck) => {
    verifyToken(tokenCheck)
    }
    compareTokens(stateToken)
  }, [])


}


export default AuthorizedComponent;