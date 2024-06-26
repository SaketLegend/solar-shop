import React from 'react'
import Engg from '../../assets/Engg.webp'
import yrs from '../../assets/ribexp.webp'
import img1 from '../../assets/spp.webp';
import img2 from '../../assets/spp1.webp'
import Cards from '../Pro_Cards/Product_Card';
import img3 from '../../assets/spp2.webp'
import img4 from '../../assets/spp3.webp'
import Ptypes from './Ptypes';
import img5 from '../../assets/offgrid.webp'
import img6 from '../../assets/offgridnew.webp'
import img7 from '../../assets/offgrid2.webp'
import img8 from '../../assets/netmeter.webp'
import img9 from '../../assets/inverters.webp'
import img from '../../assets/200w.gif'
import { motion } from 'framer-motion';

const Pmain = () => {

  const data = [
    {
      img: img2,
      title: "Rooftop Solutions",
      info: "Grid connected PV systems are he future of the solar markets. Solar Shop is pioneering the technologies of tomorrow to provide large grids. The company's unparallel experience lies in offering complete solutions with the focus on high quality and dependabiility."
    },
    {
      img: img3,
      title: "Banking Solutions",
      info: "The solar shop has deployed a large range of complete end-to-end power solutions for banks in rural areas, which is easy to install, and provides good quality power on which banking operations can be run."
    },
    {
      img: img4,
      title: "Building Integrated PV",
      info: "Solar solutions that are aesthetically integrated into building architecture, providing not only generation of heat and entry of natural light , but also heat insulation."
    },
  ];

  const info = [
    {
      title: "Grid Tied / On Grid Solar Systems",
      img: img5,
      in: "Grid tied / On Grid refers to solar power pack system that is connected to grid supply. When energy demand by load is more than generation in solar system it takes from grid supply and when energy is access then feed to grid via grid tie inverter." ,
      main: "Save more money with net metering",
      inf: "A grid-connection will allow you to save more money with solar panels through better efficiency rates, net metering, plus lower equipment and installation costs.Batteries, and other stand-alone equipment, are required for a fully functional off-grid solar system and add to costs as well as maintenance. Grid-tied solar systems are therefore generally cheaper and simpler to install. Your solar panels will often generate more electricity than what you are capable of consuming. With net metering, homeowners can put this excess electricity onto the utility grid instead of storing it themselves with batteries. Net metering (or feed-in tariff schemes in some countries) play an important role in how solar power is incentivized. Without it, residential solar systems would be much less feasible from a financial point of view. Many utility companies are committed to buying electricity from homeowners at the same rate as they sell it themselves.",
      showButton: true
    },
    {
      title: "Off-Grid Solar Systems",
      img: img6,
      in: "An off-grid solar system (off-the-grid, standalone) is the obvious alternative to one that is grid-tied. For homeowners that have access to the grid, off-grid solar systems are usually out of question. Here`s why: To ensure access to electricity at all times, off-grid solar systems require battery storage and a backup generator (if you live off-the-grid). On top of this, a battery bank typically needs to be replaced after 10 years. Batteries are complicated, expensive and decrease overall system efficiency." ,
      main: "1. No access to utility grid",
      inf: "Off-grid solar systems can be cheaper than extending power lines in certain remote areas. Consider off-gird if you’re more than 100 yards from the grid. The costs of overhead transmission lines range from $174,000 per mile (for rural construction) to $11,000,000 per mile (for urban construction).",
      main2:"2. Become energy self-sufficient",
      inf2: "Living off the grid and being self-sufficient feels good. For some people, this feeling feeling is worth more than saving money. Energy self-sufficiency is also a form of security. Power failures on the utility grid do not affect off-grid solar systems. On the flip side, batteries can only store a certain amount of energy, and during cloudy times, being connected to the grid is actually where the security is. You should install a backup generator to be prepared for these kinds of situations.",
      showButton: true
    },
    {
      title: "Grid Tie with Battery Backup",
      img: img7,
      in: "An off-grid solar system (off-the-grid, standalone) is the obvious alternative to one that is grid-tied. For homeowners that have access to the grid, off-grid solar systems are usually out of question. Here`s why: To ensure access to electricity at all times, off-grid solar systems require battery storage and a backup generator (if you live off-the-grid). On top of this, a battery bank typically needs to be replaced after 10 years. Batteries are complicated, expensive and decrease overall system efficiency." ,
      det:  {
      },
      showButton: false
    },
    {
      title: "Net Metering Systems",
      img: img8,
      in: "A grid-connection will allow you to save more money with solar panels through better efficiency rates, net metering, plus lower equipment and installation costs. Batteries, and other stand-alone equipment, are required for a fully functional off-grid solar system and add to costs as well as maintenance. Grid-tied solar systems are therefore generally cheaper and simpler to install. Your solar panels will often generate more electricity than what you are capable of consuming. With net metering, homeowners can put this excess electricity onto the utility grid instead of storing it themselves with batteries. Net metering (or feed-in tariff schemes in some countries) play an important role in how solar power is incentivized. Without it, residential solar systems would be much less feasible from a financial point of view. Many utility companies are committed to buying electricity from homeowners at the same rate as they sell it themselves." ,
      det:  {
      },
      showButton: false
    },
    {
      title: "Solar Power Packs For Existing Inverters",
      img: img9,
      in: "We offer Solar power pack system for your existing inverter and battery. If you have already installed Inverter and battery, we will offer you Solar panels and Solar intelligent charge controller according to your battery capacity. With this system, you can run your electric loads / appliances which are already connected / working on inverter, on solar power and save your electric bill.If you own a UPS/Inverter which is in good condition with a good backup, you can take advantage of Solar energy by simply installing Solar panels and using Solar Intelligent Charger controller to utilize solar power and save on energy bills." ,
      det:  {
      },
      showButton: false
    },
  ];

  return (
    <div className='flex justify-center flex-col mb-16'>
      <div className='flex justify-between items-center mr-28 xs:mr-7'>
        <p className='text-4xl font-semibold text-orange-800 pl-[120px] xs:pl-[30px] xs:text-2xl '>Solar Power Packs</p>
        <div className='flex gap-20 xs:gap-5'>
        <img className='xs:w-[90px] xs:h-[50px]' src={Engg} alt="Energy Engg. and Equip." />
        <img className='xs:w-[90px] xs:h-[50px]' src={yrs} alt="Energy Engg. and Equip." />
        </div>
      </div>
    <div className='xs:items-center flex justify-center items-center xs:flex xs:flex-col xs:ml-0 ml-[15%]'>
      <div className=' ml-[10%] rounded-tr-xl rounded-br-xl xs:rounded-xl mb-12 relative shadow-md h-auto pb-5 pt-5 xs:pt-0 xs:pb-0 w-[50%] mt-16 bg-blue-400 flex justify-center items-center gap-11 xs:flex-col xs:w-[90%] xs:h-auto xs:gap-5 xs:ml-0'>
        <img className='hidden xs:flex xs:w-[80%] xs:pt-5 pl-7 xs:pl-0' src={img} alt="" />
        <div className='w-[90%] gap-2 flex pl-28 xs:pl-0 flex-col xs:w-[90%] xs:mb-4'>
        <p className='text-white'>Choosing to go solar is not just about energy economics; it is about taking part in the fight against global warming and climate change. Responsible, sustainable businesses are discovering that the bottom-line is not just about people and profits anymore. It is also about the planet. Solar energy's reduced operating costs, good return on investments and negligible maintenance have a very positive impact on the bottom-line and greater impact on the environment.</p>
        <p className='text-white'>
          1. Generation of Electricity
        </p>
        <p className='text-white'>2. Distribution of Electricity</p>
        <p className='text-white'>3. Usage of Electricity in Home</p>
        <p className='text-white'>4. Sending Excess Electricity to Government Grid</p>
        <p className='text-white'>5. Interaction with Government or Utility</p>
        </div>
      </div>
      <motion.div animate = {{x:125}} className='w-[33%] mt-4 bg-cover absolute xs:hidden h-[420px] left-[7%] rounded-full border-white border-[30px]' style={{backgroundImage:`url(${img})`}}>
      </motion.div>
    </div>
    <div className='mt-10 mr-3 flex justify-center gap-16 xs:flex-col xs:items-center xs:gap-10'>
      {data.map((item, index)=> (
        <Cards key={index} data={item} showButton={false}/>
      ))}
    </div>
    <div>
      <p className='mt-[100px] pl-[120px] font-semibold text-3xl text-blue-800 xs:pl-7 xs:text-2xl'>Grid-Tied, Off-Grid and Hybrid Solar Systems
</p>
      <div className='flex flex-col xs:items-center'>
        {info.map((item, index)=>(
          <Ptypes key={index} info={item} index={index} />
        ))}
      </div>
    </div>
    </div>
    
  )
}

export default Pmain
