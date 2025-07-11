import React from 'react'
import heroimage from '../assets/3.jpg';
import {TypeAnimation} from "react-type-animation";
import resume from '../assets/Resume.pdf'


const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[70vh] max-w-[1200px] mx-auto  pr-0 bg-black">
        
        <div className="col-span-1 my-auto mx-auto">
            <div className="w-[400px] h-[400px] lg:w-[400px] sm:w-[270px] overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={heroimage} alt="hero image" className="w-full h-full rounded-full object-cover object-center border-2 border-white/20 hover:border-orange-500/30 transition-all duration-300 "/>
            </div>
        </div>

        <div className="col-span-2 px-5 my-auto">
            <h1 className="text-white text-xl sm:text-5xl lg:text-6xl font-extrabold">
                <span>
                    I'm a
                </span><br/>
                <div className="inline-block">
                <TypeAnimation className="animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block"
                sequence={[
                    "Web Developer",
                    2000,
                    " ",
                    500,
                    "Web Developer",
                    2000,
                    " ",
                    500,
                    "Web Developer",
                    2000,
                    " ",
                    500,
                ]}
                wrapper="span"
                speed={300}
                deleteSpeed={150}
                repeat={Infinity}
                />
                </div>
            </h1>
            <p className="text-white sm:text-lg my-6 lg:text-xl">
                Hello! My name is Daisy Chemtai. I'm a software engineer.
            </p>
            <div className="my-8">
                <a href={resume} download className="px-6 py-3 w-full rounded-xl bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white">
                    Download my CV
                </a>
                {/* <a href="/" className="px-6 py-3 w-full rounded-xl mr-4
                border border-gray-400 hover:bg-gradient-to-br from-orange-500 to bg-pink-500
                text-white hover:border-none">
                    Contact
                </a> */}
            </div>
        </div>
    </div>
  )
}

export default Hero
