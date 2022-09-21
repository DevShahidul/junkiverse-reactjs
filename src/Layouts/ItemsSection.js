import React from 'react';
import item1 from '../assets/images/item1.png';
import item2 from '../assets/images/item2.png';
import item3 from '../assets/images/item3.png';
import item4 from '../assets/images/item4.png';
import rectangleBg from '../assets/images/Rectangle.jpg';
import rectangleHoveredBg from '../assets/images/RectangleHovered.jpg';


const ItemsSection = () => {
  return (
    <div className='relative'>
        <div className='peer relative pt-52 before:contents-[""] before:absolute before:left-0 before:top-0 before:bg-design-purple before:bg-gradient-purple-75 before:w-full before:bottom-32 before:z-[1]'>
            <div className='container px-4 mx-auto relative z-10 -mb-32 -mt-20 space-y-20 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-between'>
                <div className='relative transition-all peer peer-hover:scale-90 peer-hover:blur-xs hover:scale-121 bg-gradient-gray-2 bg-neutral-250 p-6 flex items-center justify-center text-white'>
                    <h4 className='absolute left-2/4 -translate-x-1/2 bottom-full -mb-3 drop-shadow shadow-text'>Rusty’s Bar</h4>
                    <img src={item1} alt='Item' />
                </div>
                <div className='relative transition-all peer peer-hover:scale-90 peer-hover:blur-xs hover:scale-121  bg-gradient-gray-2 bg-neutral-250 p-6 flex items-center justify-center text-white'>
                    <h2 className='absolute left-2/4 -translate-x-1/2 bottom-full -mb-6 drop-shadow shadow-text'>PvP</h2>
                    <img src={item2} alt='Item' />
                </div>
                <div className='relative transition-all peer peer-hover:scale-90 peer-hover:blur-xs hover:scale-121  bg-gradient-gray-2 bg-neutral-250 p-6 flex items-center justify-center text-white'>
                    <h2 className='absolute left-2/4 -translate-x-1/2 bottom-full -mb-6 drop-shadow shadow-text'>PvP</h2>
                    <img src={item3} alt='Item' />
                </div>
                <div className='relative transition-all peer peer-hover:scale-90 peer-hover:blur-xs hover:scale-121  bg-gradient-gray-2 bg-neutral-250 p-6 flex items-center justify-center text-white'>
                    <h2 className='absolute left-2/4 -translate-x-1/2 bottom-full -mb-6 drop-shadow shadow-text'>PvP</h2>
                    <img src={item4} alt='Item' />
                </div>
            </div>
        </div>
        <img src={rectangleBg} alt='Section bg' className='w-full peer-hover:hidden' />
        <img src={rectangleHoveredBg} alt='Section bg' className='w-full hidden peer-hover:block' />
    </div>
  )
}

export default ItemsSection