import React, { useState, useEffect } from "react";
import HeaderBar from "../components/RestaurantManagerBar";
const AddMenuPage: React.FC = () => {
  return (
    <div>
      <HeaderBar name="Add menu"></HeaderBar>
      <form className="flex flex-col w-full h-auto">
        <div className="flex flex-row flex-wrap w-full h-auto bg-gray-300">
          <div className="flex md:w-1/2 md:h-[350px] lg:w-1/2 lg:h-[350px] xl:w-5/12 xl:h-[400px] w-full h-[300px] bg-yellow-100"></div>
          <div className="flex flex-col flex-wrap md:w-1/2 md:h-[350px] lg:w-1/2 lg:h-[350px] xl:w-7/12 xl:h-[400px] w-full h-auto bg-green-100">
            {/*Name Input*/}
            <div className="flex flex-row flex-wrap w-full h-auto">
              {/*Thai Name Input*/}
              <div className="flex justify-center sm:w-1/2 lg:w-1/2 xl:w-1/2 w-full">
                <div className="my-5 w-[75%]">
                  <label className="inline-block mb-2 text-gray-700">
                    ชื่อภาษาไทย
                  </label>
                  <input
                    type="text"
                    className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white
                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="ชื่อเมนูอาหารภาษาไทย"
                    pattern="^[ก-๏\s]+$"
                    maxLength={10}
                  />
                  <label className="inline-block text-xs mt-2 text-rose-600">
                    กรอกได้เฉพาะชื่อภาษาไทยเท่านั้น
                  </label>
                </div>
              </div>

              {/*English Name Input*/}
              <div className="flex justify-center sm:w-1/2 lg:w-1/2 xl:w-1/2 w-full">
                <div className="my-5 w-[75%]">
                  <label className="inline-block mb-2 text-gray-700">
                    ชื่อภาษาอังกฤษ
                  </label>
                  <input
                    type="text"
                    className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white
                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="ชื่อเมนูอาหารภาษาอังกฤษ"
                    pattern="^[a-zA-Z\s]+$"
                    maxLength={5}
                  />
                  <label className="inline-block text-xs mt-2 text-rose-600">
                    กรอกได้เฉพาะชื่อภาษาอังกฤษเท่านั้น
                  </label>
                </div>
              </div>
            </div>

            {/*radio input*/}
            <div className="flex justify-center lg:w-1/2 xl:w-1/2 w-full">
              <div className="w-[75%]">
                <label className="inline-block mb-2 text-gray-700">
                  เลือกประเภทของเมนูอาหาร
                </label>
                <div className="flex justify-start">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white 
                      checked:bg-green-600 checked:border-gray-500 mt-1 float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                      />
                      <label className="form-check-label inline-block text-gray-800">
                        A-la-carte
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white 
                      checked:bg-green-600 checked:border-gray-500 mt-1 float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                      />
                      <label className="form-check-label inline-block text-gray-800">
                        Buffet
                      </label>
                    </div>
                  </div>
                </div>
                <label className="inline-block text-xs mt-2 text-rose-600">
                  กรุณาเลือกประเภทของเมนูอาหาร
                </label>
              </div>
            </div>

            {/*type input*/}
            <div className="flex justify-center lg:w-1/2 xl:w-1/2 w-full">
              <div className="w-[75%]">
                <label className="inline-block mb-2 text-gray-700">
                  เลือกประเภทของเมนูอาหาร
                </label>
                <div className="flex justify-center">
                  <div className="mb-3 w-full">
                    <select className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border
                    border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMenuPage;
