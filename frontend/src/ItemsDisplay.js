import React, { useEffect, useState, render } from 'react';

import Item from './Item'

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


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
  }

  // data.map(({ handle, description }) => {
  //   // let handle = item.handle;
  //   console.log(handle);
  //   console.log(description);
  //   return (
  //     <div>
  //       <h1>test</h1>
  //     </div>
  //   )
  // })

  data.map( function (x) {
    console.log(x.handle)
    return (
      <div>
        <p>{x.handle}</p>
      </div>
    )
  })
  
  
}

export default ItemsDisplay;