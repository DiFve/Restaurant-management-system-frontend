import React from 'react'

interface HeaderName {
    name: string;
}
const HeaderBar: React.FC<HeaderName> = (props) => {

  return (
    <div className="flex flex-col bg-[#dc2626] w-screen h-[150px]">
          <label className=" text-center text-white text-4xl font-normal pt-[60px] ">
            {props.name}
          </label>
    </div>
  )
}

export default HeaderBar