import { table } from "console";
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
  const [state, setState] = useState(false);
  const [type, setType] = useState("");
  const [amountPerson, setAmountPerson] = useState(0);

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
    setState(!state);
    // console.log("Popup Used");
    // console.log(state);
    console.log(type);
  };

  const PopupB = () => {
    setType("buffet");
    setState(!state);
    console.log(type);
  };

  

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>{tableNumber}</label>
        </div>
      </div>
      <div className="flex flex-col h-5/6 w-full ">
        <div className="flex m-auto bg-slate-300 w-3/4 h-full text-2xl ">
          <div className="m-auto w-full">
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
                onClick={PopupB}
                className="bg-blue-400  hover:bg-blue-300 rounded-3xl w-[20%]"
              >
                <label className=" text-xl">BUFFET</label>
              </button>
              <div>
                {state ? <QRPopup tableNumber={tableNumber} type={type} /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderPage;
