import React from 'react';
import { Link } from 'react-router-dom';
import logoMain from '../assets/images/LogoMain-Black.png';

const HeaderLanding = () => {
  return (
    <header className="bg-neutral-250 py-8 flex items-center justify-center pr-4 md:pr-24 pl-2.5">
      <figure className='flex items-center justify-center'>
        <Link to="/"><img src={logoMain} alt='XRP Junkies' /></Link>
      </figure>
      <h4 className='grow text-center font-inter hidden lg:block text-xl xl:text-3_5xl'>Roadmap Team FAQ Whitepaper Community Store</h4>
      <div className='hidden sm:flex space-x-6 ml-auto lg:ml-6'>
        <div className='w-18 h-18 rounded-full bg-theme-red'></div>
        <div className='w-18 h-18 rounded-full bg-theme-red'></div>
        <div className='w-18 h-18 rounded-full bg-theme-red'></div>
        <div className='w-18 h-18 rounded-full bg-theme-red'></div>
      </div>
    </header>
  )
}

export default HeaderLanding