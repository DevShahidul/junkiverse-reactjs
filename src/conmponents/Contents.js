import React from 'react'

const Contents = ({ items, classes }) => {
  return (
    <div className="mt-10">
      {items.map((content, index) => <p key={content + '-' + index} className={classes}>{content}</p>)}
    </div>
  )
}

export default Contents