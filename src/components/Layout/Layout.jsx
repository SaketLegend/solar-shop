import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className='max-w-screen overflow-x-hidden'>
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
    </div>
  )
}

export default Layout

