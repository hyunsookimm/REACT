import About from './pages/About'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Join from './pages/Join'
import Login from './pages/Login'
import User from './pages/User'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/user' element={<User />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
