import React, { useEffect, useState } from "react";
import DashboardLeftPart from "../Admin Block/DashboardLeftPart";
import DashboardHeader from "../Admin Block/DashboardHeader";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import axios from "axios";
import { adminBaseUrl } from "../config/config";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function AddSubCategory() {
let [parentCate,setParentCat]=useState([])
 
  useEffect(()=>{
    axios.get(adminBaseUrl+"subcategory/parent-category")
    .then((res)=>{
      if(res.data.status){
        setParentCat(res.data.data)
      }
    }) 
  },[])
    
  let savedData=(event)=>{
    event.preventDefault()
    let formObject=new FormData(event.target)
      axios.post(adminBaseUrl+'subcategory/insert',formObject)
      .then((res)=>{
        console.log(res.data)
      })
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
            <h1>/ Add-Sub-Category</h1>
          </div>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Add Sub Category
            </h1>
            <form onSubmit={savedData}>
            <div className=" m-3">
              <h2 className="py-3 ">Category Name</h2>
              <input name="subCategoryName"
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-4 focus:ring-blue-400"
                placeholder="Slider Name"
              />
           <h2 className="py-3 ">Parent Category Name</h2>
            
           <select name="parentCatId"
                  className="w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5 text-gray-900 focus:ring-4 focus:ring-blue-400"
                  defaultValue=""
                  
                >
                  <option value="" disabled>
                    Select Parent Category
                  </option>
                 {parentCate.map((items,index)=>{
                   return(
                    <option value={items._id} key={index}>{items.categoryName}</option>
                   )
                 })}
                  
                 
                </select>
     <h2 className="py-3 ">Category Image</h2>

<input name="subCategoryImage"
  class=" py-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
  id="file_input"
  type="file"
/> 
<h2 className="py-3 ">Category Description</h2>
              <textarea name="subCategoryDescription"
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-4 focus:ring-blue-400"
                placeholder="Slider Name" 
              />

<div className="flex   py-3 ">
                <h1 className="pe-2">Status : </h1>

                <div className="flex items-center gap-4">
                  <div class="flex items-center ">
                    <input 
                      id="country-option-1"
                      type="radio"
                      name="subCategoryStatus"
                      value="true"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
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
                      name="subCategoryStatus"
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
                Add Category
              </button>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
