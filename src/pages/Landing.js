import React from 'react'
import HeaderLanding from '../conmponents/HeaderLanding'
import BlankSection from '../Layouts/BlankSection'
import ChooseJunkie from '../Layouts/ChooseJunkie'
import HeroSection from '../Layouts/HeroSection'
import ItemsSection from '../Layouts/ItemsSection'
import WhoJunkiesSection from '../Layouts/WhoJunkiesSection'

const Landing = () => {
  return (
    <div>
        <HeaderLanding />
        <HeroSection />
        <WhoJunkiesSection />
        <ChooseJunkie />
        <BlankSection />
        <ItemsSection />
    </div>
  )
}

export default Landing