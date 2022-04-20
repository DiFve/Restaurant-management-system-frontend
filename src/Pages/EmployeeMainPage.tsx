import QueueLayout from "../components/QueueLayout"
import HeaderBar from "../components/RestaurantManagerBar"
import TableLayout from "../components/TableLayout"


const EmployeeMainPage : React.FC = () =>{
    
    return (
        <div className="h-screen w-screen overflow-y-hidden">
            <HeaderBar name="EmployeeMain"></HeaderBar>
            <div className="bg-grey-100 flex flex-row ... h-full">
                <div className="bg-orange-100 left-0 w-1/4 h-full overflow-auto">
                <div className="my-3 bg-blue-100 text-3xl text-center">
                        <h1>IN QUEUE</h1>
                     </div>
                    <div >
                        <QueueLayout/>
                    </div>
                </div>
                 <div className="bg-red-100 right-0 w-3/4 h-screen overflow-auto"> {/* ด้านขวาฝั่ง TABLE */}
                     <div className=" my-3 w-full bg-yellow-100 text-3xl text-center "> 
                         
                        <h1>TABLE</h1>
                     </div>
                    <TableLayout/>
                </div>
            </div>
        </div>
    )
}

export default EmployeeMainPage