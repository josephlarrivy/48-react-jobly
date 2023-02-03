import React, { useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import useApi from "./hooks/useApi";


const AuthorizedComponent = () => {

  const [storeToken, removeToken, verifyToken, retrieveToken] = useLocalStorage();

  const [request] = useApi();
  let token;
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    const getToken = async () => {
      token = await retrieveToken()
    }
    getToken()
  }, [])
  

  useEffect(() => {

    const makeGetRequest = async () => {
      const method = 'get';
      const res = await request(`users/${currentUser}`, token, method);
      console.log(res)
    }

    const makePostRequest = async () => {
      const method = 'post';
      const res = await request(`users/joseph_larrivy/jobs/141`, token, method);
      console.log(res)
    }

    // makeGetRequest();
    makePostRequest();
  }, [token])
  

}


export default AuthorizedComponent;