import React, { useState, useEffect } from "react";
import HeaderBar from "../components/RestaurantManagerBar";
const AddMenuPage: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [thaiName, setThaiName] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [optionFood, setDetailFood] = useState([{}]);

  const onClickConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    {
      /*check*/
    }
    console.log(thaiName);
    console.log(englishName);

    let kuy = { hee: 3, kuy: 3 };
    let arr = optionFood.concat(kuy).slice(1);
    console.log(arr);
    console.log(optionFood);
    setDetailFood(arr);
    console.log(arr);
    console.log(optionFood);
  };

  const inputThaiName = (event: React.FormEvent<HTMLInputElement>) => {
    setThaiName(event.currentTarget.value);
  };
  const inputEnglishName = (event: React.FormEvent<HTMLInputElement>) => {
    setEnglishName(event.currentTarget.value);
  };

  return (
    <div>
      <HeaderBar name="Add menu"></HeaderBar>
      <form className="flex flex-col w-full h-auto" onSubmit={onClickConfirm}>
        <div className="flex flex-row flex-wrap w-full h-auto">
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
                    onChange={inputThaiName}
                    pattern="^[ก-๏\s]+$"
                    maxLength={10}
                    value={thaiName}
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
                    onChange={inputEnglishName}
                    pattern="^[a-zA-Z\s]+$"
                    maxLength={5}
                    value={englishName}
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
                    <select
                      className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border
                    border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    >
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

        {/*detail input*/}
        <div className="flex flex-col justify-start w-full h-[300px] bg-rose-200">
          <div className="flex flex-rol w-full h-[50px] justify-start bg-rose-300">
            <button className="w-[50px] h-[50px] bg-red-400">
              <>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Open regular modal
                </button>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              ควย
                            </h3>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              ควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหี
                              ควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหี
                              ควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหีควยหีควยควยหี
                            </p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
            </button>
          </div>
        </div>

        {/*button submit*/}
        <div className="flex w-full h-auto justify-center md:justify-end lg:justify-end xl:justify-end">
          <div className="p-5 w-[200px] h-[100px]">
            <button className="rounded-lg w-full h-full border bg-white shadow-md hover:bg-gray-200">
              <span className="text ">Cancel</span>
            </button>
          </div>
          <div className="p-5 w-[200px] h-[100px]">
            <button
              className="rounded-lg w-full h-full border bg-white shadow-md hover:bg-gray-200"
              type="submit"
            >
              <span className="text ">Confirm</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMenuPage;
