import React, { useEffect, useState } from 'react'
import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
import DashboardHeader from '../Admin Block/DashboardHeader'
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { adminBaseUrl } from '../config/config';
import axios from 'axios';

export default function ViewSize() {
let [data,setData]=useState([])

    let getSizeData=()=>{
        axios.get(adminBaseUrl+"size/view-size")
        .then((res)=>res.data)
        .then((finalRes)=>{
            console.log(finalRes.data)
            setData(finalRes.data)
        })
    }

    useEffect(()=>{
        getSizeData()
    },[])
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
            <h1>/ View-Size</h1> 
          </div>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
            View Size
            </h1>
            <div className=" m-3">
              
              <div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="border-b-[1px] border-[#ccc] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        <div className="flex items-center gap-2 ">
                          <button className="bg-blue-700 text-white py-1 px-2 rounded">
                            Delete
                          </button>
                          <input type="checkbox" />
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                       Size Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                       Action
                      </th>
                      <th scope="col" class="px-6 py-3">
                       Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                        {
                            data.length>=0
                            ?

                            data.map((items,index)=>{
                                return(
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                     
                          <td class="px-6 py-4">
                            <input type="checkbox" />
                          </td>
                          <td class="px-6 py-4">{items.sizeName}</td>
                          <td class="px-6 py-4"><div className='flex items-center gap-3 '>
                            <div className='flex items-center gap-3 text-red-500'>
                            <MdDelete /> <span className='text-black'>| </span>
                            </div>
                            <div className='text-orange-500'>
                            <FaRegEdit />
                            </div>
                          </div>
                          </td>
                          <td class="px-6 py-4">{items.sizeStatus?'Active':'Deactive'}</td>
                        </tr>
                                )
                            })
                            :

                            <tr>
                                    <td colSpan={6}>No Data Found</td>
                            </tr>
                        }
                   
                          
            
                   
                  </tbody>
                </table>
               
              </div>
              </div>
              </div>
              </div>
          </div>
          </div>
    </div>
  )
}
