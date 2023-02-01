import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import useLocalStorage from "./hooks/useLocalStorage";



const LogOut = ({setCurrentUser}) => {
  const navigate = useNavigate();
  const [storeToken, removeToken, verifyToken] = useLocalStorage()

  

  useEffect(() => {
    const removeData = async () => {
      const remove = await removeToken()
      await setCurrentUser(null);

    }
    removeData()
  }, [])


  return (
    <div>
      <h4>Logged Out</h4>
      <Link to={'/login'}><button>Log In</button></Link>
      <Link to={'/signup'}><button>Sign Up</button></Link>
    </div>
  )

}


export default LogOut;