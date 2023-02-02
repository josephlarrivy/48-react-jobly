import React, { useEffect, useState, render } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import Profile from './Profile';
import CompanyListItem from './CompanyListItem';
import JobListItem from './JobListItem';
import './ListContainer.css'

import JoblyApi from "./api";




const ListContainer = ({submitApplication, stateToken}) => {

  const [data, setData] = useState([]);
  const {type} = useParams();
  let response;

  useEffect(() => {
    
    async function getData() {
      try {
        if (type === 'companies') {
          response = await JoblyApi.getCompanies();
          setData(response)
          let company 
        }
        else if (type === 'jobs') {
          response = await JoblyApi.getJobs();
          // console.log(response)
          setData(response)
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [type]);
  

  if (!data) {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  } else if (type === 'companies') {
    return (
      data.map(function ({ handle, name, description }) {
        return (
          <CompanyListItem
            key={handle}
            id={handle}
            handle={handle}
            name={name}
            description={description}  
          />
        )
      })
    )
  } else if (type === 'jobs') {
    return (
      data.map(function ({ id, title, salary, equity, companyHandle }) {
        return (
          <JobListItem
            key={id}
            id={id}
            title={title}
            salary={salary}
            equity={equity}
            companyHandle={companyHandle}
            submitApplication={submitApplication}
            stateToken={stateToken}
          />
        )
      })
    )
  }
  

}

export default ListContainer;