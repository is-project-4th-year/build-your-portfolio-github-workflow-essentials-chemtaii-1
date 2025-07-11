import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
      <div className="bg-black text-gray-400 h-[100px] flex items-center ">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent ml-4">CHEMTAI</h1>
        <ul className="hidden md:flex ml-auto mr-4">
          <li className="p-5"><a href="#about">About</a></li>
          <li className="p-5"><a href="#work">Work</a></li>
          <li className="p-5"><a href="#contact">Contact</a></li>
        </ul>
           <div onClick={handleNav} className="block md:hidden absolute right-4 top-4">
            {nav ? <AiOutlineClose size={20} className="text-white"/> : <AiOutlineMenu size = {20}/>}
            </div> 

        <div className={nav ? "z-10 fixed h-full  w-[60%] bg-[#202121] ease-in-out duration-500 top-0" 
          : "fixed left-[-100%]"} > 
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent ml-4">
  Meet Chemu :)
</h1>

        <ul className="p-8 text-2xl">
          <li className="p-2"><a href="#about">About</a></li>
          <li className="p-2"><a href="#work">Work</a></li>
          <li className="p-2"><a href="#experience">Experience</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
