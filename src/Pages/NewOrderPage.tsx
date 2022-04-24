import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeQR } from "../api/qrcode";
import { getTableByID } from "../api/table";
import QRPopup from "../components/QRPopup";
import config from "../config.json";

interface item {
  id: string;
}

const NewOrderPage: React.FC = (props) => {
  const [tableNumber, setTableNumber] = useState(0);
  const [ASelect, setASelect] = useState(false);
  const [BSelect, setBSelect] = useState(false);
  const [BPrice, setBPrice] = useState(false);
  const [type, setType] = useState("");
  const [amountPerson, setAmountPerson] = useState(0);
  const [price, setPrice] = useState(0);

  const addPerson = () => {
    setAmountPerson(amountPerson >= 10 ? 10 : amountPerson + 1);
    console.log(amountPerson);
  };

  const rmPerson = () => {
    setAmountPerson(amountPerson <= 0 ? 0 : amountPerson - 1);
    console.log(amountPerson);
  };

  const { id } = useParams();

  useEffect(() => {
    const getAllTableByID = async () => {
      var res = await getTableByID(id);
      setTableNumber(res?.data.tableNumber);
      console.log(res?.data.tableType);
    };

    getAllTableByID();
  }, []);

  const PopupA = () => {
    setType("a-la-carte");
    setASelect(!ASelect);
    
    console.log(type);
  };

  const PopupB = () => {
    if (price > 0) {
      setType("buffet");
      setBSelect(!BSelect);
      console.log(type);
      console.log("BSelect " + { BSelect });
    }
  };

  const PopupBuffetPrice = () => {
    setBPrice(!BPrice);
    console.log("BPrice " + { BPrice });
  };

  const updatePrice = (e: any) => {
    setPrice(e.currentTarget.value);
    console.log(price);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>{tableNumber}</label>
        </div>
      </div>
      <div className="flex flex-col h-5/6 w-full ">
        <div className="flex m-auto bg-slate-300 w-[60%] h-[70%] text-2xl ">
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-auto h-auto justify-center ">จำนวนคน</div>
            <div className="flex h-[30px] w-auto"></div>
            <div className="flex flex-row justify-center">
              <button
                onClick={rmPerson}
                className="object-contain h-9 w-9 rounded-full "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
                  alt="-"
                />
              </button>
              <label className="mx-[20%]">{amountPerson}</label>
              <button
                onClick={addPerson}
                className="object-contain h-9 w-9 rounded-full"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png"
                  alt="+"
                />
              </button>
            </div>
            <div className="h-[30px]"></div>
            <div className="flex flex-row justify-center h-[60px]">
              <button
                onClick={PopupA}
                className="bg-green-400 hover:bg-green-300 rounded-3xl w-[20%]"
              >
                <label className=" text-xl">A-LA-CARTE</label>
              </button>
              <div className="mx-3"></div>
              <button
                onClick={PopupBuffetPrice}
                className="bg-blue-400  hover:bg-blue-300 rounded-3xl w-[20%]"
              >
                <label className=" text-xl">BUFFET</label>
              </button>
              <div>
                {BPrice ? (
                  <div>
                    <div className="flex h-screen w-screen z-10 bg-[#edededcc] absolute top-0 left-0 justify-center items-center">
                      <div className=" flex flex-row absolute justify-center items-center h-full w-full">
                        <div
                          onClick={PopupBuffetPrice}
                          className="flex w-[20%] h-screen"
                        ></div>
                        <div className="flex flex-col w-[60%] h-screen ">
                          <div className="flex h-[25%] w-full"></div>
                          <div className="flex flex-col h-[65%] w-full bg-blue-300 justify-center items-center">
                            <label className="flex text-4xl">BUFFET</label>
                            <div className="flex w-full h-[2%]"></div>
                            <input
                              type="number"
                              className="flex rounded-md placeholder:text-center text-center w-auto "
                              placeholder="ราคา BUFFET"
                              value={price}
                              onChange={updatePrice}
                            />
                            <div className="flex w-full h-[60%] justify-center items-center">
                              <div className="flex w-[60%] h-[80%]">
                                {BSelect ? (
                                  <QRPopup
                                    tableNumber={tableNumber}
                                    tableType={type}
                                    personAmount={amountPerson}
                                    buffetPrice={price}
                                  /> //<QRPopup tableNumber={tableNumber} type={type} />
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="flex"></div>
                            </div>
                            <div className="flex w-full justify-center">
                              <button
                                onClick={PopupB}
                                className=" bg-green-300 rounded-full min-w-[30%] "
                              >
                                QRCODE
                              </button>
                            </div>
                          </div>
                          <div className="flex h-[10%] w-full"></div>
                        </div>
                        <div
                          onClick={PopupBuffetPrice}
                          className="flex w-[20%] h-screen"
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {ASelect ? (
                  <div>
                    <div className="flex h-screen w-screen z-10 bg-[#edededcc] absolute top-0 left-0 justify-center items-center">
                      <div className=" flex flex-row absolute justify-center items-center h-full w-full">
                        <div
                          onClick={PopupA}
                          className="flex w-[20%] h-screen"
                        ></div>
                        <div className="flex flex-col w-[60%] h-screen ">
                          <div className="flex h-[25%] w-full"></div>
                          <div className="flex flex-col h-[65%] w-full bg-green-300 justify-center items-center">
                            <label className="flex text-4xl">A-LA-CARTE</label>
                            <div className="flex w-full h-[2%]"></div>

                            <div className="flex w-full h-[60%] justify-center items-center">
                              <div className="flex w-[60%] h-[80%]">
                                <QRPopup
                                  tableNumber={tableNumber}
                                  tableType={type}
                                  personAmount={amountPerson}
                                  buffetPrice={price}
                                />
                              </div>
                              <div className="flex"></div>
                            </div>
                            <div className="flex w-full justify-center">
                              <button
                                onClick={PopupB}
                                className=" bg-blue-300 rounded-full min-w-[30%] "
                              >
                                QRCODE
                              </button>
                            </div>
                          </div>
                          <div className="flex h-[10%] w-full"></div>
                        </div>
                        <div
                          onClick={PopupBuffetPrice}
                          className="flex w-[20%] h-screen"
                        ></div>
                      </div>
                    </div>
                  </div> //<QRPopup tableNumber={tableNumber} type={type} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderPage;
