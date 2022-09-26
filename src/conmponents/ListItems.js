import React from 'react'

const ListItems = ({items, classes, ulClass}) => {
  return (
    <ul className={`${ulClass}`}>
        {items.map((item, index) => <li className={classes} key={`${item} - ${index}`}>{item}</li>)}
    </ul>
  )
}

export default ListItems