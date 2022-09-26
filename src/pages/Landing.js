import React from 'react'
import { HeaderLanding } from '../conmponents'
import { PhasesItems } from '../data/RoadMapContents'
import { BlankSection, ChooseJunkie, HeroSection, ItemsSection, PaperSection, RoadmapSection, WhoJunkiesSection } from '../Layouts'

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
        <PaperSection />
    </div>
  )
}

export default Landing