import React, { useContext }from "react";
import './Job.css'
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "./hooks/useLocalStorage";



const JobListItem = ({ id, title, salary, equity, companyHandle, submitApplication, submitApplication2, stateToken}) => {
  

  const currentUser = useContext(CurrentUserContext);
  const [storeToken, removeToken, verifyToken, retrieveToken] = useLocalStorage();

  const handleApply = (e) => {
    const id = e.target.parentNode.getAttribute('id')
    const token = retrieveToken();
    const method = 'post';
    submitApplication(`users/${currentUser}/jobs/${id}`, token, method)
  }

  // const handleApply = async (e) => {
  //   const id = e.target.parentNode.getAttribute('id')
  //   const decodedToken = await verifyToken()
  //   console.log(decodedToken.username)
  //   submitApplication2(decodedToken.username, id)
  // }


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