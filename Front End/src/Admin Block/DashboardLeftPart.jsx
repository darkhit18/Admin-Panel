import React, { useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { PiDropSimpleThin } from "react-icons/pi";
import { VscCircleSmall } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import { LuPointer } from "react-icons/lu";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { navList } from "../Common/NavList";

export default function DashboardLeftPart() {
  // For Color
  const [isOpen, setIsOpen] = useState(-1);
  return (
    <>
      <div className="bg-DashBoardLeft text-white scroll-y ">
        <h1 className="text-center py-3 border-b-[1px] border-white-400">
          Frank and Oak
        </h1>
        <h2 className="ps-6 py-4 text-[15px]">Dashboard</h2>
        <Link to={"/profile"}>
          <h2 className="flex items-center gap-2 ps-3 pb-1">
            {" "}
            <IoSettingsOutline /> Profile
          </h2>
        </Link>
        <div className="ps-4">
          <h2 className="uppercase text-[11px]  py-5">ecommerce component</h2>
          {navList.map((items,index)=>{
            return(
              <div className="relative py-3">
              <div className="flex  items-center">
                <button
                  onClick={()=>setIsOpen(index)}
                  className="w-full pb-3 text-white flex items-center justify-between transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[25px]">
                       {items.icon
                       }
                    </div>
                    {items.navName}
                  </div>
                  <span
                    className={`w-3 h-3 me-3 transition-transform duration-300 ease-in-out transform ${
                      isOpen==index ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowUp />
                  </span>
                </button>
              </div>
  
              {/* Dropdown menu */}
              { isOpen==index   && (
                <>
                  <div
                  >
                    <ul
                      className="  "
                    >
                      {items.subMenu.length>=1
                        ?
                        items.subMenu.map((subItems,subItemsindex)=>{
                          return(
                            <li>

                            <Link to={subItems.link}>
                 
                            <div className=" py-3 flex gap-3 items-center text-white hover:bg-red-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200 ease-in-out">
                              <div className="text-[20px]">
                                <VscCircleSmall />
                              </div>
                               {subItems.navName}
                            </div>
                            </Link>
                          </li>
                          )
                        })
                      
                        :
                        ''
                      }    
                      
                    </ul>
                  </div>
                </>
              )}
            </div>
            )
          })}
        </div>
      </div>
      
    </>
  );
}
