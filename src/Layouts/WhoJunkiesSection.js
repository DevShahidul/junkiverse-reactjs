import React from 'react';
import whoJunkiesFigure from '../assets/images/who-are-junkies-figure.jpg';
import Button from '../conmponents/Button';

const WhoJunkiesSection = () => {
  return (
    <div className="bg-who-junkies-section-pattern text-white relative pt-14 pb-14 md:pt-25 md:pb-36.5 before:content-[''] before:absolute before:left-0 before:top-0 before:bg-gradient-black-63 before:w-full before:h-311 before:z-[1] after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-black-63 after:w-full after:h-311 after:rotate-180 after:z-[1]">
      <div className='container flex flex-col-reverse md:flex-row items-center mx-auto md:space-x-6 lg:space-x-18 2xl:space-x-56 z-[2] relative'>
        <div className='space-y-8 lg:space-y-24 text-center px-7 mt-8 md:mt-0'>
          <h2>Who are the Junkies?</h2>
          <p className='text-2xl md:pb-4 lg:pb-16'>10,000 Junkies. Dwellers of the Undercity. Scrap hunters, gathers fishers botanists fighters engineers bosses builders scapers big fishers small fishes</p>
          <Button link="/Junkie" classes='bg-neutral-250 text-3_5xl text-black inline-flex items-center justify-center py-1.5 px-5.5' text="Become a Junkie" />
        </div>
        <div className='flex justify-center items-center max-w-[70%] md:max-w-full'>
          <img src={whoJunkiesFigure} alt='Who are the Junkies?' className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default WhoJunkiesSection