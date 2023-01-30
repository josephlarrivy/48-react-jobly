import React, { useEffect, useState, render } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import Profile from './Profile';
import Company from './Company';
import Job from './AllJob';
import './ItemsDisplay.css'

import JoblyApi from "./api";




const ItemsDisplay = () => {

  const [data, setData] = useState([]);
  const {type} = useParams();
  let response;

  useEffect(() => {
    
    async function getData() {
      try {
        if (type === 'companies') {
          response = await JoblyApi.getCompanies();
          console.log(response)
          setData(response)
          let company 
        }
        else if (type === 'jobs') {
          response = await JoblyApi.getJobs();
          console.log(response)
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
          <Company
            key={handle}
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
          <Job
            key={id}
            title={title}
            salary={salary}
            equity={equity}
            companyHandle={companyHandle}
          />
        )
      })
    )
  }
  

}

export default ItemsDisplay;