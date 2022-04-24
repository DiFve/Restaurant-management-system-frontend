import { render } from '@testing-library/react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getItemInCart, deleteItemInCart, confirmItemInCart, getCartOrder } from '../api/cart'
import CartPageComponents from './CartComponents';

interface Receipt {
  orderName: string;
  detail: Array<string>;
  price: Number;
  quantity: Number | undefined;
  menuType: string | undefined;
  tableNumber: string | undefined;
  foodID: string | undefined;
}
const OrderReceipt: React.FC<Receipt> = (props) => {
  //console.log({ props })
  const { orderName, detail, price, quantity, menuType, tableNumber, foodID } = props

  // const [getCartOreder, setCartOreder] = useState<any>([])
  // useEffect(() => {
  //   const getCOrder = async () => {
  //     const res = await getCartOrder((3).toString())
  //     setCartOreder(res?.data.order)
  //     //console.log(res?.data.order)
  //     console.log(res?.data.order)
  //   }
  //   getCOrder()

  // }, []);

  const deleteMenu = async () => {
    const res = await deleteItemInCart(tableNumber, foodID)
    console.log(tableNumber)
    console.log(foodID)

    window.location.reload()

  }

  if (menuType == "a-la-carte") {
    if (quantity != 0 && quantity != undefined) {
      return (
        <div className="p-[4%] mt-[3%] flex justify-between ">
          <div className="w-[65%]">
            <label className="text-xl">{orderName}</label>
            <div className="pl-[4%]">
              <label className="text-base">{
                detail.map((element) => {
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
            <button className="flex flex-row">
              <label className="text-base ml-[50%] text-red-600"> ลบ </label>
            </button>

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
            <button className="flex flex-row " onClick={deleteMenu}>
              <label className="text-base text-red-600"> ลบ </label>
            </button>
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
export default OrderReceipt;
