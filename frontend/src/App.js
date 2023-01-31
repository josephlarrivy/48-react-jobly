
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
import AuthorizedComponent from './aaaauthorizedComponentsPractice';

import useLocalStorage from './hooks/useLocalStorage';
import CurrentUserContext from './CurrentUserContext'
import JoblyApi from './api';
import './App.css';


const App = () => {
  const [stateToken, setStateToken] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [storeToken, removeToken, verifyToken, authed] = useLocalStorage();

  let decodedToken;
  let username;


  useEffect(() => {
    // console.log('effect ran')
      // const decode = () => {
      //   decodedToken = JoblyApi.decodeToken(stateToken)
      //   username = decodedToken.username
      //   setCurrentUser(username)
      // }
      // decode();
      // console.log(currentUser)
  }, [])


  const signup = async (formData) => {
    const request = await JoblyApi.register(formData);
    setStateToken(request.token)
    storeToken(request.token)
  }

  const login = async (formData) => {
    const request = await JoblyApi.login(formData);
    setStateToken(request.token)
    storeToken(request.token)
  }


  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>

              <Route path='/'
                element={<Home currentUser={currentUser}/>}
              />

              <Route path='/:type' 
                element={<ListContainer />}
              />

              <Route path='/companies/:handle'
                element={<JobsByCompany />}
              />

              <Route path='/profile'
                element={<Profile/>}
              />

              <Route path='/login'
                element={<LoginForm login={login}/>}
              />

              <Route path='/signup'
                element={<RegisterForm signup={signup}/>}
              />

              <Route path='/logout'
                element={<LogOut setStateToken={setStateToken} stateToken={stateToken}/>}
              />

              <Route path='/test'
                element={<AuthorizedComponent stateToken={stateToken}/>}
              />

            </Routes>
          </main>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
