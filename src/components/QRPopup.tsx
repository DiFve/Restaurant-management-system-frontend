import config from "../config.json";
import React, { useEffect, useState } from "react";
import { makeQR } from "../api/qrcode";
import { useNavigate } from "react-router-dom";

interface items {
  tableNumber: number;
  type: string;
}

const QRPopup: React.FC<items> = (props) => {

    const navigate = useNavigate()
  const { tableNumber, type } = props;


  const [QRCodeImage, setQRCodeImage] = useState("");

  useEffect(() => {
    const createQRcode = async () => {
      var res = await makeQR(props.tableNumber, props.type);
      console.log(res?.data.qrImage);
      setQRCodeImage(res?.data.qrImage);

      console.log(config.imageURL + QRCodeImage);
      console.log(type);
    };
    createQRcode();
  }, []);

  const returnEmployeeMain = () => {
    navigate("/EmployeeMain");
  };

  return (
    <div>
      <div className="flex h-screen w-screen z-10 bg-[#edededcc] absolute top-0 left-0 justify-center items-center">
        <div className=" flex flex-col bg-green-400 absolute justify-center items-center p-2 h-auto w-auto">
          <div className="flex absolute justify-center items-center h-[60%]"></div>
          <label className="text-xl font-medium">{type.toUpperCase()}</label>
          <div className="h-2">

          </div>
          <img src={config.imageURL + QRCodeImage} alt="QRImage" />
          <div className="h-2"></div>
          <button onClick={returnEmployeeMain} className="rounded bg-red-500 w-[20%] h-[20%] bottom-0 hover:bg-red-300">
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRPopup;
