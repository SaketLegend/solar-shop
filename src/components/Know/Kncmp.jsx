import React, { useState } from 'react';

const Kncmp = ({ model }) => {

  return (
      <div className='bg-orange-100 items-center relative flex h-[400px] duration-300 rounded-xl overflow-hidden transition-all group transform border border-solid border-gray-300 shadow-md w-[350px] hover:w-[690px] xs:flex xs:h-auto xs:pt-0 xs:flex-col xs:mt-5 xs:pl-0 xs:mr-8 xs:relative'>

        <div
          className={` w-[350px] h-[400px] xs:h-auto mt-12 xs:mt-0 rounded-2xl flex flex-col items-center `}
        >
          <div className='w-[300px] mt-5 xs:mt-2 h-[200px] flex items-center justify-center'>
            <img className='w-[200px]' src={model.img} alt='' />
          </div>
          <div className='p-5 mt-5 xs:mt-0 gap-3 flex flex-col xs:mb-3'>
            <p className='text-xl font-medium mb-10 xs:mb-2'>{model.title}</p>
          </div>
        </div>
        <div className='transition-all w-[320px] h-[400px] pb-5 justify-center flex items-center xs:pb-3 xs:left-8 xs:relative xs:flex absolute overflow-y-auto left-[365px]'>
          <div className='mr-10 absolute top-5 left-0'>
            <ul className='flex flex-col gap-1 list-disc'>
            {model.info.map((item,index) => (
              <li key={index}>
                {item.includes("SS")?(
                  <span className='font-bold'>{item}</span>
                ):(
                  item
                )}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Kncmp;
