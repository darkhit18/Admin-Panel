import React, { useEffect, useState } from "react";
import DashboardLeftPart from "./DashboardLeftPart";
import DashboardHeader from "./DashboardHeader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { adminBaseUrl } from "../config/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Size() {
  let navigator = useNavigate()

  let [redirect,setRedirect]=useState(false)
  let handleSizeData=(event)=>{
      event.preventDefault()
      let obj={
        sizeName:event.target.sizeName.value,
        sizeStatus:event.target.sizeStatus.value
      }
      console.log(obj)
      axios.post(adminBaseUrl+"size/add-size",obj)
      .then((res)=>{
        console.log(res.data)
        if(res.data.status==1){
          toast.success("Size Added Successfully...")
          setRedirect(true)
        }
        else{
          toast.error("Size Already Exist...")
        }
      })
  }

  useEffect(()=>{
    if(redirect){
      setTimeout(()=>{
        navigator(`/view-size`)
      },2000)
    }
  })
  return (
    <>
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
            <h1>/ Size</h1>
          </div>

          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Add Size
            </h1>
            <form onSubmit={handleSizeData}>
            <div className=" m-3">
              <h2 className="py-3 ">Size Name</h2>
              <input name="sizeName"
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="XI"
              />
              <div className="flex   py-3 ">
                <h1 className="pe-2">Status : </h1>

                <div className="flex items-center gap-4">
                  <div class="flex items-center ">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="sizeStatus"
                      value="true"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="country-option-1"
                      class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Active
                    </label>
                  </div>

                  <div class="flex items-center ">
                    <input
                      id="country-option-2"
                      type="radio"
                      name="sizeStatus"
                      value="false"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="country-option-2"
                      class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                     Deactive
                    </label>
                  </div>
                </div>
              </div>

              <button className="bg-blue-700 text-white py-1 px-2 rounded">
                Add size
              </button>
            </div>
            </form>
            
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
