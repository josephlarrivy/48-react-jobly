import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom'

import NavBar from './NavBar';
import Home from './Home'
import Profile from './Profile';
import ListContainer from './ListContainer';
import JobsByCompany from './JobsByCompany';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LogOut from './LogOut';

import CurrentUserContext from './CurrentUserContext'
import JoblyApi from './api';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState();


  const signup = async (formData) => {
    const request = await JoblyApi.register(formData);
    setToken(request)
    console.log(request)
  }

  const login = async (formData) => {
    const request = await JoblyApi.login(formData);
    setToken(request)
    console.log(request.token)
  }

  // const logout = () => {
  //   setToken('')
  //   console.log(token)
  // }

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
                element={<LogOut setToken={setToken} token={token}/>}
              />

            </Routes>
          </main>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
