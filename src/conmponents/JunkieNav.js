import React from 'react'
import Button from './Button'

const JunkieNav = ({items}) => {
  return (
    <div className="relative z-[2] flex items-center justify-between shadow-inset-active bg-avatar-black py-7 px-4 md:px-8 xl:px-14 2xl:px-25 rounded-50">
        {items.map((item, index) => <Button key={index} classes="w-[250px] h-15 rounded-50 shadow-inset-active bg-avatar-black text-white" text={item.title} />)}
    </div>
  )
}

export default JunkieNav