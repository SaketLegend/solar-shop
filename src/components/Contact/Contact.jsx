import React from 'react'
import Engg from '../../assets/Engg.jpg'
import yrs from '../../assets/ribexp.jpg'
import shop from '../../assets/shop.jpg'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-between items-center mr-28 xs:mt-5 xs:flex xs:items-center xs:mr-4'>
        <p className='text-4xl font-semibold text-orange-800 pl-[120px] xs:pl-[30px] xs:text-2xl'>Contact Us</p>
        <div className='flex gap-20 xs:gap-9'>
          <img className='xs:w-[90px] xs:h-[50px]' src={Engg} alt="Energy Engg. and Equip." />
          <img className='xs:w-[90px] xs:h-[50px]' src={yrs} alt="Energy Engg. and Equip." />
        </div>
      </div>
      <div className='flex justify-between items-center pl-20 xs:flex-col xs:pl-3'>
        <div className='flex flex-col w-1/2 xs:w-full xs:items-center justify-center items-start  mt-24 xs:mt-16 xs:flex-col mb-20 xs:mb-10'>
          <img className='w-[500px] mr-11 xs:mr-0 xs:mt-12 xs:w-full rounded-lg' src={shop} alt="" />
          <div className='w-[500px] mr-[200px] xs:mr-0 gap-5 xs:w-full mt-5'>
            <p className='text-3xl xs:text-2xl font-semibold text-blue-800'>THE SOLAR SHOP</p>
            <p className='text-xl xs:text-md font-medium text-gray-800'> Ranbhise Complex, Opp. DSP Office, Sangli-Miraj Road, Vishrambag, Sangli.</p>
            <p>Mob.9823185533, 9823181182</p>
            <p>Email Id: sales@thesolarshop.in</p>
          </div>
        </div>
<div className='w-1/2 xs:w-full justify-center items-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.3187457486537!2d74.59463253496423!3d16.84866758761574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1232be11208c3%3A0x15b375b0ae762309!2sThe%20Solar%20Shop%2C%20Energy%20Equipment%20%26%20Engg!5e0!3m2!1sen!2sin!4v1713198870582!5m2!1sen!2sin"  className='rounded-lg border border-slate-500 shadow-md w-[600px] h-[600px] xs:w-full xs:h-[400px] xs:mb-10' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
      </div>

    </div>
  )
}

export default Contact
