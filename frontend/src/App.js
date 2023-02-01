
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
  const [storeToken, removeToken, verifyToken] = useLocalStorage();
  const [currentUser, setCurrentUser] = useState( async () => {
    const token = await verifyToken();
    if (token == null) {
      return 'unverified'
    } else {
      return token.username;
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
    window.location.reload(true);
    const decodedToken = await verifyToken()
    storeToken(request.token)
  }

  const login = async (formData) => {
    const request = await JoblyApi.login(formData);
    window.location.reload(true);
    const decodedToken = await verifyToken()
    storeToken(request.token)
  }

  const submitApplication = async (username, id) => {
    const request = await JoblyApi.applyForJob(username, id);
    console.log(request)
    return request
  }

  if (currentUser == 'unverified') {
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
  }

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
                element={<LogOut setCurrentUser={setCurrentUser}/>}
              />

              <Route path='/test'
                element={<AuthorizedComponent currentUser={currentUser}/>}
              />

            </Routes>
          </main>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
