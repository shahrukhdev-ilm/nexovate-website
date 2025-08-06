import React, { useEffect } from 'react'
import backgroundimage from '../assets/hero_bg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div id='contact' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[40px] gap-[20px] bg-cover bg-center' style={{ backgroundImage: `url(${backgroundimage})` }}>
      <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white font-poppins'>Ready to get started?</h1>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-[30px] capitalize leading-1.2em] font-poppins lg:w-[50%] w-full text-center'>Lets Elevate Your Business with Us</h1>
      <p data-aos="zoom-in" data-aos-delay="150" className='text-white text-md font-poppins lg:w-[60%] w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.</p>
     <div data-aos="slide-up" data-aos-delay="200" className='flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-1 mt-5'>
      <button className='bg-themegreen hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'>CONTACT US</button>
      <button className='bg-white hover:bg-themegreen hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'>REACH US</button>

     </div>
    </div>
  )
}


