import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import JoblyApi from "./api";
import Job from './Job';
import CompanyTitle from './CompanyTitle';





const JobsByCompany = ({ submitApplication2 }) => {

  const [data, setData] = useState('loading');
  const { handle } = useParams();
  let response;
  let jobsArray = [];

  useEffect(() => {

    async function getData() {
      try {
        response = await JoblyApi.getCompany(handle);
        setData(response)
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


  if (data === 'loading') {
    console.log('propmise')
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  } else if (data !== 'loading') {
    console.log(data)
    const handle = data.handle;
    const name = data.name;
    const description = data.description;
    const companyJobs = data.jobs;
    console.log(companyJobs)


    return (
      <>
        <CompanyTitle name={name} description={description}/>
        {companyJobs.map(function ({ id, title, salary, equity }) {
          console.log(id)
          return (
            <Job key={id} id={id} title={title} salary={salary} equity={equity} submitApplication2={submitApplication2}/>
          )
        })}
      </>
    )

  }
}

export default JobsByCompany;