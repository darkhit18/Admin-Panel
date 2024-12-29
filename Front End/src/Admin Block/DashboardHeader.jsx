import React from 'react'
import { FiMenu } from "react-icons/fi";

export default function DashboardHeader() {
  return (
    <div className=''>
      <div className='sticky top-0 border-[#CCC] py-4 flex items-center gap-5 text-[20px] ps-6'>
      <FiMenu />
      <h1>Dashboard</h1>
      </div>
    </div>
  )
}
