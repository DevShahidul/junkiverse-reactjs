import React from 'react';

const Button = (props) => {
  const {classes, link, text} = props;
  return (
    <>
    {link ? <a href={link} className={classes}>{text}</a> : <button className={classes} >{text}</button>}
    </>
  )
} 

export default Button