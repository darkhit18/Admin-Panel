// import React, { useContext, useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
// import DashboardLeftPart from '../Admin Block/DashboardLeftPart'
// import DashboardHeader from '../Admin Block/DashboardHeader'
// import { PhotoshopPicker, SketchPicker } from 'react-color';
// import { ColorAction } from "../Main Context/MainContext";
// import { toast, ToastContainer } from 'react-toastify'
// import namer from "color-namer";
// import { adminBaseUrl } from "../config/config";
// import axios from "axios";

// export default function AddColor() {
//   let handleColorData=(event)=>{
//     event.preventDefault()
//     let colorName=event.target.colorName.value
//     console.log(colorName)
//     axios.post(adminBaseUrl+"category/add-color",colorName)
//     .then((res)=>{
//       console.log(res.data)
//       toast.success("Color Added Successfully...")
//     })
//   }
//   return (
//     <div>
//       <div className="grid grid-cols-[14%_auto]">
//         <div>
//           <DashboardLeftPart />
//         </div>
//         <div>
//           <DashboardHeader />
//           <div className=" border-y-[1px] border-[#ccc] flex gap-2 py-2 ps-6 ">
//             <Link to={"/"} className="text-blue-600 font-bold">
//               Home
//             </Link>
//             <h1>/ Add-Color</h1> 
//           </div>

//           <div className="m-4 border rounded-md ">
        
//              <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
//                 Add Color
//             </h1>
//             <form onSubmit={handleColorData}>
//             <div className=" m-3">
//             <h2 className="py-3 ">Add Color</h2>
//            <input name="colorName" type="color"></input>
           
//             <h1> Your Selected Color Code: 
//             </h1>
//             <button className="bg-blue-700 text-white py-1 px-2 rounded">
//                Select Color
//               </button>
//               <ToastContainer />
//             </div>
//             </form>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import DashboardLeftPart from '../Admin Block/DashboardLeftPart';
import DashboardHeader from '../Admin Block/DashboardHeader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify styles are imported
import namer from "color-namer";
import { adminBaseUrl } from "../config/config";
import axios from "axios";

export default function AddColor() {
  let navigator = useNavigate()
  const [selectedColor, setSelectedColor] = useState("");
  const [colorName, setColorName] = useState("");
  let [redirect,setRedirect]=useState(false)

  const handleColorChange = (event) => {
    const colorCode = event.target.value;
    setSelectedColor(colorCode);

    // Get the color name using the namer library
    const colorData = namer(colorCode);
    setColorName(colorData.basic[0].name); // Use the 'basic' category for a general color name
  };

  const handleColorData = (event) => {
    event.preventDefault();

    // Validation: Check if a color is selected
    if (!selectedColor) {
      toast.error("Please select a color before submitting.");
      return;
    }

    console.log(colorName);
    let obj={
      colorCode:event.target.colorName.value,
      colorName:colorName,
      colorStatus:event.target.colorStatus.value
    }
    axios.post(adminBaseUrl + "color/add-color",obj)
      .then((res) => {
        console.log(res.data);
        toast.success("Color Added Successfully...");
        setRedirect(true)
      })
      .catch((error) => {
        toast.error("Error adding color");
        console.error(error);
      });
  };
  useEffect(()=>{
    if(redirect){
      setTimeout(()=>{
        navigator('/view-color')
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
          <div className="border-y-[1px] border-[#ccc] flex gap-2 py-2 ps-6">
            <Link to={"/"} className="text-blue-600 font-bold">
              Home
            </Link>
            <h1>/ Add-Color</h1>
          </div>

          <div className="m-4 border rounded-md">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Add Color
            </h1>
            <form onSubmit={handleColorData}>
              <div className="m-3">
                <h2 className="py-3">Select a Color</h2>
                <input
                  name="colorName"
                  type="color"
                  value={selectedColor}
                  onChange={handleColorChange}
                />

                <h1>Your Selected Color Name: {colorName || "None"}</h1>
                <div className="flex   py-3 ">
                <h1 className="pe-2">Status : </h1>

                <div className="flex items-center gap-4">
                  <div class="flex items-center ">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="colorStatus"
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
                      name="colorStatus"
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
                <button type="submit" className="bg-blue-700 text-white py-1 px-2 rounded">
                  Add Color
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
