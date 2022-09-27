import React from 'react';
import dabbingJunkie from '../assets/images/DabbingJunkie.png';
import halfMutant from '../assets/images/HalfMutant.png';
import paperTwo from '../assets/images/PaperTwo.png';

const ChooseJunkie = () => {
    return (
        <div className='bg-chose-junkies-section-pattern relative text-white pt-10 pb-30 lg:pb-64 before:content-[""] before:absolute before:left-0 before:top-0 before:bg-gradient-black-63 before:w-full before:h-311 before:z-[1] after:content-[""] after:absolute after:left-0 after:bottom-0 after:bg-gradient-black-63 after:w-full after:h-311 after:rotate-180 after:z-[1]'>
            <h2 className='text-center relative z-[2]'>Choose your Junkie</h2>
            <div className='relative z-[2] space-y-8 md:space-y-0 md:space-x-[35px] mt-20 flex flex-col md:flex-row'>
                <div className='group md:w-1/3 flex relative items-center justify-center border border-[#101010]'>
                    <img src={dabbingJunkie} alt='Dabbing junkie' className='transition-opacity opacity-50 mix-blend-overlay group-hover:mix-blend-normal group-hover:opacity-100 duration-500' />
                    <div className='transition-opacity absolute right-0 bottom-[-50px] flex items-center justify-center w-[37%] opacity-100 group-hover:opacity-50 duration-500'>
                        <img src={paperTwo} alt='Paper two' />
                        <img src={halfMutant} alt='Half Mutant' className='absolute mix-blend-luminosity w-3/5' />
                    </div>
                </div>
                <div className='group md:w-1/3 flex relative items-center justify-center border border-[#101010]'>
                    <img src={dabbingJunkie} alt='Dabbing junkie' className='transition-opacity opacity-50 mix-blend-overlay group-hover:mix-blend-normal group-hover:opacity-100 duration-500' />
                    <div className='transition-opacity absolute right-0 bottom-[-50px] flex items-center justify-center w-[37%] opacity-100 group-hover:opacity-50 duration-500'>
                        <img src={paperTwo} alt='Paper two' />
                        <img src={halfMutant} alt='Half Mutant' className='absolute mix-blend-luminosity w-3/5' />
                    </div>
                </div>
                <div className='group md:w-1/3 flex relative items-center justify-center border border-[#101010]'>
                    <img src={dabbingJunkie} alt='Dabbing junkie' className='transition-opacity opacity-50 mix-blend-overlay group-hover:mix-blend-normal group-hover:opacity-100 duration-500' />
                    <div className='transition-opacity absolute right-0 bottom-[-50px] flex items-center justify-center w-[37%] opacity-100 group-hover:opacity-50 duration-500'>
                        <img src={paperTwo} alt='Paper two' />
                        <img src={halfMutant} alt='Half Mutant' className='absolute mix-blend-luminosity w-3/5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseJunkie