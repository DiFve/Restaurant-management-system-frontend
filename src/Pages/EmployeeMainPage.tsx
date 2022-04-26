import QueueLayout from "../components/QueueLayout";
import HeaderBar from "../components/RestaurantManagerBar";
import TableLayout from "../components/TableLayout";

const EmployeeMainPage: React.FC = () => {
  return (
    <div className="h-screen w-screen overflow-y-hidden">
      <div className="flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>HOME</label>
        
        </div>
      </div>
      <div className="bg-grey-100 flex flex-row ... h-full w-full">
        <div className="bg-orange-100 left-0 w-1/4 h-full  flex flex-col">
          <div className=" flex justify-center  my-3 bg-blue-200 text-center m-3 rounded-md ">
            
              <label className="flex flex-col  h-[50px] justify-center w-full md:text-3xl text-xl">
                IN QUEUE
              </label>
            
          </div>
          <div className="overflow-auto">
            <QueueLayout />
          </div>
        </div>
        <div className="bg-red-100 right-0 w-3/4 h-screen overflow-scroll">
          {/* ด้านขวาฝั่ง TABLE */}
          <div className="flex flex-col w-full h-full">
            <div className=" flex justify-center  my-3 bg-yellow-100 text-center m-3 rounded-md w-auto">
              <label className="flex flex-col  h-[50px] justify-center md:text-3xl text-2xl w-full">
                TABLE
              </label>
            </div>
            <div className="w-full h-full">
              <TableLayout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMainPage;
