import React from 'react'

import { useNavigate } from "react-router-dom";



interface Tablename {
    id:string
    tablenumber:number
    eating:boolean
}


const TableButton : React.FC<Tablename> =(props)=>{
    const navigate = useNavigate()

    const {id} = props

    const onClickOrderListPage=()=>{
        navigate(`/EmployeeMain/OrderList/${id}`)
    }
    const {tablenumber,eating}=props
    const status = eating==true ? "bg-green-400 p-10 shadow-md hover:bg-green-200 text-center text-2xl rounded-3xl":"bg-white p-10 shadow-md hover:bg-slate-100 text-center text-2xl rounded-3xl"

    return (
        <button 
        onClick={onClickOrderListPage}
        className={status} >
            <div>{props.tablenumber}</div>
        </button>
    )
}

export default TableButton