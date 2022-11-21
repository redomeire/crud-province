import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DataAction from './pages/DataAction';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/province' element={<Register/>}/>
        <Route path='/province/:id' element={<DataAction/>}/>
      </Routes>
    </div>
  );
}

export default App;
