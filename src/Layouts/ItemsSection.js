import React, { useState } from 'react';
import rectangleBg from '../assets/images/Rectangle.jpg';

const ItemsSection = ({ items }) => {
    const [itemIndex, setItemIndex] = useState();
    const [isBlur, setisBlur] = useState(false);
    const [bg, setbg] = useState(rectangleBg);
    const handleMouseEnter = (e, index, bgHovered) => {
        setisBlur(true);
        setItemIndex(index);
        setbg(bgHovered);
        console.log(bgHovered);
    }
    const handleMouseLeave = () => {
        setisBlur(false);
        setbg(rectangleBg);
    }
    return (
        <div className='relative'>
            <div className='peer relative pt-52 before:contents-[""] before:absolute before:left-0 before:top-0 before:bg-design-purple before:bg-gradient-purple-75 before:w-full before:bottom-32 before:z-[1]'>
                <div className='container px-4 mx-auto relative z-10 -mb-32 -mt-20 space-y-20 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-between'>
                    {items.map((item, index) => (
                        <div key={item.title + ' - ' + index} className={`relative transition-all peer ${index !== itemIndex && isBlur ? 'blur-xs scale-90' : ''} hover:scale-121 bg-gradient-gray-2 bg-neutral-250 p-6 flex items-center justify-center text-white`} onMouseEnter={(e) => handleMouseEnter(e, index, item.bgHovered)} onMouseLeave={() => handleMouseLeave()}>
                            <h4 className='absolute left-2/4 -translate-x-1/2 bottom-full -mb-3 drop-shadow shadow-text md:text-xl lg:text-2xl 2xl:text-3_5xl'>{item.title}</h4>
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
            <img src={bg} alt='Section bg' className='w-full' />
        </div>
    )
}

export default ItemsSection