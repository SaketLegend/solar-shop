import React, { useState } from 'react';
import Collapse from 'react-collapse';
import arrow from '../../assets/arrow.webp';

const Ptypes = ({ info, index, showButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-auto w-[90%] pb-10 ml-[5%] mt-16 bg-slate-100 shadow-md rounded-xl flex flex-col justify-between items-start xs:w-[90%] xs:h-auto xs:ml-0 xs:flex xs:items-center xs:justify-center'>
      <div className='flex gap-7 flex-col pl-6 pt-7 xs:pl-4 items-start'>
        <h1 className='text-xl font-medium'>{index + 1}. {info.title}</h1>
        <div className='flex justify-start items-center gap-10 xs:flex-col'>
          <div className='w-[270px]'>
          <img src={info.img} alt='' />
          </div>
          <p className='w-[80%] text-md xs:w-[90%]'>{info.in}</p>
          {info.showButton && (<div className='xs:bg-slate-300 bg-slate-300 w-[80px] h-[80px] xs:w-[150px] flex items-center justify-center  rounded-full s:flex xs:pl-0 xs:rounded-full xs:items-center xs:justify-around xs:h-[35px] mr-[2%]'>
          <button onClick={toggleCollapse} className='w-[50px] pl-[200px] xs:pl-0 relative'>
          <img
          className={`h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          src={arrow}
          alt='Button'
          />
      </button>
          </div>)}
        </div>
      </div>
      
      <Collapse isOpened={isOpen}>
      <div className='ml-[25px] xs:ml-7 xs:mr-5 mt-12'>
        <p className='text-xl font-medium text-blue-800'>Advantages of {info.title}</p>
      </div>
    <div>
         <div className='ml-[25px] xs:ml-7 w-[90%] xs:mr-5 xs:w-[90%] mt-8 flex flex-col gap-4'>
          <p className='text-xl font-medium'>{info.main}</p>
          <p>{info.inf}</p>
          </div>
          <div className='ml-[25px]  w-[90%] xs:w-[90%] xs:mr-5 mt-8 flex flex-col gap-4'>
          <p className='text-xl font-medium'>{info.main2}</p>
          <p>{info.inf2}</p>
          </div>
          </div>
        
      </Collapse>
    </div>
  );
};

export default Ptypes;
