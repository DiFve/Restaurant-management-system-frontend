import React, { useState, useEffect } from "react";
import api from "../api/apiClient";
import config from "../config.json";
import HeaderBar from "../components/RestaurantManagerBar";
import { useNavigate, useParams } from "react-router-dom";
import { getFoodInfo } from "../api/food";
import { deleteMenu, editMenu } from "../api/menu";

const EditMenuPage: React.FC = () => {
  const { id } = useParams();
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [showDeletePopUp, setshowDeletePopUp] = React.useState(false);
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [optionList, setOptionList] = useState<any>([]);
  const [choiceList, setChoiceList] = useState([
    {
      id: 1,
      name: "ตัวเลือก",
      additionPrice: 0,
    },
  ]);
  const [foodType, SetfoodType] = useState([
    "อาหารประเภทข้าว",
    "อาหารประเภทเส้น",
    "ของหวาน",
    "ของทานเล่น",
    "เครื่องดื่ม",
    "อื่น ๆ",
  ]);
  const [foodTypeSelected, setFoodTypeSelected] = useState("อื่น ๆ");
  const [newFoodType, setNewFoodType] = useState("");
  const [addChoiceData, setAddChoiceData] = useState("");
  const [addAdditionPriceData, setAddAdditionPriceData] = useState("");
  const [editChoiceData, setEditChoiceData] = useState("");
  const [editAdditionPriceData, setEditAdditionPriceData] = useState("");
  const [editChoiceID, setEditChoiceID] = useState(0);
  const [numberOfChoice, setNumberOfChoice] = useState(1);
  const [numberOfOption, setNumberOfOption] = useState(0);
  const [typeOption, setTypeOption] = useState("single");
  const [optionName, setOptionName] = useState("");
  const [required, setRequired] = useState(false);
  const [isAlacarte, setIsAlacarte] = useState(false);
  const [isBuffet, setIsBuffet] = useState(false);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("InStock");
  const [imgData, setImgData] = useState<any>(null);
  const [imgURL, setImgURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getFood = async () => {
      const res = await getFoodInfo(id);
      const foodData = res?.data;
      setFoodName(foodData.menu.foodName);

      if (foodData.menu.foodType === "a-la-carte") {
        setIsAlacarte(true);
      } else if (foodData.menu.foodType === "buffet") {
        setIsBuffet(true);
      } else {
        setIsAlacarte(true);
        setIsBuffet(true);
      }

      setImgData(config.imageURL + foodData.menu.image);
      setImgURL(foodData.menu.image);

      if (foodType.includes(foodData.menu.type[0])) {
        setFoodTypeSelected(foodData.menu.type[0]);
      } else {
        SetfoodType([foodData.menu.type[0], ...foodType]);
        setFoodTypeSelected(foodData.menu.type[0]);
      }

      const obj = foodData.menu.detail[0];

      let choiceNumberID: number = 1;
      let optionNumberID: number = 1;
      const historyOption: Array<any> = [];
      obj.topicName.map((value: any, index: number) => {
        var optionIndex = index;
        const choiceNameList = obj.option[optionIndex];
        const addPriceList = obj.additionalPrice[optionIndex];
        const allChoice: Array<any> = [];

        choiceNameList.map((val: any, index: number) => {
          var choiceIndex = index;
          const newChoice = {
            id: choiceNumberID,
            name: val,
            additionPrice: Number(addPriceList[choiceIndex]),
          };
          allChoice.push(newChoice);
          choiceNumberID = choiceNumberID + 1;
        });

        const newOption = {
          id: optionNumberID,
          type: obj.choice[optionIndex],
          name: value,
          choice: allChoice,
          required: obj.require[optionIndex],
        };
        historyOption.push(newOption);
        optionNumberID = optionNumberID + 1;
      });
      setChoiceList([
        {
          id: choiceNumberID,
          name: "ตัวเลือก",
          additionPrice: 0,
        },
      ]);
      setOptionList(historyOption);
      setNumberOfChoice(choiceNumberID);
      setNumberOfOption(optionNumberID);
      setDescription(foodData.menu.description);
      setPrice(foodData.menu.price);
    };
    getFood();
  }, []);

  const inputPicture = async (event: any) => {
    if (event.target.files[0] && event.target.files[0].size <= (1024*1024)) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);

      var formData = new FormData();
      // var imagefile = document.querySelector("#file");
      formData.append("image", event.target.files[0]);
      const res = await api.post(`${config.apiURL}addMenuPicture`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImgURL(res.data.path);
    }
  };

  const inputFoodName = (event: any) => {
    setFoodName(event.currentTarget.value);
  };

  const handleAlacarte = () => {
    setIsAlacarte(!isAlacarte);
    if (isAlacarte === false) {
      setPrice(0);
    }
  };

  const handleBuffet = () => {
    setIsBuffet(!isBuffet);
  };

  const handlePriceChange = (event: any) => {
    if (parseInt(event.target.value) != NaN && Number(event.target.value) >= 0)
      setPrice(Number(event.target.value));
  };

  const inputFoodType = (event: any) => {
    setFoodTypeSelected(event.target.value);
  };

  const inputNewFoodType = (event: any) => {
    setNewFoodType(event.currentTarget.value);
  };

  const inputDescription = (event: any) => {
    setDescription(event.currentTarget.value);
  };

  const onClickConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      foodName.length > 0 &&
      /^[a-zA-Zก-๏\s]+$/.test(foodName) &&
      (isAlacarte === true || isBuffet === true) &&
      (foodTypeSelected !== "อื่น ๆ" ||
        (foodTypeSelected === "อื่น ๆ" &&
          newFoodType.length > 0 &&
          /^[a-zA-Zก-๏\s]+$/.test(newFoodType))) &&
          ((description.length === 0) || (description.length!==0 &&/^[a-zA-Zก-๏0-9\s]+$/.test(description))) &&
          Number.isInteger(Number(price))
    ) {
      console.log("hello");
      const inputFoodName: string = foodName;
      const type: Array<any> = [];
      if (foodTypeSelected === "อื่น ๆ") {
        type.push(newFoodType);
      } else {
        type.push(foodTypeSelected);
      }
      const image: string = imgURL;
      let foodType: string = "";
      if (isAlacarte === true && isBuffet === false) {
        foodType = "a-la-carte";
      } else if (isAlacarte === false && isBuffet === true) {
        foodType = "buffet";
      } else {
        foodType = "a-la-carte buffet";
      }

      const descript: string = description;

      const topicName: Array<any> = [];
      const require: Array<any> = [];
      const option: Array<any> = [];
      const additionalPrice: Array<any> = [];
      const optionType: Array<any> = [];
      optionList.map((opt: any) => {
        topicName.push(opt.name);
        require.push(String(opt.required));
        optionType.push(opt.type);
        const choices: Array<any> = [];
        const addPrice: Array<any> = [];
        opt.choice.map((choi: any) => {
          choices.push(choi.name);
          addPrice.push(choi.additionPrice);
        });
        option.push(choices);
        additionalPrice.push(addPrice);
      });
      const detail: Array<any> = [
        {
          topicName: topicName,
          choice: optionType,
          option: option,
          additionalPrice: additionalPrice,
          require: require,
        },
      ];

      const addPrice: number = price;
      const addStatus: string = status;
      const newMenu = {
        foodName: inputFoodName,
        type: type,
        image: image,
        foodType: foodType,
        description: descript,
        detail: detail,
        price: addPrice,
        status: addStatus,
      };
      console.log(newMenu);
      await editMenu(id, newMenu);
      navigate("/ManagerMenu");
    }
  };

  const onClickDeleteConfirm = async () => {
    setshowDeletePopUp(false);
    await deleteMenu(id);
    navigate("/ManagerMenu");
  };

  const onClickCancel = () => {
    navigate("/ManagerMenu");
  };

  const handleChangeTypeChoice = (event: any) => {
    setTypeOption(event.target.value);
  };

  const handleChangeStatus = (event: any) => {
    setStatus(event.target.value);
  };

  const handleChangeRequired = () => {
    setRequired(!required);
  };

  const handleAddChoiceChange = (event: any) => {
    setAddChoiceData(event.currentTarget.value);
  };

  const handleAddAdditionPriceChange = (event: any) => {
    setAddAdditionPriceData(event.currentTarget.value);
  };

  const handleEditChoiceChange = (event: any) => {
    setEditChoiceData(event.currentTarget.value);
  };

  const handleEditAdditionPriceChange = (event: any) => {
    setEditAdditionPriceData(event.currentTarget.value);
  };

  const handleEditChoice = (
    choiceID: Number,
    choiceName: String,
    additionPrice: Number
  ) => {
    setEditChoiceID(Number(choiceID));
    setEditChoiceData(String(choiceName));
    setEditAdditionPriceData(String(additionPrice));
  };

  const handleCancelChoice = () => {
    setEditChoiceID(0);
  };

  const handleDeleteChoice = (choiceID: Number) => {
    const newChoice = [...choiceList];
    const index = choiceList.findIndex((choice) => choice.id === choiceID);
    newChoice.splice(index, 1);
    setChoiceList(newChoice);
  };

  const handleDeleteOption = (optionID: Number) => {
    const newOption = [...optionList];
    const index = optionList.findIndex((option: any) => option.id === optionID);
    newOption.splice(index, 1);
    setOptionList(newOption);
  };

  const optionNameInput = (event: any) => {
    setOptionName(event.currentTarget.value);
  };

  const handleAddChoiceSubmit = () => {
    if (
      addChoiceData.length > 0 &&
      parseInt(addAdditionPriceData) != NaN &&
      Number(addAdditionPriceData) >= 0 &&
      /^[a-zA-Zก-๏0-9\s]+$/.test(addChoiceData) &&
      choiceList.length <= 15 &&
      Number.isInteger(Number(addAdditionPriceData))
    ) {
      const number = numberOfChoice + 1;
      const addChoice = {
        id: number,
        name: addChoiceData,
        additionPrice: Number(addAdditionPriceData),
      };
      const newChoice = [...choiceList, addChoice];
      setChoiceList(newChoice);
      setNumberOfChoice(number);
      setAddChoiceData("");
      setAddAdditionPriceData("");
    }
  };

  const handleEditChoiceSubmit = () => {
    if (
      editChoiceData.length > 0 &&
      parseInt(editAdditionPriceData) != NaN &&
      Number(editAdditionPriceData) >= 0 &&
      /^[a-zA-Zก-๏0-9\s]+$/.test(editChoiceData) &&
      Number.isInteger(Number(editAdditionPriceData))
    ) {
      const editChoice = {
        id: Number(editChoiceID),
        name: editChoiceData,
        additionPrice: Number(editAdditionPriceData),
      };
      const newChoice = [...choiceList];
      const index = choiceList.findIndex(
        (choice) => choice.id === editChoiceID
      );
      newChoice[index] = editChoice;
      setChoiceList(newChoice);
      setEditChoiceID(0);
    }
  };

  const handleAddOptionCancel = () => {
    setChoiceList([
      {
        id: numberOfChoice + 1,
        name: "ตัวเลือก",
        additionPrice: 0,
      },
    ]);
    setOptionName("");
    setAddChoiceData("");
    setAddAdditionPriceData("");
    setEditChoiceID(0);
    setRequired(false);
    setTypeOption("single");
    setShowPopUp(false);
  };

  const handleAddOptionConfirm = () => {
    if (
      optionName.length > 0 &&
      optionName.length <= 15 &&
      addChoiceData.length === 0 &&
      editChoiceID === 0 &&
      /^[a-zA-Zก-๏\s]+$/.test(optionName) &&
      optionList.length <= 15
    ) {
      const number = numberOfOption + 1;
      const addOption = {
        id: number,
        type: typeOption,
        name: optionName,
        choice: choiceList,
        required: required,
      };
      const newOption = [...optionList, addOption];
      console.log(newOption);
      setOptionList(newOption);
      setChoiceList([
        {
          id: numberOfChoice + 1,
          name: "ตัวเลือก",
          additionPrice: 0,
        },
      ]);
      setOptionName("");
      setAddChoiceData("");
      setAddAdditionPriceData("");
      setEditChoiceID(0);
      setRequired(false);
      setTypeOption("single");
      setNumberOfChoice(numberOfChoice + 1);
      setNumberOfOption(number);
      setShowPopUp(false);
    }
  };

  return (
    <div>
      <HeaderBar name="แก้ไขเมนูอาหาร" pathback=""></HeaderBar>
      <form className="flex flex-col w-full h-auto" onSubmit={onClickConfirm}>
        <div className="flex flex-row flex-wrap w-full h-auto">
          {/*image input*/}
          <div className="flex md:w-1/2 md:h-[350px] lg:w-1/2 lg:h-[350px] xl:w-5/12 xl:h-[400px] w-full h-[400px]">
            <div className="flex flex-col content-end w-full h-full">
              <div className="flex justify-center items-center w-full h-[90%]">
                <img
                  src={imgData}
                  className="flex w-[90%] h-[90%] object-contain"
                  alt=""
                />
              </div>
              <input
                type="file"
                accept="image/png,image/jpeg"
                className="pl-3"
                onChange={inputPicture}
              />
            </div>
          </div>

          {/*sub detail input*/}
          <div className="flex flex-col flex-wrap md:w-1/2 md:h-[350px] lg:w-1/2 lg:h-[350px] xl:w-7/12 xl:h-[400px] w-full h-auto bg-green-100">
            {/*Name Input*/}
            <div className="flex justify-center w-full h-auto">
              <div className="my-5 w-[75%]">
                <label className="inline-block mb-2 text-gray-700">
                  ชื่ออาหาร
                </label>
                <input
                  type="text"
                  className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white
                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="ชื่อเมนูอาหาร"
                  onChange={inputFoodName}
                  maxLength={30}
                  value={foodName}
                />
                <label className="inline-block text-xs mt-2 text-rose-600">
                  กรอกได้เฉพาะภาษาไทย หรือภาษาอังกฤษ เท่านั้น
                </label>
              </div>
            </div>

            {/*radio input*/}
            <div className="flex justify-center lg:w-1/2 xl:w-1/2 w-full">
              <div className="w-[75%]">
                <label className="mb-2 text-gray-700">
                  เลือกประเภทการทานอาหาร
                </label>

                <div className="flex justify-start">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-sm h-4 w-4 border border-gray-300 bg-white 
                      checked:bg-green-600 checked:border-gray-500 mt-1 float-left mr-2 cursor-pointer"
                        type="checkbox"
                        onChange={handleAlacarte}
                        checked={isAlacarte}
                      />
                      <label className="form-check-label text-sm inline-block text-gray-800">
                        อาหารจานเดียว
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input appearance-none rounded-sm h-4 w-4 border border-gray-300 bg-white 
                      checked:bg-green-600 checked:border-gray-500 mt-1 float-left mr-2 cursor-pointer"
                        type="checkbox"
                        onChange={handleBuffet}
                        checked={isBuffet}
                      />
                      <label className="form-check-label text-sm inline-block text-gray-800">
                        บุฟเฟต์
                      </label>
                    </div>
                  </div>
                </div>

                <label className="inline-block text-xs mt-2 text-rose-600">
                  กรุณาเลือกประเภทการทาน
                </label>
              </div>
            </div>

            {/*type input*/}
            <div className="sm:mt-4 md:mt-3 lg:mt-4 xl:mt-5 mt-4 flex flex-row w-full h-auto">
              <div className="flex justify-center xl:w-1/2 w-2/3">
                <div className="w-[75%]">
                  <label className="inline-block mb-2 text-gray-700">
                    เลือกประเภทของเมนูอาหาร
                  </label>
                  <div className="flex justify-center">
                    <div className="mb-3 w-full">
                      <select
                        className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border
                    border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                        onChange={inputFoodType}
                      >
                        {foodType.map((type) => {
                          return (
                            <option
                              value={type}
                              selected={foodTypeSelected === type}
                            >
                              {type}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {foodTypeSelected === "อื่น ๆ" ? (
                <div className="mt-8 flex justify-start xl:w-1/2 w-1/3">
                  <div className="xl:w-[75%] w-[90%]">
                    <input
                      type="text"
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white
                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="ประเภทของเมนูอาหาร"
                      onChange={inputNewFoodType}
                      maxLength={15}
                      value={newFoodType}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/*detail input*/}
        <div className="flex flex-col justify-start w-full h-auto bg-yellow-50">
          <div className="flex flex-rol w-full h-[50px] justify-start bg-rose-100">
            <>
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition-all duration-150"
                type="button"
                onClick={() => setShowPopUp(true)}
              >
                เพิ่มตัวเลือก
              </button>
              {showPopUp ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            เพิ่มตัวเลือก
                          </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div className="my-4 text-slate-500 text-lg leading-relaxed">
                            <div className="flex flex-col justify-center w-full">
                              {/*radio input*/}
                              <label className="inline-block mb-2 text-gray-700">
                                เลือกประเภทของตัวเลือก
                              </label>
                              <div className="flex flex-row justify-start mb-2">
                                <div className="mr-10">
                                  <input
                                    className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white 
                                          checked:bg-green-600 checked:border-gray-500 mt-2 float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name="flexRadioChoice"
                                    value="single"
                                    onChange={handleChangeTypeChoice}
                                    checked={typeOption === "single"}
                                  />
                                  <label className="text-sm inline-block text-gray-800">
                                    ตอบได้เพียงหนึ่งตัวเลือก
                                  </label>
                                </div>
                                <div className="">
                                  <input
                                    className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white 
                                          checked:bg-green-600 checked:border-gray-500 mt-2 float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name="flexRadioChoice"
                                    value="multiple"
                                    onChange={handleChangeTypeChoice}
                                    checked={typeOption === "multiple"}
                                  />
                                  <label className="text-sm inline-block text-gray-800">
                                    ตอบได้หลายตัวเลือก
                                  </label>
                                </div>
                              </div>

                              <div className="mr-10 mb-5">
                                <input
                                  className="appearance-none rounded-sm h-4 w-4 border border-gray-300 bg-white 
                                          checked:bg-red-600 checked:border-gray-500 mt-2 float-left mr-2 cursor-pointer"
                                  type="checkbox"
                                  onChange={handleChangeRequired}
                                />
                                <label className="text-sm inline-block text-gray-800">
                                  จำเป็น
                                </label>
                              </div>

                              {/*option name input*/}
                              <input
                                type="text"
                                className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-2
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="ชื่อตัวเลือก"
                                maxLength={15}
                                value={optionName}
                                onChange={optionNameInput}
                              />
                              <label className="text-xs text-red-500 inline-block text-gray-800 mb-3">
                                กรอกได้เฉพาะภาษาไทย หรือภาษาอังกฤษ เท่านั้น
                              </label>
                              {/*choice input*/}
                              <div>
                                {choiceList.map((choice) => (
                                  <div>
                                    {editChoiceID === choice.id ? (
                                      <div className="flex flex-row justify-between mb-2">
                                        <div className="flex flex-row justify-evenly block w-[90%]">
                                          <input
                                            type="text"
                                            className="block w-[45%] px-3 py-1.5 text-sm font-normal text-black bg-gray-100
                                           rounded focus:outline-none"
                                            maxLength={15}
                                            onChange={handleEditChoiceChange}
                                            value={editChoiceData}
                                          />
                                          <input
                                            type="text"
                                            className="block w-[45%] px-3 py-1.5 text-sm font-normal text-black bg-gray-100
                                           rounded focus:outline-none"
                                            onChange={
                                              handleEditAdditionPriceChange
                                            }
                                            value={editAdditionPriceData}
                                          />
                                        </div>
                                        <button
                                          type="button"
                                          className="text-sm mx-2"
                                          onClick={handleEditChoiceSubmit}
                                        >
                                          ยืนยัน
                                        </button>
                                        <button
                                          type="button"
                                          className="text-sm mx-2"
                                          onClick={handleCancelChoice}
                                        >
                                          ยกเลิก
                                        </button>
                                      </div>
                                    ) : (
                                      <div className="flex flex-row justify-between mb-2">
                                        <div className="flex flex-row w-[75%]">
                                          <span className="w-1/2 mt-1.5 text-sm mx-2 text-black">
                                            {choice.name}
                                          </span>
                                          <span className="w-1/2 mt-1.5 text-sm mx-2 text-black">
                                            {choice.additionPrice}
                                          </span>
                                        </div>
                                        <div>
                                          <button
                                            type="button"
                                            className="text-sm mx-2"
                                            onClick={() => {
                                              handleEditChoice(
                                                choice.id,
                                                choice.name,
                                                choice.additionPrice
                                              );
                                            }}
                                          >
                                            แก้ไข
                                          </button>
                                          <button
                                            type="button"
                                            className="text-sm mx-2"
                                            onClick={() => {
                                              handleDeleteChoice(
                                                Number(choice.id)
                                              );
                                            }}
                                          >
                                            X
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-row justify-between mb-2 mt-3">
                                <input
                                  type="text"
                                  className="block w-[40%] px-3 py-1.5 text-sm font-normal text-black bg-gray-100
                                           rounded focus:outline-none"
                                  placeholder="ตัวเลือก"
                                  maxLength={15}
                                  onChange={handleAddChoiceChange}
                                  value={addChoiceData}
                                />
                                <input
                                  type="text"
                                  className="block w-[40%] px-3 py-1.5 text-sm font-normal text-black bg-gray-100 appearance-none
                                           rounded focus:outline-none"
                                  placeholder="เพิ่มราคา"
                                  onChange={handleAddAdditionPriceChange}
                                  value={addAdditionPriceData}
                                />
                                <button
                                  type="button"
                                  className="text-sm mx-2"
                                  onClick={handleAddChoiceSubmit}
                                >
                                  เพิ่ม
                                </button>
                              </div>
                              <label className="text-xs text-red-500 inline-block text-gray-800">
                                กรอกตัวเลือกได้เฉพาะภาษาไทย หรือภาษาอังกฤษ
                                และกรอกช่องเพิ่มราคาเป็นจำนวนเต็ม
                              </label>
                            </div>
                          </div>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-black background-transparent font-semibold px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleAddOptionCancel}
                          >
                            ยกเลิก
                          </button>
                          <button
                            className="bg-rose-500 text-white active:bg-rose-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleAddOptionConfirm}
                          >
                            ยืนยัน
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
          </div>

          {optionList.length != 0 ? (
            <div>
              <div className="ml-5 mt-5 text-xl ">ตัวเลือก</div>
            </div>
          ) : null}

          <div className="w-full h-auto">
            {optionList.map((option: any) => {
              return (
                <div className="flex flex-col w-full h-auto">
                  <div className="flex flex-row">
                    <span className="flex ml-7 mt-2 text-md">
                      {option.name}
                    </span>
                    <span
                      className={`flex ml-3 mt-2 text-lg ${
                        option.required && "text-red-500"
                      } ${!option.required && "text-transparent"}`}
                    >
                      *
                    </span>
                    <button
                      type="button"
                      className="text-sm ml-10 mt-2 text-red-500"
                      onClick={() => {
                        handleDeleteOption(Number(option.id));
                      }}
                    >
                      X
                    </button>
                  </div>
                  {option.choice.map((choice: any) => {
                    return (
                      <div className="flex w-full ml-9 ">
                        <input
                          className={`form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white 
                          mt-1 float-left mr-2 cursor-pointer ${
                            option.type === "single" && "rounded-full"
                          }
                          ${option.type === "multiple" && "rounded-sm"}`}
                          disabled
                        />
                        <label className="form-check-label inline-block text-md text-gray-800 text-gray-800 opacity-60">
                          {choice.name}
                        </label>
                        <label className="form-check-label inline-block text-md ml-10 text-gray-800 text-gray-800 opacity-60">
                          {"+" + choice.additionPrice}
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="ml-5 mt-5 text-xl ">คำอธิบาย</div>
          <div className="flex w-full justify-center items-center h-[200px] mb-5">
            <textarea
              className="block w-[90%] h-[90%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white
              border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="คำอธิบาย..."
              maxLength={500}
              onChange={inputDescription}
              value={description}
            />
          </div>

          {isAlacarte ? (
            <div className="flex flex-row justify-start w-full">
              <div className="flex ml-5 mt-1 text-xl ">ราคา</div>
              <input
                type="text"
                className="flex ml-5 mb-5 block px-3 py-1.5 text-md font-normal text-gray-700 bg-white appearance-none
                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="ราคา..."
                onChange={handlePriceChange}
                value={String(price)}
              />
            </div>
          ) : null}

          <label className="ml-5 mb-2 text-gray-700 text-xl">สถานะอาหาร</label>

          <div className="flex justify-start">
            <div>
              <div className="form-check mb-2">
                <input
                  className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white 
                    checked:bg-red-500 checked:border-gray-500 mt-2 float-left ml-7 mr-2 cursor-pointer"
                  type="radio"
                  name="statusRadioChoice"
                  value="InStock"
                  onChange={handleChangeStatus}
                  checked={status === "InStock"}
                />
                <label className="text-md inline-block mt-1 text-gray-800">
                  สินค้ามีอยู่
                </label>
              </div>
              <input
                className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white 
                  checked:bg-red-500 checked:border-gray-500 mt-2 float-left ml-7 mr-2 cursor-pointer"
                type="radio"
                name="statusRadioChoice"
                value="OutofStock"
                onChange={handleChangeStatus}
                checked={status === "OutofStock"}
              />
              <label className="text-md inline-block mt-1 text-gray-800 mb-3">
                สินค้าหมด
              </label>
            </div>
          </div>
        </div>

        {/*button submit*/}
        <div className="flex w-full h-auto justify-center md:justify-end lg:justify-end xl:justify-end">
          <div className="p-5 w-1/3 max-w-[200px] sm:h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px] h-[75px]">
            <button
              className="rounded-lg w-full h-full border bg-rose-300 shadow-md hover:bg-rose-400"
              onClick={() => {
                setshowDeletePopUp(true);
              }}
              type="button"
            >
              <span className="text ">ลบ</span>
            </button>
          </div>
          <div className="p-5 w-1/3 max-w-[200px] sm:h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px] h-[75px]">
            <button
              className="rounded-lg w-full h-full border bg-white shadow-md hover:bg-gray-200"
              onClick={onClickCancel}
              type="button"
            >
              <span className="text ">ยกเลิก</span>
            </button>
          </div>
          <div className="p-5 w-1/3 max-w-[200px] sm:h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px] h-[75px]">
            <button
              className="rounded-lg w-full h-full border bg-white shadow-md hover:bg-gray-200"
              type="submit"
            >
              <span className="text ">ยืนยัน</span>
            </button>
          </div>
          {showDeletePopUp ? (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                    {/*header*/}
                    <div className="flex flex-row items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-xl font-semibold">
                        คุณต้องการลบเมนูนี้หรือไม่ ?
                      </h3>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-black background-transparent font-semibold px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setshowDeletePopUp(false);
                        }}
                      >
                        ยกเลิก
                      </button>
                      <button
                        className="bg-rose-500 text-white active:bg-rose-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onClickDeleteConfirm}
                      >
                        ยืนยัน
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default EditMenuPage;
