import React from 'react'
import avatar from '../assets/images/profile-avatar.png'
import { Button } from '../conmponents'

const JunkieProfile = () => {
  return (
    <div className="space-y-10 pt-7">
        <div className="flex justify-center flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-14 px-6">
            <div className="w-full sm:w-auto space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-0 lg:space-y-12 flex flex-col sm:flex-row lg:flex-col">
                <Button classes="min-w-[250px] shadow-inset rounded-50 h-15" />
                <Button classes="min-w-[250px] shadow-inset rounded-50 h-15" />
            </div>
            <div className="flex items-center justify-center shadow-inset rounded-100 bg-avatar-black w-[250px] h-[250px]">
                <img src={avatar} alt="Profile avatar" />
            </div>
            <div className="w-full sm:w-auto space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-0 lg:space-y-12 flex flex-col sm:flex-row lg:flex-col">
                <Button classes="min-w-[250px] shadow-inset rounded-50 h-15" />
                <Button classes="min-w-[250px] shadow-inset rounded-50 h-15" />
            </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-14 px-6">
            <div className="w-full sm:w-auto space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-0 lg:space-y-12 flex flex-col sm:flex-row lg:flex-col">
                <Button classes="min-w-[353px] shadow-inset-3 rounded-25 h-15" />
            </div>
        </div>
    </div>
  )
}

export default JunkieProfile;