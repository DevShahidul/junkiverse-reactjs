import React from 'react';
import junkieAvatar1 from '../assets/images/junkie-avatar1.jpg';
import junkieAvatar2 from '../assets/images/junkie-avatar2.jpg';
import junkieAvatar3 from '../assets/images/junkie-avatar3.jpg';
import junkieAvatar4 from '../assets/images/junkie-avatar4.jpg';
import junkieAvatar5 from '../assets/images/junkie-avatar5.jpg';
import junkieAvatar6 from '../assets/images/junkie-avatar6.jpg';
import junkieAvatar7 from '../assets/images/junkie-avatar7.jpg';
import junkieAvatar8 from '../assets/images/junkie-avatar8.jpg';
import { HeaderJunkie } from '../conmponents';
import JunkieItem from '../conmponents/JunkieItem';
import JunkieNav from '../conmponents/JunkieNav';
import JunkieProfile from '../Layouts/JunkieProfile';

const navItems = [
  {
    title: "NFTs",
  },
  {
    title: "Projects",
  },
  {
    title: "Projects",
  },
  {
    title: "",
  },
  {
    title: "",
  },
]

const junkieItems = [
  {
    avatar: junkieAvatar1,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar2,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar3,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar4,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar5,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar6,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar7,
    title: 'Doodle #2343'
  },
  {
    avatar: junkieAvatar8,
    title: 'Doodle #2343'
  },
]

const Junkie = () => {
  return (
    <div className="bg-junkie-body">
      <HeaderJunkie />
      <JunkieProfile />
      <div className="mt-12 px-4 md:px-8 xl:px-14 2xl:px-24 pb-8 md:pb-14 xl:pb-30 2xl:pb-72">
        <JunkieNav items={navItems} />
        <div className="relative sm:mx-4 md:mx-8 xl:mx-14 2xl:mx-24 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 xl:gap-14 z-[1] mt-8 md:-mt-9 pt-16 pb-12 px-10 lg:px-20 rounded-50 shadow-inset-active bg-avatar-black">
          {junkieItems.map((item, index) => <JunkieItem key={item.title + index} item={item} /> )}
        </div>
      </div>
    </div>
  )
}

export default Junkie;