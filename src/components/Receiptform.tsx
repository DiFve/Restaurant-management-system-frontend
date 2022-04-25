import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react'
import { getCartOrder } from '../api/cart';

interface Receipt {
  orderName: string;
  detail: Array<any>;
  price: Number;
  quantity: Number | undefined;
  menuType: string | undefined;

}
const Receiptform: React.FC<Receipt> = (props) => {
  //console.log({ props })
  const { orderName, detail, price, quantity, menuType } = props

  if (menuType == "a-la-carte") {
    if (quantity != 0 && quantity != undefined) {
      return (
        <div className="p-[4%] mt-[3%] flex justify-between ">
          <div className="w-[65%]">
            <label className="text-xl">{orderName}</label>
            <div className="pl-[4%]">
              <label className="text-base">{
                (detail[0].option).map((element: any) => {
                  if (element != "") {
                    return (
                      <div className="flex flex-col">
                        <label className="text-base"> {"* " + element} </label>
                      </div>
                    )
                  }

                })
              }</label>
            </div>
          </div>

          <div className="w-[20%] flex flex-col items-end">
            <label className="text-xl">{price} </label>
            <label className="text-xl"> {"X" + quantity} </label>
          </div>

        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  else if (menuType == "buffet") {
    if (quantity != 0 && quantity != undefined) {
      return (
        <div className="p-[4%] mt-[3%] flex justify-between ">
          <div className="w-[65%] ">
            <label className="text-xl">{orderName}</label>
            <div className="pl-[4%]">
              <label className="text-base">{
                (detail[0].option).map((element: any) => {
                  if (element != "") {
                    return (
                      <div className="flex flex-col">
                        <label className="text-base"> {"* " + element} </label>
                      </div>
                    )
                  }

                })
              }</label>
            </div>
          </div>

          <div className="w-[20%] flex flex-col items-end">
            <label className="text-2xl"> {"X" + quantity} </label>
          </div>

        </div>
      )
    }
    else {
      return <div></div>
    }
  }
  else {
    return <div></div>
  }


}
export default Receiptform;
