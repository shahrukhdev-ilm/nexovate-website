import React, { useEffect } from 'react'
import aboutimg from '../assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div id='about' className='w-full h-auto flex flex-col items-center justify-between lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px]'>
      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col items-start justify-center gap-[20px]'>
          <h1 className='text-themegreen uppercase text-sm font-poppins'>Who We Are</h1>
          <h1 className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:max-w-[600px]'>Delivering Excellence in IT Solutions</h1>
          <p className='text-grey-500 text-md font-poppins lg:max-w-[600px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.
          </p>
        </div>
        <div className='lg:w-[40%] w-full flex lg:justify-end justify-start items-center'>
          <button className='bg-themegreen hover:bg-white hover:text-white px-6 text-black text-md font-semibold mt-5 rounded-md'>Learn More</button>
        </div>
      </div>
      <div id='bottom-box' className='w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]'>
        <div id='img-box' className='lg:w-[40%] w-full'>
          <img src={aboutimg} alt="" className='w-full bg-cover bg-center' />
        </div>
        <div
          id='content-box'
          className='lg:w-[60%] w-full flex flex-col items-start justify-between gap-[60px] lg:ml-[40px]'
        >
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-black text-[35px] capitalize leading-[1.2em] font-poppins'>Expertise</h1>
            <p className='text-grey-500 text-md font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.</p>
          </div>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-black text-[35px] capitalize leading-[1.2em] font-poppins'>Expertise</h1>
            <p className='text-grey-500 text-md font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.</p>
          </div>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-black text-[35px] capitalize leading-[1.2em] font-poppins'>Expertise</h1>
            <p className='text-grey-500 text-md font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


