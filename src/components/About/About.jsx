import React from 'react'
import Engg from '../../assets/Engg.webp'
import yrs from '../../assets/ribexp.webp'

const About = () => {
  return (
    <div className='mb-10'>
      <div className='flex justify-between items-center mr-28 xs:mr-7'>
        <p className='text-4xl font-semibold text-orange-800 pl-[120px] xs:pl-[30px] xs:text-2xl '>About Us</p>
        <div className='flex gap-20 xs:gap-5'>
        <img className='xs:w-[90px] xs:h-[50px]' src={Engg} alt="Energy Engg. and Equip." />
        <img className='xs:w-[90px] xs:h-[50px]' src={yrs} alt="Energy Engg. and Equip." />
        </div>
      </div>
      <div className='pr-20 pt-8 pl-28 xs:pr-5 xs:pl-5'>
        <p className='mt-8'>Energy Equipment & Engg. is promoted by professionals having sound technical qualification and vast experience of more than 20 years. The promoters are also trained in solar energy by Renewable Energy Development Agency and TATA Power Solar.</p>
        <p className='mt-4'>Energy Equipment & Engg. Introduces Multibrand solar products showroom concept in the field of Solar energy, first time in South Maharashtra and started their multibrand showrooms - ‘The Solar Shop’ at Pune, Sangli and Kolhapur with wide spread network of dealers in rural market of South Maharashtra</p>
        <p className='mt-4'>Energy Equipment & Engg is Authorized Dealer of Supreme Solar, Sunstrom Solar and other Reputed – MNRE approved manufacturers for state of South Maharashtra, deals in solar water Heating Systems for Industrial as well as Domestic Applications and Solar Photovoltaic Systems such as Solar Home light systems, Solar Power packs, Solar Grid Tie systems and many more.</p>
        <p className='mt-4'>Where no grid system is in place, it is most likely that power will be provided to communities through local energy generation systems rather than installing the grid systems of the past. Over the past 20 years, solar has proven itself time and time again in meeting the needs of such rural communities in many countries. From Africa to Asia, from America to the Pacific, solar power continues to improve the lives of millions of people.</p>
        <div className='mt-10'>
            <p className='text-2xl xs:text-xl font-medium'>Our Promoters Team</p>
            <div className='flex flex-row justify-between mt-8'>
                <p className='text-xl text-orange-700 font-normal pl-32 xs:text-md xs:pl-1'>Mr.Mohan Patil</p>
                <p className='text-xl text-orange-700 font-normal xs:text-md'>Mr.Prashant Patil</p>
                <p className='text-xl text-orange-700 font-normal pr-32 xs:text-md xs:pr-1'>Mr. Vijay Padale</p>
            </div>
        </div>
        <p className='mt-10'>For millions of years, the sun has powered the world. And for a over a decade now Energy Equipment & Engg. has helped people harness this power, with the range of packaged products some of the products are given below. Please click</p>
      </div>
    </div>
  )
}

export default About
