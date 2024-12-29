import React, { useEffect, useState } from 'react'
import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
import DashboardHeader from '../Admin Block/DashboardHeader'
import {Link, useParams} from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { adminBaseUrl } from '../config/config';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


export default function ViewCategory() {
  let [staticPath,setStaticPath]=useState('')
  let [data,setData]=useState([])
  let [allCheckedid,setAllCheckedId]=useState([])
  let [searchData,setsearchData]=useState({
    catName:'',
    catDesc:'',
    pageNumber:1 
  })

  // for pgination
  const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 4;
  let [totalPages,setTotalPage]=useState(0)

  let [limit,setLimit]= useState(0)

//  Adding Searc Functionality

let getSearchValue=(event)=>{
  let oldData = {...searchData}
    let inputName=event.target.name;
    let inputValue=event.target.value
    oldData[inputName]=inputValue
    setsearchData(oldData)
}


let submitSeacrhFormvalue=(event)=>{
  event.preventDefault()
  getCategory()

}



// TO view Data
// isame hi seacrh ka bhi kaam karenge search karne wale ko as query send karenge warna as body hm send nhi kar sakte get me
  let getCategory=()=>{
    let obj={...searchData}
    obj['pageNumber']=currentPage
    axios.get(adminBaseUrl+"category/view",{params:obj})
    .then((res)=>res.data)
    .then((finalRes)=>{
      console.log(finalRes.data)
      if(finalRes.status==1){
        setStaticPath(finalRes.path);
        console.log(staticPath)
        setData(finalRes.data)
        setTotalPage(finalRes.allPage)
        setLimit(finalRes.limit)
      }
    })
  
  }

  useEffect(()=>{
    getCategory()
  },[])

  // to Delete Data
  let deleterow = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(adminBaseUrl + `category/delete/${id}`)
          .then((res) => res.data) // get the response data
          .then((finalRes) => {
            // Here, check finalRes.status instead of finalRes.data.status
            if (finalRes.status == 1) {
              getCategory(); // Refresh the category list immediately
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            } else {
              // Handle the case if the delete operation fails for some reason
              Swal.fire({
                title: "Error!",
                text: "There was an error deleting the category.",
                icon: "error"
              });
            }
          })
      }
    });
  };
  


  let getCheckedId=(event)=>{
      if(event.target.checked){
        setAllCheckedId([...allCheckedid,event.target.value])
      }
      else{
        let filterData=allCheckedid.filter((id)=>id!=event.target.value)
        setAllCheckedId(filterData)
      }
  }
 

useEffect(()=>{
  console.log(allCheckedid)
},[allCheckedid])
  
// For pagination
useEffect(()=>{
getCategory()
},[currentPage]) 


let multiDelete=()=>{
  if(allCheckedid.length===0){
    Swal.fire("Select At Least One Option!");
  }
  else{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(adminBaseUrl + `category/multiple-delete`,{ids:allCheckedid})
          .then((res) => res.data) // get the response data
          .then((finalRes) => {
            console.log(finalRes.data)
            // Here, check finalRes.status instead of finalRes.data.status
            if (finalRes.status == 1) {
              getCategory(); // Refresh the category list immediately
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            } else {
              // Handle the case if the delete operation fails for some reason
              Swal.fire({
                title: "Error!",
                text: "There was an error deleting the category.",
                icon: "error"
              });
            }
          })
      }
    });
  }
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
            <h1>/ View-Category</h1> 
          </div>
        <form onSubmit={submitSeacrhFormvalue}>
          <div className='m-4'>
            <div className='grid grid-cols-3 gap-8'>
              <div>
                <input name='catName' value={searchData.catName} onChange={getSearchValue} type="text" className=' w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='Seacch By Category Name..' />
              </div>
              <div>
              <input name='catDesc' value={searchData.catDesc} onChange={getSearchValue} type="text" className=' w-full block border-[1px] rounded border-[#ccc] ps-3 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0' placeholder='Seacch By Category Name..' />
              </div>
              <button className="bg-blue-700 text-white py-1 px-2 rounded">
                Search
              </button>
            </div>
          </div>
          </form>
          <div className="m-4 border rounded-md ">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
            View Category
            </h1>
            <div className=" m-3">
              
              <div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="border-b-[1px] border-[#ccc] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        <div className="flex items-center gap-2 ">
                          <button onClick={multiDelete} className="bg-blue-700 text-white py-1 px-2 rounded">
                            Delete
                          </button>
                          <input type="checkbox" />
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        S.No
                      </th>
                      <th scope="col" class="px-6 py-3">
                       Category Name
                      </th>

                      <th scope="col" class="px-6 py-3">
                        Image
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

                    {
                      data.length>=0
                      ?
                        data.map((items,index)=>{
                          
                         return(
                          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                     
                          <td class="px-6 py-4">
                            <input type="checkbox" value={items._id} onChange={getCheckedId} />
                          </td>
                          <td class="px-6 py-4">{(currentPage-1)*limit + (index+1)}</td>
                          <td class="px-6 py-4">{items.categoryName}</td>
                          <td class="px-6 py-4"><img  className='w-[70px] h-[50px] rounded-md ' src={staticPath+items.categoryImage} alt="" /></td>
                          
                          <td class="px-6 py-4">{items.categoryDescription}</td>
                          <td class="px-6 py-4"><div className='flex items-center gap-3 '>
                            <div className='flex items-center gap-3 text-red-500'>
                            <MdDelete onClick={()=>deleterow(items._id)} /> <span className='text-black'>| </span>
                            </div>
                            <Link to={`/add-category/${items._id}`}>
                            <div className='text-orange-500'>
                            <FaRegEdit  />
                            </div>
                            </Link>
                          </div>
                          </td>
                          <td class="px-6 py-4">{items.categoryStatus?'Active':'Deactive'}</td>
                         
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
              <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
               
              </div>
              </div>
              </div>
              </div>
          </div>
          </div>
    </div>
  )
}
