interface Receipt {
  orderName: string;
  detail: string;
  price: Number;
}
const OrderReceipt: React.FC<Receipt> = (props) => {
  const { orderName, detail, price } = props
  return (
    <div className="p-[4%] mt-[3%] flex justify-between ">
      <div className="w-[75%]">
        <label className="text-xl">{orderName}</label>
        <div className="pl-[4%]">
          <label className="text-base">{detail}</label>
        </div>
        <button className="">
          <label className="text-base text-red-600"> แก้ไข </label>
        </button>
        <div className="w-[20%]">
          <label className="text-xl"></label>
        </div>
      </div>

      <div className="w-[20%]">
        <label className="text-xl">{price}</label>
      </div>


    </div>

  )
}
export default OrderReceipt;
