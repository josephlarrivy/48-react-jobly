import React from "react";
import './Job.css'
import useLocalStorage from "./hooks/useLocalStorage";


const Job = ({ id, title, salary, equity, submitApplication2 }) => {

  const [storeToken, removeToken, verifyToken, retrieveToken] = useLocalStorage();

  const handleApply = async (e) => {
    const id = e.target.parentNode.getAttribute('id')
    console.log(id)
    const decodedToken = await verifyToken()
    console.log(decodedToken.username)
    submitApplication2(decodedToken.username, id)
  }


  return (
    <div className="jobCard" id={id}> 
      <h4>{title}</h4>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={handleApply}>Apply</button>
    </div>
  )
}


export default Job;