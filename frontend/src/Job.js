import React from "react";
import './Job.css'


const Job = ({ title, salary, equity }) => {

  return (
    <div className="jobCard">
      <h4>{title}</h4>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button>Apply</button>
    </div>
  )
}


export default Job;