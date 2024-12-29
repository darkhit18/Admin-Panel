import React from 'react'
import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
import DashboardHeader from '../Admin Block/DashboardHeader'
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function StoryView() {
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
            <h1>/ Story-view</h1> 
          </div>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
             Our Stories
            </h1>
            <div className=" m-3">
              <h2 className="py-3 ">Story Name</h2>
              <div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="border-b-[1px] border-[#ccc] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        <div className="flex items-center gap-2 ">
                          <button className="bg-blue-700 text-white py-1 px-2 rounded">
                            Delete{" "}
                          </button>
                          <input type="checkbox" />
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        S.No
                      </th>
                      <th scope="col" class="px-6 py-3">
                       Story Name
                      </th>

                      <th scope="col" class="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Banner
                      </th>
                      <th scope="col" class="px-6 py-3">
                       Description
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
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      </th> */}
                      <td class="px-6 py-4">
                        <input type="checkbox" />
                      </td>
                      <td class="px-6 py-4">1</td>
                      <td class="px-6 py-4">Who we are</td>
                      <td class="px-6 py-4"><img  className='w-[70px] h-[50px] rounded-md ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/t/k/w/yes-2-m-unstitched-2-m-2-5-m-thira-1438-black-thira-original-imah3gnqztq5k63j.jpeg?q=70" alt="" /></td>
                      <td class="px-6 py-4"><img  className='w-[90px] h-[50px] rounded-md ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/t/k/w/yes-2-m-unstitched-2-m-2-5-m-thira-1438-black-thira-original-imah3gnqztq5k63j.jpeg?q=70" alt="" /></td>
                      <td class="px-6 py-4">We believe in considering the impact of choices we</td>
                      <td class="px-6 py-4">
                        <div className='flex items-center gap-3 '>
                        <div className='flex items-center gap-3 text-red-500'>
                        <MdDelete /> <span className='text-black'>| </span>
                        </div>
                        <div className='text-orange-500'>
                        <FaRegEdit />
                        </div>
                      </div>
                      </td>
                      <td class="px-6 py-4">Deactive</td>
                     
                    </tr>
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
