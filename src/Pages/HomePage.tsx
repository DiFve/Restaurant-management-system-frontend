
import HeaderBar from "../components/RestaurantManagerBar";
import EmployeeIcon from "../components/img/employee_icon.jpg";
import MenuIcon from "../components/img/menu_icon.png";
import { useNavigate } from "react-router-dom";

const HomeTest: React.FC = () => {
  const navigate = useNavigate();

  const onClickMenuPage = () => {
    navigate("/ManagerMenu");
  };


  const onClickEmployeeListPage = () => {
    navigate("/EmployeeList");
  };


  return (
    <div>
      <div className="bg-white">
        <HeaderBar name="หน้าแรก" pathback="/login"></HeaderBar>

        <div className="flex flex-col min-h-[80vh] justify-between align-center">
          <button
            onClick={onClickMenuPage}
            className="flex flex-row bg-white w-10/12 h=10/12 mx-auto my-auto py-10 border-2 border-gray-300 rounded-lg shadow-md justify-center hover:border-4 hover:bg-gray-200"
          >
            <img className="h-10 w-10 inline align-center" src={MenuIcon} />
            <span className="pl-10 font-semibold text-3xl text-green-600">
              รายการอาหาร
            </span>
          </button>
          <button
            onClick={onClickEmployeeListPage} 
            className="flex flex-row bg-white w-10/12 h=10/12 mx-auto my-auto py-10 border-2 border-gray-300 rounded-lg shadow-md justify-center hover:border-4 hover:bg-gray-200">
            <img className="h-10 w-10 inline align-center" src={EmployeeIcon} />
            <span className="pl-10 font-semibold text-3xl text-green-600">
              พนักงาน
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
