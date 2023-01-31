import React, { useContext, useEffect }from "react";
import { Link } from "react-router-dom";

const Home = ({currentUser}) => {
  
  console.log(currentUser)
  
  if (currentUser) {
    return (
      <>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <h2>Welcome Back, {currentUser}</h2>
      </>
    )
  } else {
    return (
      <>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <Link to={'/login'}><button>Log In</button></Link>
        <Link to={'/signup'}><button>Sign Up</button></Link>

      </>
    )
  }
  
}

export default Home;