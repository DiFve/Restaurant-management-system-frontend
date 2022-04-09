import menu_placeholder from './img/menu_placeholder.jpg'
import plus_icon from './img/plus_icon.png'
interface Menu{
    name:string,
    pic : string,
}
const MenuComponent : React.FC<Menu> = (props) =>{
    var name = props.name
    var pic = props.pic

    return(
        <div className='flex flex-row bg-red-500 mt-[1%] ml-[2.5%] h-[15%] w-[95%] '>
            <div className='flex flex-row bg-yellow-200 w-full'>
                <div className='flex bg-green-800 h-full max-w-[120px] w-[100%] shrink justify-center items-center' >
                    <img src={menu_placeholder} alt="" className='h-[90%] w-[90%] border border-black'/>
                </div>
                <div className='bg-yellow-800 h-full w-[60%] text-center'>
                    <div className='mt-[2%]'>
                        <label className='text-xl bg-red-200'>{name}</label>
                    </div>
                </div>
            </div>
            <div className='bg-blue-800 h-full w-[40px] shrink-0'>
                <div className='flex justify-center items-center h-full w-full'>
                    <img src={plus_icon} alt="" className='bg-red-700 w-[90%] '/>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent