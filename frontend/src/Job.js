import React from "react";
// import './Company.css'
import { Link } from "react-router-dom";
import './Job.css'






const Job = ({ title, salary, equity }) => {

  return (
    <div className="jobCard">
        <h4>{title}</h4>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
    </div>
  )
}


export default Job;









// let test = [
//   <li>one</li>,
//   <li>two</li>
// ]




// return (
//   <>
//     <ul>{test}</ul>
//   </>
// )