import employee_icon from './img/employee_icon.png'
import dot from './img/dot.png'
const EmployeeCall : React.FC = () =>{

    return(
        <div className='flex flex-col justify-center items-center'>
            <img src={employee_icon} alt="" className='ml-[20%] mb-[5%] h-[40%]'/>
            <label className='text-3xl mb-[3%]'>Our Staff Is Coming</label>
            <label className='text-3xl mb-[3%]'>Please Wait</label>
            <div className='flex mb-[10%] justify-center items-center h-[10%]'>
                <img src={dot} className='h-[50%] animate-bounce ' />
                <img src={dot} className='h-[50%] animate-bounce delay-100 ' />
                <img src={dot} className='h-[50%] animate-bounce delay-200' />
            </div>
        </div>
    )
}
export default EmployeeCall