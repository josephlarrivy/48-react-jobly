import React from "react";
import './Job.css'
import useLocalStorage from "./hooks/useLocalStorage";
import useToggle from "./hooks/useToggle";

const Job = ({ id, title, salary, equity, submitApplication2 }) => {

  const [storeToken, removeToken, verifyToken, retrieveToken] = useLocalStorage();
  const [applied, setApplied] = useToggle(false)

  const handleApply = async (e) => {
    const id = e.target.parentNode.getAttribute('id')
    // console.log(id)
    const decodedToken = await verifyToken()
    // console.log(decodedToken.username)
    setApplied(true)
    submitApplication2(decodedToken.username, id)
  }


  return (
    <div className="jobCard" id={id}> 
      <h4>{title}</h4>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={handleApply}>
        {applied ? 'Applied' : 'Apply'}
      </button>
    </div>
  )
}


export default Job;