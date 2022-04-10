import res_icon from './img/res_icon_placeholder.jpg'
import bell_icon from './img/bell_icon.png'
import cart_icon from './img/cart_icon.png'
interface HeaderName {
    name:string
}
const HeaderBar : React.FC<HeaderName> = (props) =>{
    return(
        <div className="flex flex-row bg-headerRed h-[92px] w-full">
            <div className="flex w-[25%] h-full justify-center items-center">
                <img src={res_icon} alt="res_headbar_icon" className='rounded-[70%] max-w-[92px] w-[90%] h-[90%]' />
            </div>
            <div className="flex w-[50%] h-full text-3xl text-center items-center justify-center">
                <label className='text-textWhite'>{props.name}</label>
            </div>
            <div className="flex flex-col w-[25%] h-full item-center text-center">
                <div className='w-[100%] h-[50%]'>
                    Change Lang
                </div>
                <div className='flex flex-row h-[50%] justify-center'>
                    <div className='flex justify-center w-[50%]'>
                        <img src={bell_icon} alt="" className='max-w-[46px] w-[90%]'/>
                    </div>
                    <div className='flex justify-center w-[50%]'>
                        <img src={cart_icon} alt="" className='max-w-[46px] w-[90%]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar