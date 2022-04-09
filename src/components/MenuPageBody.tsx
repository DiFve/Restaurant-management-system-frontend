import search_icon from './img/search_icon.png'

const MenuPageBody : React.FC = () => {
    var options:Array<string> = ['Hello','Mother','Father','Kwai']
    return(
        <div className="flex flex-col bg-pink-500 w-full h-full">
            <div className="flex flex-row bg-gray-200 h-[55px]">
                <div className="flex basis-3/4 bg-blue-400 h-full items-center justify-center">
                    <img src={search_icon} alt="search_icon" className='h-[65%]'/>
                    <input type="text" className="h-[70%] w-[70%] indent-2.5 focus:outline-none" placeholder='Search...'/>
                </div>
                <div className="flex basis-1/4 bg-green-300 justify-center items-center">
                    <select className='h-[60%] w-[80%]'>
                        {
                            options.map((element)=>{
                                console.log(element)
                                return (
                                    <option value={element} key={element}> {element}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div>
                MenuShow
            </div>
        </div>
    )
}

export default MenuPageBody