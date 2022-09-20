import React from 'react';

const Button = (props) => {
  const {classes, link, text} = props;
  return (
    <>
    {link ? <a href={link} className={`bg-neutral-250 text-3_5xl text-black inline-flex items-center py-1.5 px-5.5 ${classes}`}>{text}</a> : <button className={`bg-neutral-250 text-3_5xl text-black inline-flex items-center py-1.5 px-5.5 ${classes}`} >{text}</button>}
    </>
  )
} 

export default Button