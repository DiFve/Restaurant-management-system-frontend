import React from 'react'
import QueueOrder from './QueueOrder'


const QueueLayout =()=>{

    const example = [
        {foodname:"ไก่ทอด",amount:1,tablenumber:5},
        {foodname:"มาม่า",amount:2,tablenumber:8}
    ]
          
    return(
        <div className="flex flex-col ...  text-xl content-center ... text-center m-5 gap-5 ">
            {example.map((element)=>{
                return <QueueOrder foodname={element.foodname} amount={element.amount} tablenumber={element.tablenumber}/>

            })}
        </div>
    )
}

export default QueueLayout