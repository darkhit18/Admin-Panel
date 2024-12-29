import React from 'react'
import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
import DashboardHeader from '../Admin Block/DashboardHeader'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { adminBaseUrl } from '../config/config'

export default function ProductDetails() {
  let handleFormdata=(event)=>{
    event.preventDefault()
      let formValue = new FormData(event.target)

    axios.post(adminBaseUrl+`product/add-product-details`,formValue)
    .then((res)=>console.log(res.data))
  }
  return (
    <div>
        <div className="grid grid-cols-[14%_auto]">
        <div>
          <DashboardLeftPart />
        </div>
        <div>
          <DashboardHeader />
          <div className=" border-y-[1px] border-[#ccc] flex gap-2 py-2 ps-6">
            <Link to={"/"} className="text-blue-600 font-bold">
              Home
            </Link>
            <h1>/ Product-Details</h1> 
          </div>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
             Our Stories
            </h1>
            <form onSubmit={handleFormdata}>
            <div className=" m-3">
              <h2 className="py-3 ">Product Name</h2>
              <input name='productDetailsName'
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Story Name" value="Iphone"
              />
               <h2 className="py-3 ">Product Description</h2>
              <textarea name='productDetailsDescription'
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Story Name" value="Iphone"
              />
               <h2 className="py-3 ">Product Image</h2>
               <input name='productDetailsImage' type='file' className='py-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'/>
             
               <button className="bg-blue-700 text-white py-1 px-2 rounded">
                Add size
              </button>
              </div>
            </form>
            

              </div>
          </div>
          </div>
    </div>
  )
}
