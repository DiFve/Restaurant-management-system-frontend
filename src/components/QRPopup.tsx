import config from "../config.json";
import React, { useEffect, useState } from "react";
import { makeQR } from "../api/qrcode";
import { useNavigate } from "react-router-dom";

interface items {
  tableNumber: number;
  tableType: string;
  personAmount: number;
  buffetPrice: number;
}

const QRPopup: React.FC<items> = (props) => {
  const navigate = useNavigate();
  const { tableNumber, tableType, personAmount, buffetPrice } = props;

  const [QRCodeImage, setQRCodeImage] = useState("");

  useEffect(() => {
    const createQRcode = async () => {
      var res = await makeQR(tableNumber, tableType, personAmount, buffetPrice);
      console.log(res?.data.qrImage);
      setQRCodeImage(res?.data.qrImage);

      console.log(config.imageURL + QRCodeImage);
    };
    createQRcode();
  }, []);

  const returnEmployeeMain = () => {
    navigate("/EmployeeMain");
  };

  return (
    <div className="flex h-full w-full justify-center">
      <img src={config.imageURL + QRCodeImage} alt="QRImage" />
    </div>
  );
};

export default QRPopup;
