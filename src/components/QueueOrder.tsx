import React from 'react'

interface OrderList{
    
    foodname: string
    amount: number
    tablenumber: number
}

const QueueOrder: React.FC<OrderList> =(props)=>{

    const {foodname,amount,tablenumber}=props

    return (
        <div className="bg-white shadow-md hover:bg-slate-100 rounded-md">
            <h1 className='text-2xl'>Table {props.tablenumber}</h1>
            <div>{props.foodname} x{props.amount} </div>
        </div>
    ) 

}

export default QueueOrder