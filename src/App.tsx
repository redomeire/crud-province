import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthRoute from './components/routes/AuthRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import DataAction from './pages/DataAction';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export const ThemeContext = React.createContext({
  isDark: false,
  setIsDark: (isDark: boolean) => {}
})

function App() {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <HelmetProvider>
          <Helmet>
            <html className={isDark ? 'dark' : 'light'} />
          </Helmet>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/province' element={<Register />} />
              <Route path='/province/:id' element={<DataAction />} />
            </Route>
            <Route element={<AuthRoute />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
