import React from 'react';
import Button from './Button';

const JunkieNav = ({items}) => {
  return (
    <div className="relative z-[2] shadow-inset-active bg-avatar-black rounded-50 px-4 md:px-8">
        <div className="overflow-auto rounded-50">
            <div className="flex items-center justify-between min-w-[1340px] md:min-w-[1440px] 2xl:min-w-[1540px] py-4 lg:py-7 px-2 md:px-4 lg:px-8 xl:px-10 2xl:px-17">
                {items.map((item, index) => <Button key={index} classes="w-[250px] h-15 rounded-50 shadow-inset-active bg-avatar-black text-white" text={item.title} />)}
            </div>
        </div>
    </div>
  )
}

export default JunkieNav;