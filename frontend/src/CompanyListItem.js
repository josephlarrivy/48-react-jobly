import React, { useContext } from "react";
import './CompanyListItem.css'
import { Link } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";






const CompanyListItem = ({ id, name, description, handle }) => {

  const currentUser = useContext(CurrentUserContext)

  return (
    <div className="companyCard" id={id}>
      <h4>
        <Link to={`/companies/${handle}`}>{name}</Link>
      </h4>
      <p>{description}</p>
    </div>
  )
}


export default CompanyListItem;