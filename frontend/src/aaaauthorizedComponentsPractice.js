import React, { useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "./hooks/useLocalStorage";



const AuthorizedComponent = () => {


  const [storeToken, removeToken, verifyToken] = useLocalStorage();
 
  const currentUser = useContext(CurrentUserContext);

  console.log(currentUser)
  // useEffect(() => {
  //   const doVerification = () => {
  //     const username = verifyToken()
  //   }
  //   doVerification();
  //   console.log(username)
  // }, [])

  // if (!authed) {
  //   console.log('!authed')
  //   return (
  //     <>
  //       <h1>please log in</h1>
  //     </>
  //   )
  // }
  
  // console.log('authed')
  // return (
  //   <>
  //     <h1>authed</h1>
  //   </>
  // )



}


export default AuthorizedComponent;