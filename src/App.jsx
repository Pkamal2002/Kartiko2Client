import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button } from './components/ui/button'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </div>
    </>
  )
}

export default App
