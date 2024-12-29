import React from 'react'
import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
import DashboardHeader from '../Admin Block/DashboardHeader'
import AdminProfile from '../Admin Block/AdminProfile'
import { createBrowserRouter } from 'react-router-dom'
let rtr = createBrowserRouter(
  [
    {
      path:'/profile',
      element:<AdminProfile />
    }
  ]
)
export default function Admin() {
  return (
    <div className='grid grid-cols-[14%_auto]'>
      <div>
      <DashboardLeftPart />
      </div>
      <div>
        <DashboardHeader />
        
      </div>
    </div>
  )
}
