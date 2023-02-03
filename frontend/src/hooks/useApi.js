import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const useApi = () => {

  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


  const apiRequest = async (endpoint, token, method) => {

    let url = `${BASE_URL}/${endpoint}`;

    if (method == 'get') {
      try {
        const res = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        return res.data
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }

    } else if (method == 'post') {
      try {
        const res = await axios.post(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        console.log(res)
        return res
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  }

  const test = () => {
    console.log('test')
  }

  return [apiRequest, test]
}

export default useApi;