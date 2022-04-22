import HeaderBar from "../components/RestaurantManagerBar";
import Employee from "../components/employeeComponent";
import deleteIcon from "../components/img/add_icon.jpg";
const EmployeeListPage: React.FC = () => {
  let EmployeeList = [
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
  ];
  return (
    <div>
      <HeaderBar name="Employee List"></HeaderBar>
      <div className="flex flex-col items-center overflow-y-scroll w-full h-[70vh] mt-16">
        <button className="flex w-[90%] h-[10%] border border-black justify-center items-center">
          <img src={deleteIcon} className="flex h-[50%]" />
        </button>
        {EmployeeList.map((employee) => {
          return (
            <Employee
              role={employee.role}
              nickname={employee.nickname}
              name={employee.name}
              surname={employee.surname}
            ></Employee>
          );
        })}
      </div>
    </div>
  );
};
export default EmployeeListPage;
