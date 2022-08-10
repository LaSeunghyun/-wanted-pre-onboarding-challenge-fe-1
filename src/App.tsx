import React from 'react';
import Login from './login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Login()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
