import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Common/Navbar'

function Dashboard() {
  return (
    <div className=''>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard