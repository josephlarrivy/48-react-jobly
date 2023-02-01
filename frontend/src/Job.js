import React from "react";
import './Job.css'


const Job = ({ id, title, salary, equity }) => {

  return (
    <div className="jobCard" id={id}> 
      <h4>{title}</h4>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button>Apply</button>
    </div>
  )
}


export default Job;