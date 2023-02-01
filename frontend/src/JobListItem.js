import React, { useContext }from "react";
import './Job.css'
import CurrentUserContext from "./CurrentUserContext";




const JobListItem = ({ id, title, salary, equity, companyHandle, submitApplication, stateToken}) => {

  const currentUser = useContext(CurrentUserContext);

  const handleApply = (e) => {
    const id = e.target.parentNode.getAttribute('id')
    const data = {"user": currentUser};


    submitApplication(currentUser, data, id)
  }


  return (
    <div className="jobCard" id={id}>
      <h4>{title}</h4>
      <p>{companyHandle}</p>
      <br></br>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={handleApply}>Apply</button>
    </div>
  )
}


export default JobListItem;