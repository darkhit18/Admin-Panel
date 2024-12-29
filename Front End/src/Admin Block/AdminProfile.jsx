import React from 'react'
import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
import DashboardHeader from '../Admin Block/DashboardHeader'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { GrYoutube } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";





export default function AdminProfile() {
  return (
            <>
                
    <div className='grid grid-cols-[14%_auto]'>
    <div>
    <DashboardLeftPart />
    </div>
    <div>
      <DashboardHeader />
      <div className=' border-y-[1px] border-[#ccc] flex gap-2 py-2 ps-6'>
            <Link to={'/'} className='text-blue-600 font-bold'>Home</Link>
            <h1>/ profile</h1>
      </div>
    
    <div className='border rounded-md border-[#ccc] m-4'>
        <div className=''>
             <h1  className='bg-slate-100 p-1 font-bold border-b-[2px]'>Profile</h1>
             <form action="">
             <div className='grid grid-cols-[1fr_1fr]' >
             <div className=' p-3 '>
                <label className='px-2'>Name</label>
                <input className=' w-full block border-[1px] rounded border-[#ccc] ps-4 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='your Name' />
{/* Social Link */}
                <label className='px-2'>Social Link</label>
                <div className='flex items-center mt-4 mb-8'>
                <div className='text-[19px] px-2'><FaFacebookF /></div>
                <input className='w-full block border-[1px] rounded border-[#ccc] ps-4 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='www.facebook.com' />
                </div>

                <div className='flex items-center mb-8'>
                <div className='text-[19px] px-2'><IoLogoInstagram /></div>
                <input className='w-full block border-[1px] rounded border-[#ccc] ps-4 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='www.instagram.com' />
                </div>
                
                <div className='flex items-center mb-8'>
                <div className='text-[19px] px-2'><GrYoutube /></div>
                <input className='w-full block border-[1px] rounded border-[#ccc] ps-4 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='www.youtube.com' />
                </div>

                <div className='flex items-center '>
                <div className='text-[19px] px-2'><FaXTwitter /></div>
                <input className='w-full block border-[1px] rounded border-[#ccc] ps-4 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='www.X.com' />
                </div>
             </div>
             <div className='flex  justify-end me-28 mt-14'>
               <div className=' bg-red-400 w-[150px] h-[150px] rounded-full'>
               <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
               </div>
             </div>
             </div>
             </form>
        </div>
    </div>
    </div>
  </div>





    
      
            
            </>
  )
}
