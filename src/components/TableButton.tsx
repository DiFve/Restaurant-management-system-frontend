import React from 'react'

interface Tablename {
    tablenumber:number
    eating:boolean
}


const TableButton : React.FC<Tablename> =(props)=>{

    const {tablenumber,eating}=props
    const status = eating==true ? "bg-green-400 p-10 shadow-md hover:bg-green-200 text-center text-2xl rounded-3xl":"bg-white p-10 shadow-md hover:bg-slate-100 text-center text-2xl rounded-3xl"

    return (
        <div className={status}>
            <div>{props.tablenumber}</div>
        </div>
    )
}

export default TableButton