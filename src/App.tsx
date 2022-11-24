import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthRoute from './components/routes/AuthRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import DataAction from './pages/DataAction';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/province' element={<Register />} />
          <Route path='/province/:id' element={<DataAction />} />
        </Route>
        <Route element={<AuthRoute/>}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
