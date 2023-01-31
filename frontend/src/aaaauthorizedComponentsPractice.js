import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";



const AuthorizedComponent = () => {

  const navigate = useNavigate()

  const [storeToken, removeToken, verifyToken, authed] = useLocalStorage();
 
  useEffect(() => {
    const doVerification = () => {
      verifyToken()
    }
    doVerification()
  }, [])

  
    return (
      <>
        <h1>authed</h1>
      </>
    )
  


}


export default AuthorizedComponent;