import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './NavBar';
import Home from './Home'
import ItemDisplay from './ItemsDisplay';
import Profile from './Profile';

import DisplayDataContext from './DisplayDataContext'
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataToDisplay, setDataToDisplay] = useState()




  return (
    <div className="App">
      <DisplayDataContext.Provider value={dataToDisplay}>
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
      </DisplayDataContext.Provider>
    </div>
  );
}

export default App;
