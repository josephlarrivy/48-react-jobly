import React from "react";
import './Job.css'




const JobListItem = ({ id, title, salary, equity, companyHandle }) => {


    return (
        <div className="jobCard">
            <h4>{title}</h4>
            <p>{companyHandle}</p>
            <br></br>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
            <button>Apply</button>
        </div>
    )
}


export default JobListItem;