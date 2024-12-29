import React, { useEffect, useState } from "react";
import DashboardLeftPart from "../Admin Block/DashboardLeftPart";
import DashboardHeader from "../Admin Block/DashboardHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { adminBaseUrl } from "../config/config";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddCategory() {
let navigator = useNavigate()


  let [redirect,setRedirect]=useState(false)
  let [preview, setPreview] = useState('https://www.shutterstock.com/image-illustration/no-thumbnail-image-placeholder-forums-260nw-1401095468.jpg');
  let[formAll,setFormAll]=useState({
    categoryName:'',
    categoryDescription:'',
    categoryStatus:''
  })
  let {id}=useParams()
  console.log(id)

  let getValueOrSetValue=(event)=>{
    let oldData = {...formAll}
    let inputName=event.target.name;
    let inputValue=event.target.value
    oldData[inputName]=inputValue
    setFormAll(oldData)
  }
  useEffect(() => {
    setFormAll({
      categoryName: '',
      categoryDescription: '',
      categoryStatus: ''
    });
    if (id !== undefined) {
      axios
        .get(adminBaseUrl + `category/edit-row/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          // Reset formAll to default values
       
  
          // Ensure data is available before accessing it
          if (finalRes.status!==undefined) {
            setPreview(finalRes.path+finalRes.data.categoryImage)
            setFormAll({
              categoryName: finalRes.data.categoryName,
              categoryDescription: finalRes.data.categoryDescription,
              categoryStatus: finalRes.data.categoryStatus
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching category data:", error);
        });
    }
  }, [id]);
  
  // Function to handle image change and update preview
  let getImageOrSetImage = (event) => {
    let imgFile = event.target.files[0]; // get the selected file
    if (imgFile) {
      let imgUrl = URL.createObjectURL(imgFile); // create the image preview URL
      setPreview(imgUrl); // update the preview state
    }
  };

  let handleFormData=(event)=>{
      event.preventDefault()
      let formObject=new FormData(event.target)
      console.log(formObject)

      if(id!==undefined){
        axios.put(adminBaseUrl+"category/update-row/"+id,formObject)
        .then((res)=>{
          console.log(res.data)
          if(res.data.status==1){
            toast.success("Saved")
            setRedirect(true)
            event.target.reset()
          }
          else{
            toast.error("Category Name Already Exist..")
          }
        })   
      }
      else{
        axios.post(adminBaseUrl+"category/insert",formObject)
        .then((res)=>{
          console.log(res.data)
          if(res.data.status==1){
            toast.success("Saved")
            setRedirect(true)
            event.target.reset()
          }
          else{
            toast.error("Category Name Already Exist..")
          }
        })   
      }
     
  }

  useEffect(()=>{
    if(redirect){
      setTimeout(()=>{
        navigator('/view-category')
      },2000)
    }
  },[redirect])
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
            <h1>/ Add-Category</h1>
          </div>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Add Category
            </h1>
            <div className=" m-3">
              <form onSubmit={handleFormData}>
              <h2 className="py-3 ">Category Name</h2>
              <input name="categoryName" value={formAll.categoryName} onChange={getValueOrSetValue}
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Slider Name"
              />

              <div className="grid grid-cols-[70%_auto] gap-5">
                <div>
                <h2 className="py-3 ">Category Image</h2>

                <input  onChange={getImageOrSetImage}
                  class=" py-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  name="categoryImage"
                  type="file"
                />
                </div>
                <div>
                    <img className="w-40 h-[100px] rounded-md" src={preview} alt="Category Preview" />
                  </div>
              </div>
              
              <h2 className="py-3 ">Choose Description</h2>
              <textarea name="categoryDescription" value={formAll.categoryDescription} onChange={getValueOrSetValue}
                className=" w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Slider Name"
              />
              <div className="flex   py-3 ">
                <h1 className="pe-2">Status : </h1>

                <div className="flex items-center gap-4">
                  <div class="flex items-center ">
                    <input checked={formAll.categoryStatus==1?true:''} onChange={getValueOrSetValue}
                      id="country-option-1"
                      type="radio"
                      name="categoryStatus"
                      value="1"
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
                    <input checked={formAll.categoryStatus==0?false:''} onChange={getValueOrSetValue}
                      id="country-option-2"
                      type="radio"
                      name="categoryStatus"
                      value="0"
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
  {id ? "Update Category" : "Add Category"}
</button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
