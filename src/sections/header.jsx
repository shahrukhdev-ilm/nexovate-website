import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'




export const Header = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);
  const menulinks = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Projects', link: 'projects' },
    { name: 'Testimonials', link: 'testimonials' },
    { name: 'Contact', link: 'contact' }
    { name: 'OUR LOCATION', link: 'location', id: 'location' } 

  ];
  useEffect(() => {
    if(menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

  return () => {
    document.body.classList.remove('overflow-hidden');
  }
  }, [menuOpen]);

return (
  <header className='bg-black py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50'>
    <div className='flex justify-between items-center'>
      <div className='text-themegreen font-bold text-left lg:text-4x1 text-3x1 uppercase'>
        NEXOVATE <span className='text-white'></span>

        </div>
        <button className='text-white text-2xl md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>
        <nav className='hidden md:block'>
          <ul className='flex space-x-10 text-lg font-poppins text-white'>
            {menulinks.map((link, index) => (
              <li key={link.link}>
                <Link to={link.link} smooth={true} duration={500} className={`cursor-pointer ${link.name === 'Home' ? 'text-themegreen' : 'hover:text-themegreen transition-colors'}`}>
                  {link.name}
                </Link>

              </li>
            ))}

          </ul>
        </nav>
        </div>
        <div className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-y-hidden`}>
          <IoCloseSharp
  className='fixed top-3 right-6 text-3xl cursor-pointer'
  onClick={() => setMenuOpen(false)} />
          <ul className='flex flex-col space-y-6 text-2xl text-center font-poppins'>
            {menulinks.map((link, index) => (
              <li key={link.link}>
                <Link to={link.link} smooth={true} duration={500} className={`cursor-pointer ${link.name === 'Home' ? 'text-themegreen' : 'hover:text-themegreen transition-colors font-poppins '}`} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            
          </ul>

     </div>
  </header>
)
}

