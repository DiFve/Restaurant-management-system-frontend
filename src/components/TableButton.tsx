import React from 'react'

interface Tablename {
    text:string
}

const TableButton : React.FC<Tablename> =(props)=>{
    return (
        <div className="bg-white p-5 shadow-md hover:bg-slate-200">
            {props.text}
        </div>
    )
}

export default TableButton