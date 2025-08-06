import React, { useEffect } from 'react'
import { services } from '../export';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div id='services' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] py-[60px] gap-[20px]'>
      <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themegreen uppercase text-sm font-poppins'>OUR SERVICES</h1>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-grey-500 lg:text-[70px] text-[40px] capitalize font-poppins leading-[1.2em] font-poppins'>Driving Digital Transformation with Excellence</h1>
      <p data-aos="zoom-in" data-aos-delay="150" className='text-grey-500 text-md font-poppins lg:w-[60%] w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.</p>
      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 mt-6'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col justify-center items-start gap-4 p-10 border-2 bordergrey-200 bg-white hover:bg-green-100 rounded-md cursor-pointer'>
            <service.icon className='size-[35px] mb-5' />
            <h1 className='text-black text-[25px] capitalize leading-[1.2em] font-poppins'>{service.title}</h1>
            <p className='text-grey-500 text-sm font-poppins'>{service.para}</p>
            <button className='bg-themegreen hover:text-black text-sm font-semibold uppercase mt-10'>Learn More</button>
          </div>

        ))}

      </div>
      </div>
  )
}

