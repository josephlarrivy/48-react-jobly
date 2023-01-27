import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import NavBar from './NavBar';
import Home from './Home'
import ItemDisplay from './ItemDisplay';
import Profile from './Profile';

import logo from './logo.svg';
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

            <Route path='/companies' 
              element={<ItemDisplay />}
            />

            <Route path='/jobs'
              element={<ItemDisplay />}
            />

            <Route path='/profile'
              element={<Profile />}
            />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
