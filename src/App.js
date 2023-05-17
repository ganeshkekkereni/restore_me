import React from 'react'
import Home from './home'
import LoginPage from './Loginpage'
import Chatui from './Chatui'
import { Routes, Route,BrowserRouter} from 'react-router-dom';


export default function App(props) {
  

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/chatapp" element={<Chatui />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<LoginPage />} />
  </Routes>
  </BrowserRouter>
  )
}