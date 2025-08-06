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
    {/* Location Section */}
      <div
        id="location"
        className="w-full flex flex-col items-center justify-center lg:px-[80px] px-[20px] py-[60px] gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-themegreen uppercase text-sm font-poppins">Our Location</h2>
        <p className="text-gray-500 text-md font-poppins text-center">
          Visit us at: Intelligent Learning Machines, National Science and Technology Park, Islamabad, Pakistan
        </p>
        <div className="w-full lg:w-[60%] h-[300px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.64662734146!2d72.991426!3d33.646301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9573aecd2f93%3A0x1c7fdc5084512ca2!2sNational%20Science%20%26%20Technology%20Park%20(NSTP)!5e0!3m2!1sen!2s!4v1718035700000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

