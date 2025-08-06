import React, { useEffect } from 'react'
import { reviews} from '../export';
import { FaStar} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div id='testimonials' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] py-[60px] gap-[20px]'>
      <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themegreen text-sm font-poppins '>CLIENT VOICES</h1>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:w-[50%] w-full text-center'>Stories of Success from our Clients</h1>
      <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins lg:w-[60%] w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Sed viverra, enim in facilisis facilisis, enim erat commodo est, a tincidunt nisi ligula non quam.</p>
      <div data-aos="zoom-in" data-aos-delay="50" className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:gap-6 gap-3 mt-6'>
        {reviews.map((review, index) => (
          <div className='flex flex-col justify-center items-start gap-4 bg-gray-100 hover:bg-green-100 lg:py-12 py-5 lg:px-8 px-4 rounded-md cursor-pointer'>
            <button className='flex justify-center items-center gap-1 bg-white py-2 px-4 rounded-full'>{review.rating}<FaStar className='text-yellow-500' /></button>
            <p className='text-gray-500 text-sm font-poppins text-left'>{review.about}</p>
            <div className='mt-5'>
              <h1 className='text-themegreen text-md font-poppins text-left'>{review.name}</h1> 
              <h1 className='text-gray-700 font-semibold text-sm font-poppins text-left capitalize'>{review.role}</h1>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

