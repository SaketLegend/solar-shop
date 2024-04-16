import React from 'react'
import Engg from '../../assets/Engg.webp'
import yrs from '../../assets/ribexp.webp'
import img1 from '../../assets/solarhomelight.webp'
import img2 from '../../assets/solarstreet.webp'
import img3 from '../../assets/solarroadflasher.webp'
import img4 from '../../assets/gardenlight.webp'
import { info } from 'autoprefixer';
import Ptypes from '../Power_Packs/Ptypes';

const Hmlts = () => {
  
  const info = [
    {
      img: img1,
      title: 'Solar Home Light',
      in: 'Solar Home Lighting System cost-effective and reliable CFL lighting for both domestic and commercial applications in rural areas'
    },
    {
      img: img2,
      title: 'Solar Street Light',
      in: 'Solar Street Lighting Systems Solar-powered LED / PL stand-alone street lighting system that is equipped with automatic sensors and battery back-up makes it ideal for street lights and campuses.'
    },
    {
      img: img3,
      title: 'Solar Road Flasher',
      in: 'Solar Road Flasher Solar-powered warning device to provide a high level of safety to pedestrians at road crossings and junctions.'
    },
    {
      img: img4,
      title: 'Solar Garden Lights',
      in: 'Solar Garden Lighting Systems Solar-powered LED / PL stand-alone garden lighting system that is equipped with automatic sensors and battery back-up makes it ideal for garden and campuses'
    },

  ];
    

  return (
    <div>
      <div className='flex justify-between items-center mr-28 xs:mr-5'>
        <p className='text-4xl font-semibold text-orange-800 pl-[120px] xs:pl-[30px] xs:text-2xl '>Solar Lighting System</p>
        <div className='flex gap-20 xs:gap-5'>
        <img className='xs:w-[90px] xs:h-[50px]' src={Engg} alt="Energy Engg. and Equip." />
        <img className='xs:w-[90px] xs:h-[50px]' src={yrs} alt="Energy Engg. and Equip." />
        </div>
      </div>

      <div className='mt-[100px] xs:flex xs:flex-col xs:items-center mb-[70px]'>
          {info.map((item, index)=>(
            <Ptypes key={index} info={item} index={index}/>
          ))}
      </div>
    </div>
  )
}

export default Hmlts
