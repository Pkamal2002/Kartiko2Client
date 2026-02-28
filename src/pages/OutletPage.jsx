import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const OutletPage = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default OutletPage
