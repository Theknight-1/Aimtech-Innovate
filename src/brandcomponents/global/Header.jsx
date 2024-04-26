'use client'
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [imageUrl, setImageUrl] = useState('/brand/logo/logo_white.svg');
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
      setImageUrl('/brand/logo/logo_white.svg');
    } else {
      setScrolling(false);
      setImageUrl('/brand/logo/logo_white.svg');
    }
  };

  const handleMegaMenuToggle = () => {
    setShowMegaMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className='w-full p-2 text-white flex items-center justify-end pr-10 '>
        <div className='flex gap-4 items-center'>
          <span>Schedule Discovery Meet</span>
          <span>Whatsapp</span>
          <span className='text-sm md:text-2xl'>+915464565</span>
        </div>
      </div>
      <header
        className={`sticky top-0 ${
          scrolling ? 'bg-white/ backdrop-blur-3xl text-gray-300 shadow-2xl' : 'text-white'
        } z-50 mb-2 w-screen`}
      >
        <div className='flex w-full flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center'>
          <a href='#' className='flex items-center justify-start whitespace-nowrap pl-8 text-2xl font-black'>
            <span className='mr-2 '>
              <img src={imageUrl} alt='' className='h-16 w-full' />
            </span>
          </a>
          <input type='checkbox' className='peer hidden' id='navbar-open' />
          <label
            className='absolute top-5 right-7 cursor-pointer md:hidden'
            htmlFor='navbar-open'
          >
            <span className='sr-only'>Toggle Navigation</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </label>
          <nav
            aria-label='Header Navigation'
            className='peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start'
          >
            <ul className='flex flex-col font-bold items-center space-y-2 md:ml-auto md:flex-row md:space-y-0'>
              <li className='md:mr-12 hover:text-blue-600'>
                <a href='/'>Home</a>
              </li>
              <li className='md:mr-12 hover:text-blue-600'>
                <a href='/about'>About US</a>
              </li>
              <li
                className='md:mr-12 hover:text-blue-600'
                onMouseEnter={handleMegaMenuToggle}
                onMouseLeave={handleMegaMenuToggle}
              >
                <a href='/services'>Services</a>
                <AnimatePresence>
                  {showMegaMenu && (
                    <motion.div
                      className='absolute min-h-96 top-24 left-0 right-0  rounded-b-md'
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='h-full grid grid-cols-5 bg-blue-800 bg-opacity-30  backdrop-blur-3xl backdrop-filter gap-6 p-6'>
                        <div className='bg-gray-100 rounded-md p-4'>
                          <h3 className='text-lg font-bold mb-2'>Service 1</h3>
                          <p>Description of Service 1</p>
                        </div>
                        <div className='bg-gray-100 rounded-md p-4'>
                          <h3 className='text-lg font-bold mb-2'>Service 2</h3>
                          <p>Description of Service 2</p>
                          <p>Description of Service 2</p>
                          <p>Description of Service 2</p>
                          <p>Description of Service 2</p>
                        </div>
                        <div className='bg-gray-100 rounded-md p-4'>
                          <h3 className='text-lg font-bold mb-2'>Service 3</h3>
                          <p>Description of Service 3</p>
                        </div>
                        <div className='bg-gray-100 rounded-md p-4'>
                          <h3 className='text-lg font-bold mb-2'>Service 3</h3>
                          <p>Description of Service 3</p>
                        </div>
                        <div className='backdrop-blur-2xl rounded-md p-4 border-2 '>
                          <img src="/vector/team.svg" alt="" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className='md:mr-12 hover:text-blue-600'>
                <a href='/casestudy'>Case Studies</a>
              </li>
              <li className='md:mr-12 hover:text-blue-600'>
                <a href='/contact'>Contact</a>
              </li>
              <li className='md:mr-12 hover:text-blue-600'>
                <button className='rounded-md border-2 bg-yellow-400 px-6 py-1 font-medium text-black hover:bg-yellow-500 hover:text-white'>
                  Get Proposal
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}