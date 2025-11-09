import React, { useState } from 'react'
import image from '../assets/image.png'
import menu from '../assets/Menu.svg'
import closeMenu from '../assets/close-menu.svg'

const Navbar = ({ setHeroShift }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(true)
    setHeroShift(true) 
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
    setHeroShift(false) 
  }

  return (
    <nav className='fixed flex justify-between items-center px-5 sm:px-8 md:px-12 bg-[#FFFBFB] w-full z-50 py-3 sm:py-4'>
      <div className='flex flex-col w-[174px] h-[63px] rounded-[50px] pt-[5px] pr-[25px] pb-2.5 pl-[25px] gap-2.5'>
        <img src={image} alt="logo" className='w-[110px] sm:w-[124px] h-10 sm:h-12' />
      </div>

      {!isMenuOpen ? (
        <div className='flex flex-col w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]'>
          <img src={menu} alt="Menu" className='w-full h-full cursor-pointer' onClick={handleMenu} />
        </div>
      ) : (
        <div className='flex items-center justify-end gap-6 sm:gap-8 text-center w-full sm:w-auto'>
          <p className='text-sm sm:text-base md:text-lg font-medium text-gray-800 cursor-pointer hover:text-[#F15D2B] transition'>Services</p>
          <p className='text-sm sm:text-base md:text-lg font-medium text-gray-800 cursor-pointer hover:text-[#F15D2B] transition'>Their Stories</p>
          <p className='text-sm sm:text-base md:text-lg font-medium text-gray-800 cursor-pointer hover:text-[#F15D2B] transition'>Our Stories</p>
          <p className='text-sm sm:text-base md:text-lg font-medium text-gray-800 cursor-pointer hover:text-[#F15D2B] transition'>Varnam</p>

          <button className='bg-[#F15D2B] text-white flex items-center justify-center gap-2 rounded-[24px] py-[10px] px-[16px] shadow-md hover:scale-105 transition'>
            Let's Talk
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11Z"
                fill="white" />
            </svg>
          </button>

          <img
            src={closeMenu}
            alt="close menu"
            className='w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] cursor-pointer'
            onClick={handleCloseMenu}
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar
