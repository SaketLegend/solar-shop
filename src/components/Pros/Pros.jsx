import React from 'react'
const Pros = ({pro}) => {
  return (
    <div>
      <div className='flex items-center gap-5'>
          <div className='w-[70px] xs:w-[50px] xs:h-[50px] h-[70px] bg-blue-800 overflow-hidden shadow-xl flex items-center justify-center rounded-full'>
            <img className='w-[45px] xs:w-[30px] xs:h-[30px] h-[45px] object-contain' src={pro.logo} alt="Icon1" />
          </div>
          <div>
            <p className='text-2xl xs:text-xl font-semibold'>{pro.head}</p>
            <p>{pro.in}</p>
          </div>
        </div>
    </div>
  )
}

export default Pros
