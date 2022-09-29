import Login from './page/Login_&_Register/Login';
import Register from './page/Login_&_Register/Register';
import LandingPage from './page/Landing_Page/LandingPage';
import Dashboard from './page/Dashboard/Dashboard';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
