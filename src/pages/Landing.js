import React from 'react'
import HeaderLanding from '../conmponents/HeaderLanding'
import { PhasesItems } from '../data/RoadMapContents'
import BlankSection from '../Layouts/BlankSection'
import ChooseJunkie from '../Layouts/ChooseJunkie'
import HeroSection from '../Layouts/HeroSection'
import ItemsSection from '../Layouts/ItemsSection'
import RoadmapSection from '../Layouts/RoadmapSection'
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
        <RoadmapSection phasesItems={PhasesItems} />
    </div>
  )
}

export default Landing