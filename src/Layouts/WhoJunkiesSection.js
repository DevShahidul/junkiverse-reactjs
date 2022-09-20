import React from 'react';
import whoJunkiesFigure from '../assets/images/who-are-junkies-figure.jpg';
import Button from '../conmponents/Button';

const WhoJunkiesSection = () => {
    // const handleBtnClick = (e) => {
    //     e.preventDefault();
    //     console.log("I'm clicked");
    // }
  return (
    <div className="bg-who-junkies-section-pattern text-white relative pt-25 pb-36.5 before:content-[''] before:absolute before:left-0 before:top-0 before:bg-gradient-black-63 before:w-full before:h-311 before:z-[1] after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-black-63 after:w-full after:h-311 after:rotate-180 after:z-[1]">
        <div className='container flex items-center mx-auto space-x-56 z-[2] relative'>
            <div className='space-y-24 text-center px-7'>
                <h2>Who are the Junkies?</h2>
                <p className='text-2xl pb-16'>10,000 Junkies. Dwellers of the Undercity. Scrap hunters, gathers fishers botanists fighters engineers bosses builders scapers big fishers small fishes</p>
                <Button link="#" classes='justify-center' text="Become a Junkie"/>
            </div>
            <div className='flex justify-center items-center'>
                <img src={whoJunkiesFigure} alt='Who are the Junkies?' className='w-full' />
            </div>
        </div>
    </div>
  )
}

export default WhoJunkiesSection