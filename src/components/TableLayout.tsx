import { useEffect, useState } from "react";
import { getTableInfo } from "../api/table";
import TableButton from "./TableButton";

const TableLayout: React.FC = () => {
  const [tableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    const getAllTable = async () => {
      var res = await getTableInfo();
      setTableInfo(res?.data);
      console.log(res?.data);
    };
    getAllTable();

    const cycleGetTable = setInterval(()=>{
      getAllTable();
      
    },2000)
    return ()=>clearInterval(cycleGetTable)
  }, []);


  const example = [
    { id: "", tablenumber: 1, eating: true },
    { id: "", tablenumber: 2, eating: false },
    { id: "", tablenumber: 3, eating: true },
    { id: "", tablenumber: 4, eating: false },
    { id: "", tablenumber: 5, eating: true },
    { id: "", tablenumber: 6, eating: true },
    { id: "", tablenumber: 7, eating: true },
    { id: "", tablenumber: 8, eating: true },
    { id: "", tablenumber: 9, eating: true },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 m-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-auto w-auto">
      {tableInfo.map((element:any) => {
        return (
          <TableButton
            id={element._id}
            tablenumber={element.tableNumber}
            status={element.status}
            callEmployee={element.callEmployee}
          />
        );
      })}
    </div>
  );
};

export default TableLayout;
