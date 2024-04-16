import React from 'react'
import img from '../../assets/rooftop.webp'

const InstInfo = ({info}) => {
  return (
    <div className="relative bg-no-repeat bg-cover rounded-2xl w-[600px] xs:w-[90%] xs:h-[350px] h-[450px] flex pl-[120px] mt-12" style={{backgroundImage:`url(${info.img})`}}>
      <div className='absolute left-0 bottom-0 pl-7 pb-8 bg-black bg-opacity-35 w-full rounded-b-xl pt-5 xs:pr-5'>
        <p className='text-xl xs:text-md font-semibold flex flex-col text-white'>{info.title}</p>
        <p className='text-white font-medium'>{info.desc}</p>
      </div>
    </div>
  )
}

export default InstInfo
