import React from 'react';
import { HeaderJunkie } from '../conmponents';
import JunkieProfile from '../Layouts/JunkieProfile';

const Junkie = () => {
  return (
    <div className="bg-junkie-body">
      <HeaderJunkie />
      <JunkieProfile />
    </div>
  )
}

export default Junkie;