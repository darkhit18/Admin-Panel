import React from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      Home
      <Link to={'/admin'}>
      <button className='bg-red-400 rounded p-1 ms-2' >Admin</button>
      </Link>
     
    </div>
  )
}
