import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import axios from 'axios';
import JoblyApi from "./api";

import Item from './Item'



const ItemsDisplay = ({isLoading, setIsLoading}) => {

  const [data, setData] = useState([]);
  const {type} = useParams();


  useEffect(() => {
    
    async function getData() {
      try {
        if (type === 'companies') {
          const response = await JoblyApi.getCompanies();
          console.log(response)
          setData(response)
        }
        else if (type === 'jobs') {
          const response = await JoblyApi.getJobs();
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
    console.log('loading')
    return (
      <h1>Loading</h1>
    )
  }

  console.log('loaded')
  for (let item in data) {
    console.log(item)
    return (
      <>
        <Item />
      </>
    )
  }
  
}

export default ItemsDisplay;