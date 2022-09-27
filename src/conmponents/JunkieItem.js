import React from 'react';

const JunkieItem = ({classes, item}) => {
  return (
    <div className={`relative pb-7 before:content-[''] before:left-1.5 before:top-1.5 before:right-1.5 before:bottom-[22px] before:absolute before:bg-[rgba(38, 41, 44, 0.01)] before:rounded-50 before:shadow-inset-7 ${classes}`}>
        <img src={item.avatar} alt={item.title} className="rounded-50 w-full" />
        <span className="w-[222px] h-14 absolute left-1/2 -translate-x-1/2 bottom-0 z-10 rounded-50 shadow-inset-active bg-avatar-black flex items-center justify-center text-white">{item.title}</span>
    </div>
  )
}

export default JunkieItem;