import HeaderBar from "../components/RestaurantManagerBar"
import TableButton from "../components/TableButton"




const EmployeeMainPage : React.FC = () =>{
    
    return (
        <div className="h-screen w-screen overflow-y-hidden">
            <HeaderBar name="EmployeeMain"></HeaderBar>
            <div className="bg-grey-100 flex flex-row ... h-full">
                <div className="bg-orange-100 left-0 w-1/4 h-full overflow-auto">
                    <div className="flex flex-col ...  text-3xl content-center ... text-center m-5 gap-5">
                        <div className="bg-white border-solid border-2 border-black shadow-md hover:bg-slate-100 rounded-md ">01</div>
                        <div className="border-solid border-2 border-black shadow-md">02</div>
                    </div>
                </div>

                 <div className="bg-red-100 right-0 w-3/4 h-screen overflow-auto">
                    <div className="grid grid-cols-6 gap-3 m-3"> 
                        <TableButton text="dlafkjasdkl;jf;" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeMainPage