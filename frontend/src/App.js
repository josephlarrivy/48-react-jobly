import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom'

import NavBar from './NavBar';
import Home from './Home'
import ItemsDisplay from './ListContainer';
import Profile from './Profile';
import JobsByCompany from './JobsByCompany';
import RegisterForm from './RegisterForm';

import CurrentUserContext from './CurrentUserContext'
import './App.css';
import ListContainer from './ListContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState();


  const login = () => {

  }

  const signup = () => {

  }

  const logout = () => {

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
                element={<Profile />}
              />

              <Route path='/signup'
                element={<RegisterForm />}
              />

            </Routes>
          </main>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
