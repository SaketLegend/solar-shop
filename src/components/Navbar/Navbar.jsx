import React, { useState } from 'react'
import logo from '../../assets/logo.webp'
import {Link, NavLink} from 'react-router-dom'
import menu from '../../assets/more.webp'
import close from '../../assets/close.webp'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className='font-sans overflow-y-hidden w-screen'>
      <div className='pt-5 pl-14 bg-gradient-to-b from-orange-300 to-orange-10 items-center h-32 w-screen flex justify-between xs:pl-5 xs:pt-4 xs:flex-row'>
        <img className='w-30 xs:w-[130px]' src={logo} alt="Your Image" />

        <div className='hidden xs:flex xs:mr-10'>
          <button className='xs:w-7' onClick={toggle} >
            <img src={menu} alt="" />
          </button>
        </div>
        <div className='mr-10 xs:hidden'>
            <ul className='flex flex-row gap-10 items-center'>
                <li>
                <NavLink to="" className={({isActive})=>`font-semibold transition-transform duration-300 transform hover:scale-105 ${isActive ? "text-red-600 text-xl"  : "text-blue-600"} text-md `}
                >Home</NavLink> 
                </li>
                <li> <NavLink to="/about" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >About Us</NavLink> 
                </li>
                <li> <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >Contact Us</NavLink> </li>
            </ul>
        </div>
        {isOpen && (
          <>
            <div>
            <div className='hidden xs:flex flex-col gap-4 bg-orange-100 xs:h-screen fixed top-0 right-0 w-[250px] h-full overflow-y-auto pt-8 xs:rounded-xl transition-all duration-300 xs:z-50'>
            <button className='xs:ml-5 xs:mb-10' onClick={toggle}>
              <img className='xs:w-[20px]' src={close} alt="" />
            </button>
            <ul className='flex flex-row xs:flex-col gap-10 items-center'>
                <li>
                <NavLink to="" className={({isActive})=>`font-semibold transition-transform duration-300 transform hover:scale-105 ${isActive ? "text-red-600 text-xl"  : "text-blue-600"} text-md `}
                >Home</NavLink> 
                </li>
                <li> <NavLink to="/about" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >About Us</NavLink> 
                </li>
                <li> <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >Contact Us</NavLink> </li>
            </ul>
        </div>
            </div>
        </>
        )}
      </div>

    </div>
    </div>
  )
}

export default Navbar
