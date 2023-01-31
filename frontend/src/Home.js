import React, { useContext, useEffect }from "react";


const Home = ({currentUser}) => {
  
  console.log(currentUser)
  
  return (
    <>
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      <h2>Welcome Back, {currentUser}</h2>
    </>
  )
}

export default Home;