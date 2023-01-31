import React from "react";
import './CompanyListItem.css'
import { Link } from "react-router-dom";







const CompanyListItem = ({ name, description, handle }) => {

  return (
    <div className="companyCard">
      <h4>
        <Link to={`/companies/${handle}`}>{name}</Link>
      </h4>
      <p>{description}</p>
    </div>
  )
}


export default CompanyListItem;