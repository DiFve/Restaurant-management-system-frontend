import res_icon from './img/res_icon_placeholder.jpg'
import bell_icon from './img/bell_icon.png'
import cart_icon from './img/cart_icon.png'

const HeaderBar : React.FC = () =>{
    return(
        <div className="flex flex-row bg-headerRed h-[92px] w-full">
            <div className="flex w-[25%] h-full bg-gray-400 justify-center items-center">
                <img src={res_icon} alt="res_headbar_icon" className='rounded-[70%] w-[90%] h-[90%]' />
            </div>
            <div className="flex w-[50%] h-full bg-[#fb923c] text-3xl text-center items-center">
                <label className='h-[80%] bg-red-700 text-textWhite'>Aroi Reum Teun</label>
            </div>
            <div className="flex flex-col w-[25%] h-full bg-blue-700 item-center text-center">
                <div className='w-[100%] bg-yellow-700 h-[50%]'>
                    Change Lang
                </div>
                <div className='flex flex-row h-[50%] bg-gray-500 justify-center'>
                    <div className='flex bg-blue-800 justify-center'>
                        <img src={bell_icon} alt="" className='w-[90%]'/>
                    </div>
                    <div className='flex bg-green-800 justify-center'>
                        <img src={cart_icon} alt="" className='w-[90%]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar