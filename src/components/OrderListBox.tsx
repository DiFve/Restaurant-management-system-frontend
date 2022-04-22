import React, { useEffect } from 'react'
import { getFoodByID } from '../api/food'

interface Box {
    foodID:string,
    quantity:number,
    foodStatus:string,
}

const OrderListBox:React.FC<Box> =(props)=>{
    const {foodID,quantity,foodStatus} = props

    // useEffect(()=>{
        

    //     const getFoodInfo =async () => {
    //         var res = await getFoodbyID()
    //         setFoodInfo(res?.data)
            

    //         console.log(res?.data)
    //     }
    //     getFoodInfo()
        
    // },[])

    
    

    /* Color for Each Status */
    let colorstatus = ""
    if(props.foodStatus=="success"){
        colorstatus = "bg-green-300"
    }else if(props.foodStatus=="cooking"){
        colorstatus = "bg-yellow-300"
    }else if(props.foodStatus=="fail"){
        colorstatus = "bg-red-300"
    }else{
        colorstatus = "bg-slate-500"
    }

    const defaultBox = "grid grid-cols border-2 p-2 " + colorstatus

    return (
        <div>
            <div className={defaultBox}> {/**box size for each order */}
            <div className="flex flex-row">
                <div className="max-w-[10vw] max-h-[10vh]">
                    <img
                        src="https://media.istockphoto.com/photos/plate-of-fried-chicken-on-blue-plaid-towel-picture-id452813985?k=20&m=452813985&s=612x612&w=0&h=8EL4NfG-jGwkAZtfEAY0180mmU6jQoj6I1rZtdo4gy8="
                        alt="chicken"
                        className="max-w-[100%] max-h-[100%]"
                    />
                </div>
                <div className="flex flex-col  mx-2">
                    <div>ชื่อ :  {props.foodID}</div>
                    <div>จำนวน : {props.quantity}</div>
                    <div>สภานะ :  {props.foodStatus}</div>
                </div>
                
            </div>
                
            </div>
        </div>
    )
}

export default OrderListBox