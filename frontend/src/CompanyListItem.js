import React, { useContext } from "react";
import './CompanyListItem.css'
import { Link } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";






const CompanyListItem = ({ name, description, handle }) => {

  const currentUser = useContext(CurrentUserContext)

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