import React from "react";
import DashboardLeftPart from "../Admin Block/DashboardLeftPart";
import DashboardHeader from "../Admin Block/DashboardHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { adminBaseUrl } from "../config/config";

export default function StoryDetail() {
  let handleStoryData=(event)=>{
      event.preventDefault()
      let formDataValue=new FormData(event.target)
      axios.post(adminBaseUrl+"category/story-detail",formDataValue)
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
            <h1>/ Story-Details</h1>
          </div>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Add Size
            </h1>
            <form onSubmit={handleStoryData}>
            <div className=" m-3">
              <h2 className="py-3 ">Story Name</h2>
              <input name="storyName"
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Story Name"
              />
              <h2 className="py-3 ">Image</h2>

              <input name="storyImage"
                class=" py-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />

              <h2 className="py-3 ">Banner Image</h2>

              <input name="storyBannerImage"
                class=" py-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <h2 className="py-3 ">Description</h2>
              <textarea name="storyDescription"
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Description"
              />
              <div className="flex   py-3 ">
                <h1 className="pe-2">Status : </h1>

                <div className="flex items-center gap-4">
                  <div class="flex items-center ">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="storyStatus"
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
                      name="storyStatus"
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
                Add story
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
