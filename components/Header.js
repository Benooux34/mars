import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center text-white mx-[50px] md:mx-[200px] h-20">
        <div>
            <h1 className="text-xl tracking-widest font-semibold cursor-pointer">MARS</h1>
        </div>
        <div className="hidden lg:text-lg lg:space-x-[60px]">
            <span className="cursor-pointer hover:underline">Home</span>
            <span className="cursor-pointer hover:underline">Info</span>
            <span className="cursor-pointer hover:underline">About</span>
            <span className="cursor-pointer hover:underline">Project</span>
            <span className="cursor-pointer hover:underline">Launch Schedule</span>
            <span className="cursor-pointer hover:underline">Contact</span>
        </div>
    </div>
  )
}

export default Header