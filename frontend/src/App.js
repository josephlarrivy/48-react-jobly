import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom'

import NavBar from './NavBar';
import Home from './Home'
import ItemsDisplay from './ItemsDisplay';
import Profile from './Profile';
import JobsByCompany from './JobsByCompany';
import RegisterForm from './RegisterForm';

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>

            <Route path='/'
              element={<Home />}
            />

            <Route path='/:type' 
              element={<ItemsDisplay />}
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
    </div>
  );
}

export default App;
