import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import DashboardLeftPart from "../Admin Block/DashboardLeftPart";
import DashboardHeader from "../Admin Block/DashboardHeader";
import { ColorAction } from "../Main Context/MainContext";
import namer from "color-namer";
import { ntc } from "ntcjs";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import { toast, ToastContainer } from 'react-toastify'
import axios from "axios";

export default function AddColor() {
 
  let { currentColor, setColor } = useContext(ColorAction);
  let [data,setData] = useState([])


  let getColor=()=>{
    axios.get(`http://localhost:8000/admin/color/color-view`)
    .then((res)=>res.data)
    .then((finelRes)=>{
        setData(finelRes.data)
    })
  }

  useEffect(()=>{
    getColor()
  },[])
  
  return (
    <div>
       <ToastContainer />
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
            <h1>/ View-Color</h1>
          </div>
          <div className="m-4 border rounded-md">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Add Color
            </h1>
            <div className=" m-3">
              {/* table */}

              <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          <div className="flex items-center gap-2 ">
                            Delete <input type="checkbox" />
                          </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                          ColorName
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Color Code
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
                      {data.length >= 1
                        ? data.map((items,index) => {
                            return (
                              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      </th> */}
                                <td class="px-6 py-4">
                                  <input type="checkbox"/>
                                </td>
                                <td class="px-6 py-4">{items.colorName}</td>
                                <td class="px-6 py-4">{items.colorCode}</td>
                                <td class="px-6 py-4">
                                  <div className="flex items-center gap-3 ">
                                    <div className="flex items-center gap-3 text-red-500">
                                     <button> <MdDelete/></button> 
                                      <span className="text-black">| </span>
                                    </div>
                                    <div className="text-orange-500">
                                      <FaRegEdit />
                                    </div>
                                  </div>
                                </td>

                                <td class="px-6 py-4">{items.colorStatus?'Active':'Deactive'}</td>
                              </tr>
                            );
                           
                          })
                        :
                         <h1 className="text-red-500 font-bold px-4 text-2xl py-2">No Roecord's</h1>
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
  );
}
