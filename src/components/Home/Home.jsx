import React from 'react'
import logo2 from '../../assets/Engg.jpg'
import logo3 from '../../assets/ribexp.jpg'
import main from '../../assets/main4.png'
import Cards from '../Pro_Cards/Product_Card'
import main2 from '../../assets/main2.png'
import main3 from '../../assets/main3.png'
import panels from '../../assets/panels.jpeg'
import {Link, NavLink} from 'react-router-dom'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.jpg'
import s5 from '../../assets/s5.jpg'
import change from '../../assets/stl.png'
import Pros from '../Pros/Pros'
import l2 from '../../assets/satisfied.png'
import l1 from '../../assets/best.png'
import l3 from '../../assets/expertise.png'
import SlideShow from '../SlideShow/SlideShow'
import Hmlts from '../Home_Lights/Hmlts'
import mainimg from '../../assets/main.png';

const Home = () => {

  const handleClick = () => {
    window.open('https://supremesolar.in/', '_blank'); // Replace 'https://example.com' with the actual URL
  };
  const handleClick2 = () => {
    window.open('https://sunstorm.co.in/', '_blank'); // Replace 'https://example.com' with the actual URL
  };
  const handleClick3 = () => {
    window.open('https://www.phoenixsolar.co.in/Models.html', '_blank'); // Replace 'https://example.com' with the actual URL
  };
  const handleClick4 = () => {
    window.open('https://www.suranasolar.in/', '_blank'); // Replace 'https://example.com' with the actual URL
  };
  const handleClick5 = () => {
    window.open('https://www.vikramsolar.com/', '_blank'); // Replace 'https://example.com' with the actual URL
  };

  const data = [
    {
      img: main,
      title: "Solar Water Heater",
      info: "A solar water heater uses sunlight to heat water via solar collectors and a storage tank, providing an eco-friendly and cost-effective way to meet hot water needs for residential or commercial",
      button: "/more"
    },
    {
      img: main2,
      title: "Solar Power Packs",
      info: "Solar power packs are compact systems that harness solar energy through photovoltaic panels and store it in batteries, providing off-grid electricity for various applications such as homes, businesses or remote locations.",
      button: "/power"
    },
    {
      img: main3,
      title: "Solar Lighting Systems",
      info: "Solar home lights are small-scale solar-powered lighting systems designed for residential use, consisting of solar panels, batteries, and LED bulbs, providing sustainable and affordable illumination.",
      button: "/lights"
    }
  ];

  const pro = [
    {
      logo: l1,
      head: 'Best Quality',
      in: 'Providing top quality products' 
    },
    {
      logo: l2,
      head: 'Satisfied Customers',
      in: 'In Sangli and region' 
    },
    {
      logo: l3,
      head: 'Well Experienced',
      in: 'Experienced Technical Team' 
    }
  ];

  return (
    <div className='custom-scrollbar-container scrollbar-w-12 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-200 scrollbar-thumb-hover:scrollbar-thumb-gray-700 xs:flex flex-col'>
      <div className='h-[570px]  w-screen overflow-hidden flex flex-col  pt-[80px] pl-[160px] xs:pl-7 xs:flex xs:flex-col xs:pt-[30px]'>
        <div className='flex justify-between xs:flex-col'>
        <div className='flex flex-col gap-3 xs:gap-2 xs:flex xs:flex-col'>
        <p className='text-5xl font-semibold text-blue-800 xs:text-3xl'>Sun-powered showers</p>
        <p className='text-xl font-medium xs:text-xl'>Eco-friendly luxury at its finest.</p>
        <p className='text-sm w-[550px] xs:w-[450px]'>Welcome to THE SOLAR SHOP Energy Equipment & Engg. is promoted by professionals having sound technical qualification and vast experience of more than 20 years. The promoters are also trained in solar energy by Renewable Energy Development Agency and Supreme Solar.</p>
        <div className='hidden xs:flex xs:justify-center xs:pt-5 xs:w-screen xs:items-center xs:pr-10'>
          <img className='hidden xs:flex xs:w-[250px]' src= {mainimg} alt="" />
        </div>
        <div className='flex gap-20 mt-[120px] xs:mt-5 xs:flex xs:items-center xs:justify-center'>
          <img className='xs:w-[140px] xs:h-[70px]' src={logo2} alt="" />
          <img className='xs:w-[120px] xs:h-[90px]' src={logo3} alt="" />
        </div>
        </div>
        <SlideShow/>
        </div>
      </div>
      <div className='flex gap-28 justify-center mt-12 mb-12 xs:flex xs:flex-col xs:ml-7 xs:mt-16 xs:gap-16'>
      {pro.map((item,index)=>(
            <Pros pro={item} key={index}/>
          ))}
      </div>
      <div className='gap-7 xs:flex xs:flex-col xs:items-center xs:mr-0'>
        <p className='xs:flex xs:justify-center mt-[100px] pl-[160px] font-semibold text-3xl text-blue-800 xs:mt-[60px] xs:ml-0 xs:pl-0'>Our Products</p>
        <div className='flex justify-center gap-11 mt-12 xs:flex xs:flex-col xs:justify-center xs:items-center'>
          {data.map((item,index)=>(
            <Cards data={item} key={index} showButton={true}/>
          ))}
        </div>
      </div>
      <div className='xs:flex xs:flex-col'>
        <h2 className='mt-[100px] pl-[160px] font-semibold text-3xl text-blue-800 xs:flex xs:justify-center xs:pl-0'>Our Installations</h2>
        <div className='flex items-center flex-row mt-[80px] xs:flex xs:flex-col'>
          <img className='w-[700px] h-[380px] rounded-xl pl-[160px] xs:h-[250px] xs:w-[430px] xs:pl-[30px]' src={panels} alt="" />
          <div className='h-[300px] ml-[100px] bg-gray-500 w-[1.5px] xs:hidden'></div>
          <div className='flex flex-col items-start ml-7 gap-6'>
            <p className='font-bold text-2xl xs:mt-10 xs:ml-0'>B. G. Shirke Construction Company</p>
            <p className='w-[450px] font-medium text-md xs:ml-0 xs:w-[300px]'>Mundwa, Site at AWHO, Pune
              30,000. LPD Solar Water Heater for Army Quarters,
              500KW Rooftop Solar System</p>
              <NavLink to="/show"
                style={{ textDecoration: 'none' }}>
                <button className="bg-blue-800 rounded-3xl transition-transform hover:scale-105transition-transform duration-300 transform hover:scale-105 text-white h-[50px] w-[120px] mt-4 xs:ml-0">
                  Show More
                </button>
              </NavLink>
          </div>
        </div>
      </div>
      <div>
        <p className='mt-[100px] pl-[160px] font-semibold text-3xl text-blue-800 xs:flex xs:justify-center xs:w-screen xs:pl-0'>Companies We Represent</p>
        <div className='flex mt-[80px] justify-center gap-12 mb-32 xs:flex xs:flex-col xs:items-center'>
          <img className='transition-transform duration-300 transform hover:scale-105 xs:w-[200px]' onClick={handleClick} src={s1} alt="Supreme Solar" />
          <img className='transition-transform duration-300 transform hover:scale-105 xs:w-[200px]' onClick={handleClick2} src={s2} alt="Sunstorm Solar" />
          <img className='w-[150px] transition-transform duration-300 transform hover:scale-105 xs:w-[200px]' onClick={handleClick3} src={s3} alt="Pheonix Solar" />
          <img className='transition-transform duration-300 transform hover:scale-105 xs:w-[200px]' onClick={handleClick4} src={s4} alt="Surana Solar" />
          <img className='transition-transform duration-300 transform hover:scale-105 xs:w-[200px]' onClick={handleClick5} src={s5} alt="Vikram Solar" />
        </div>
      </div>
    </div>
  )
} 

export default Home


