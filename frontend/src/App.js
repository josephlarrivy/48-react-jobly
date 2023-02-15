
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './NavBar';
import Home from './Home'
import Profile from './Profile';
import ListContainer from './ListContainer';
import JobsByCompany from './JobsByCompany';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LogOut from './LogOut';
import ProfileForm from './ProfileForm';
import AuthorizedComponent from './aaaauthorizedComponentsPractice';

import useLocalStorage from './hooks/useLocalStorage';
import CurrentUserContext from './CurrentUserContext'
import JoblyApi from './api';
import './App.css';
import useApi from './hooks/useApi';


const App = () => {
  const [storeData, removeToken, verifyToken, retrieveToken] = useLocalStorage();
  const [apiRequest, test] = useApi();
  const [token, setToken] = useState(false);
  const [currentUser, setCurrentUser] = useState( async () => {
    const storedToken = await retrieveToken();
    if (token == null) {
      return 'unverified'
    } else {
      setToken(storedToken)
      return storedToken;
    }
  });
  

  useEffect(() => {
    let decodedToken;
    const doVerification = async () => {
      decodedToken = await verifyToken()
      if (decodedToken) {
        setCurrentUser(decodedToken.username)
      } else {
        setCurrentUser('unverified')
      }
    }
    doVerification();
  }, [])


  const signup = async (formData) => {
    const request = await JoblyApi.register(formData);
    setToken(request.token)
    window.location.reload(true);
    const decodedToken = await verifyToken()
    storeData(request.token)
  }

  const login = async (formData) => {
    const request = await JoblyApi.login(formData);
    window.location.reload(true);
    const decodedToken = await verifyToken()
    storeData(request.token)
    setToken(request.token.token)
    console.log(token)
  }

  const submitApplication = async (endpoint, token, method) => {
    // console.log(endpoint, token)
    const request = await apiRequest(endpoint, token, method);
    console.log(request)
    return request
  }

  const submitApplication2 = async (username, id) => {
    const token = await retrieveToken()
    const request = await JoblyApi.applyForJob(username, id, token);
    console.log(request)
    return request
  }

  if (token == false) {
    return (
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          <BrowserRouter>
            <NavBar />
            <main>
              <Routes>

                <Route path='/'
                  element={<Home />}
                />

                <Route path='/login'
                  element={<LoginForm login={login} />}
                />

                <Route path='/signup'
                  element={<RegisterForm signup={signup} />}
                />

                <Route path='/logout'
                  element={<LogOut setCurrentUser={setCurrentUser} />}
                />

              </Routes>
            </main>
          </BrowserRouter>
        </CurrentUserContext.Provider>
      </div>
    )
  } else {
    return (
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          <BrowserRouter>
            <NavBar />
            <main>
              <Routes>

                <Route path='/'
                  element={<Home />}
                />

                <Route path='/:type'
                  element={<ListContainer submitApplication={submitApplication} submitApplication2={submitApplication2} />}
                />

                <Route path='/companies/:handle'
                  element={<JobsByCompany submitApplication2={submitApplication2} />}
                />

                <Route path='/profile'
                  element={<ProfileForm />}
                />

                <Route path='/login'
                  element={<LoginForm login={login} />}
                />

                <Route path='/signup'
                  element={<RegisterForm signup={signup} />}
                />

                <Route path='/logout'
                  element={<LogOut setCurrentUser={setCurrentUser} />}
                />

                <Route path='/test'
                  element={<AuthorizedComponent currentUser={currentUser} />}
                />

              </Routes>
            </main>
          </BrowserRouter>
        </CurrentUserContext.Provider>
      </div>
    );
  }

  
}

export default App;
