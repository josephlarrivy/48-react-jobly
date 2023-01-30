import React from "react";
import './Company.css'







const Company = ({ name, description }) => {

    return (
        <div className="companyCard">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}


export default Company;