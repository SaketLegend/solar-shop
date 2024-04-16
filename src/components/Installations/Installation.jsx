import React from 'react'
import Engg from '../../assets/Engg.webp'
import yrs from '../../assets/ribexp.webp'
import InstInfo from './InstInfo'
import img1 from '../../assets/rooftop.webp'
import img2 from '../../assets/heat.webp'
import img3 from '../../assets/five_hundred.webp'

const Installation = () => {

    const info = [
        {
            img: img1,
            title: 'Utkarsh Hall (Multipurpose Hall)',
            color: 'bg-blue-100',
            desc: 'Near Railway Gate, Vishrambag, Sangli.10 KW Solar Rooftop Power Pack',
        },
        {
            img: img2,
            title: 'Mr. Sudhir Gadgil',
            color: 'bg-gray-100',
            desc: 'Rajwada, Sangli.Heat Pump'
        },
        {
            img: img3,
            title: 'Lagoo Builders and Developers',
            color: 'bg-green-100',
            desc: 'Vishrambag, Sangli. 150 LPD Supreme Solar Water Heaters – 10 Nos. 500 LPD Solar Water Heaters – 4 Nos.'
        }
    ];

  return (
    <div className='flex flex-col '>
      <div className='flex justify-between items-center mr-28 xs:mr-5'>
        <p className='text-4xl font-semibold text-orange-800 pl-[120px] xs:pl-[30px] xs:text-2xl '>Installations</p>
        <div className='flex gap-20 xs:gap-5'>
        <img className='xs:w-[90px] xs:h-[50px]' src={Engg} alt="Energy Engg. and Equip." />
        <img className='xs:w-[90px] xs:h-[50px]' src={yrs} alt="Energy Engg. and Equip." />
        </div>
      </div>
      <div className='flex flex-wrap gap-12 xs:gap-3 items-center justify-center mb-[50px]'>
            {info.map((item,index)=>(
                <InstInfo info={item} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Installation
