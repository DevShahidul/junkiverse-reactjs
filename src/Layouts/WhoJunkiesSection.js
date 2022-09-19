import React from 'react';
import whoJunkiesFigure from '../assets/images/who-are-junkies-figure.jpg';
import Button from '../conmponents/Button';

const WhoJunkiesSection = () => {
    // const handleBtnClick = (e) => {
    //     e.preventDefault();
    //     console.log("I'm clicked");
    // }
  return (
    <div className="bg-who-junkies-section-pattern text-white relative pt-25 pb-36.5">
        <div className='absolute left-0 top-0 bg-gradient-black-63 w-full h-311'></div>
        <div className='container flex items-center mx-auto space-x-56 z-[1] relative'>
                <div className='space-y-24 text-center px-7'>
                    <h2>Who are the Junkies?</h2>
                    <p className='text-2xl pb-16'>10,000 Junkies. Dwellers of the Undercity. Scrap hunters, gathers fishers botanists fighters engineers bosses builders scapers big fishers small fishes</p>
                    <Button link="#" classes='justify-center' text="Become a Junkie"/>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={whoJunkiesFigure} alt='Who are the Junkies?' className='w-full' />
                </div>
        </div>
        <div className='absolute left-0 bottom-0 bg-gradient-black-63 w-full h-311 rotate-180'></div>
    </div>
  )
}

export default WhoJunkiesSection