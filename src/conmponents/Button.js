import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const {classes, link, text} = props;
  return (
    <>
      {link ? <Link to={link} className={classes}>{text}</Link> : <button className={classes} >{text}</button>}
    </>
  )
} 

export default Button;