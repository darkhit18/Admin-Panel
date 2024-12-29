import React, { useState } from "react";
import DashboardLeftPart from "../Admin Block/DashboardLeftPart";
import DashboardHeader from "../Admin Block/DashboardHeader";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Orders() {
  const [show, setShow] = useState(false);

  const showModel = () => {
    setShow(!show);
  };
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
          <div className="m-4 border rounded-md">
            <h1 className="font-bold ps-3 py-2 bg-slate-100 border-b-[2px]">
              Order's Lisr
            </h1>
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
                        Order Id
                      </th>

                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        View
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
                      <td class="px-6 py-4">Shubham01</td>
                      <td class="px-6 py-4">Shubham Singh</td>
                      <td class="px-6 py-4">2</td>
                      <td class="px-6 py-4">Rs/3500</td>
                      <td class="px-6 py-4">18/08/24</td>
                      <td class="px-6 py-4">processing</td>
                      <td class="px-6 py-4">
                        <button
                          onClick={showModel}
                          className="border border-blue-400 py-1 px-2 rounded bg-[#ccc]"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {show && <ViewOrder show={show} setShow={setShow} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ViewOrder({ show, setShow }) {
  return (
    <>
      <div className="fixed  top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.6)]">
        <div
          className={`fixed left-[170px] w-[1200px] border bg-white rounded-lg duration-1000 transition ${
            show ? "top-[40px] " : "top-[-2000px]"
          }`}
        >
          <div className=" ">
            <h1 className="flex items-center font-bold p-3 border-b border-[#ccc] relative">
              Order details
              <span
                onClick={() => {
                  setShow(false);
                }}
                className="cursor-pointer pointer absolute right-0 me-5 text-[30px]"
              >
                &times;
              </span>
            </h1>
            <div className="grid grid-cols-[20%_55%_25%]">
              <div className=" p-2">
                <div className="flex items-center justify-center mt-8 pb-6">
                  <img
                    width={80}
                    height={80}
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/t/k/w/yes-2-m-unstitched-2-m-2-5-m-thira-1438-black-thira-original-imah3gnqztq5k63j.jpeg?q=70"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    width={80}
                    height={80}
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/b/r/free-king-green-superlaxmi-unstitched-original-imah2gx8guhvkw7q.jpeg?q=70"
                    alt=""
                  />
                </div>
              </div>

              <div className=" p-2 ">
                <div>
                  <h1 className="text-red-500 font-bold pt-5">
                    The Colin Stretch Chino Pant in Deep Blue
                  </h1>
                  <div className="py-2">
                    <h1>
                      <span className="font-bold text-[15px] pe-5">
                        Price :
                      </span>{" "}
                      Rs/ 1500
                    </h1>
                    <h1>
                      <span className="font-bold text-[15px] pe-5">
                        Quantity :
                      </span>
                      1
                    </h1>
                    <h1>
                      <span className="font-bold text-[15px] pe-5">Size :</span>
                      XI
                    </h1>
                    <h1>
                      <span className="font-bold text-[15px] pe-5">
                        Color's :
                      </span>{" "}
                      Red
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-red-500 font-bold pt-5">
                    The Colin Stretch Chino Pant in Deep Blue
                  </h1>
                  <div className="py-2">
                    <h1>
                      <span className="font-bold text-[15px] pe-5">
                        Price :
                      </span>{" "}
                      Rs/ 1500
                    </h1>
                    <h1>
                      <span className="font-bold text-[15px] pe-5">
                        Quantity :
                      </span>
                      1
                    </h1>
                    <h1>
                      <span className="font-bold text-[15px] pe-5">Size :</span>
                      XI
                    </h1>
                    <h1>
                      <span className="font-bold text-[15px] pe-5">
                        Color's :
                      </span>{" "}
                      Red
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" p-2">
                <div className="border p-2 rounded-md">
                  <h1 className="text-[13px] font-bold">Shipping Addres</h1>
                  <p className="text-[15px] pe-2 py-3 ">
                    Shubham Singh, First Floor, Lakshmi Tower,Bhaskar Circle,
                    Ratanada, JODHPUR ,RJASTHAN 342001 India
                  </p>
                  <h1 className="font-bold text-center pb-3">Order Summary</h1>
                  <h1 className="pb-3">
                    <span className="font-bold text-[15px] pe-5">
                      Items(s) Subtotal :
                    </span>{" "}
                    Rs/ 3500
                  </h1>
                  <h1 className="pb-3">
                    <span className="font-bold text-[15px] pe-5">
                      Cash/Pay on Delevery :
                    </span>{" "}
                    Rs/ 00
                  </h1>
                  <h1 className="pb-3">
                    <span className="font-bold text-[15px] pe-5">
                      Shipping :
                    </span>{" "}
                    Rs/ 00
                  </h1>
                  <h1 className="pb-3">
                    <span className="font-bold text-[15px] pe-5">
                      Grand Total :
                    </span>{" "}
                    Rs/3500
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
