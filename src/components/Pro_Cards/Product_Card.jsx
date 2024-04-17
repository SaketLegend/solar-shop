import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data, showButton }) => {
  return (
    <div>
      <div className='w-[350px] rounded-2xl flex flex-col items-center h-[480px] bg-orange-100 transition-transform duration-300 transform hover:scale-105 border border-solid border-gray-300 shadow-xl xs:h-[400px] xs:w-[320px]'>
        <img className='pt-9 w-[200px] h-[200px] xs:w-[120px] xs:h-[120px] xs:pt-5' src={data.img} alt="" />
        <p className='text-xl font-medium pt-5 xs:text-md xs:pt-5'>{data.title}</p>
        <div className='h-[160px]'>
        <p className='p-5 xs:p-4'>{data.info}</p>
        </div>
        {showButton && (<Link to={data.button} className='pt-5'>
        <button className='w-[300px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800 transition duration-300 ease-in-out h-9 rounded-3xl mb-5 bg-orange-400 text-white font-medium text-md xs:h-9 xs:w-[270px]'>Know More</button>
        </Link>)}
      </div>
    </div>
  );
};

export default Cards;