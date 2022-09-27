import React from 'react';
import Button from './Button';

const HeaderJunkie = () => {
  return (
    <div className="bg-junkie-black px-12 py-5 flex shadow-junkie-header">
        <Button classes="shadow-inset min-w-[250px] p-5 text-white text-xs rounded-14 ml-auto" text="Connect Wallet" />
    </div>
  )
}

export default HeaderJunkie;