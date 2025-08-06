import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export const Footer = () => {
  return (
    <div className='w-full bg-black h-auto flex flex-col items-start justify-center lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]'>
    <div className='w-full h-auto flex lg:flex-row flex-col items-start justify-center gap-[60px]'>
      <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px]'>
        <div className='text-themegreen font-bold text-left lg:text-4x1 text-3xl uppercase'>
          SHAHRUKH <span className='text-white'></span>


   </div>
   <p className='text-gray-300 text-md font-poppins'>Feel free to call us in working hours Mon- Fri 9:00 - 18:00. Our team will be happy to help answer your queries.</p>
   <div className='flex justify-center items-center gap-2 text-white'><FaPhoneVolume className='text-themegreen size-5' /> +1 (123) 456-7890</div>
   <div className='flex justify-center items-center gap-6'> <FaFacebookF className='size-4 text-white hover:text-themegreen cursor-pointer' /><FaTwitter className='size-4 text-white hover:text-themegreen cursor-pointer' /><FaLinkedinIn className='size-4 text-white hover:text-themegreen cursor-pointer' /><FaInstagram className='size-4 text-white hover:text-themegreen cursor-pointer' /></div>
   </div>
   <div className='lg:w-[15%] w-full flex flex-col justify-center item-start gap-6'>
    <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Company</h1>
    <ul className='flex flex-col justify-center items-start gap-2'>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Home</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>About us</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Pricing</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Blog</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Our Projects</li>
      </ul>
      
    </div>
    <div className='lg:w-[15%] w-full flex flex-col justify-center item-start gap-6'>
    <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Services</h1>
    <ul className='flex flex-col justify-center items-start gap-2'>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Cloud Solutions</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Cyber Security</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Pricing</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Blog</li>
      <li className='text-white hover:text-themegreen cursor-pointer text-md'>Our Projects</li>
      </ul>
      </div>
      <div className='lg:w-[15%] w-full flex flex-col justify-center item-start gap-5'>
       <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Subscribe to Newsletter</h1>

       <div className='flex flex-col justify-center item-start w-full'>
        <input type="text" placeholder='Enter your email address' className='w-full p-4 bg-transparent border-2 border-gray-800 rounded-md' />
        <button className='w-full bg-themegreen hover:bg-white hover:text-black py-4 px-6 text-md font-semibold mt-5 rounded-md'>Subscribe</button>

        </div>
        </div>
        
   </div>
   <div className='w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]'>
    <p className='text-gray-300 text-md font-poppins text-center'>Copyrights © 2023 Shahrukh. All rights reserved.</p>
    <ul className='text-gray-300 flex justify-center items-end gap-6'>
      <li>Terms of Service</li>
      <li>Privacy Policy</li>
      <li>Cookie Policy</li>
      </ul>
    </div>
    </div>

  )
}

