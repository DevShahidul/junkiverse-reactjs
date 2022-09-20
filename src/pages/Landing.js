import React from 'react'
import HeaderLanding from '../conmponents/HeaderLanding'
import ChooseJunkie from '../Layouts/ChooseJunkie'
import HeroSection from '../Layouts/HeroSection'
import WhoJunkiesSection from '../Layouts/WhoJunkiesSection'

const Landing = () => {
  return (
    <div>
        <HeaderLanding />
        <HeroSection />
        <WhoJunkiesSection />
        <ChooseJunkie />
    </div>
  )
}

export default Landing