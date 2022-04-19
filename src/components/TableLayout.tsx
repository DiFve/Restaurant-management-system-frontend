import TableButton from "./TableButton"

const TableLayout = ()=>{
    
    
    const example = [
        {tablenumber:1,eating:true},
        {tablenumber:2,eating:false},
        {tablenumber:3,eating:true},
        {tablenumber:4,eating:false},
        {tablenumber:5,eating:true},
        {tablenumber:6,eating:true},
        {tablenumber:7,eating:true},
        {tablenumber:8,eating:true},
        {tablenumber:9,eating:true},

    ]

    

    return(
        <div className="grid grid-cols-4 gap-3 m-3 ">
            {example.map((element)=>{
                return <TableButton tablenumber={element.tablenumber} eating={element.eating}/>
            })}
        </div>
    )
}

export default TableLayout 