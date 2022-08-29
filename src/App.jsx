import Landing from './page/Landing';
import Login from './page/Login';
import Register from './page/Register';
import Dashboard from './page/Dashboard';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
