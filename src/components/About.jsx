import React from 'react'
import aboutImg from '../assets/1.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
      <div className="mt-4 md:mt-0 text-left flex">
        <div className="my-auto mx-6">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi, I’m Daisy, a passionate full-stack web developer with a strong foundation in HTML, CSS, PHP, among others. I specialize in back-end development.
          I'm currently expanding my skill set by learning React.js, Django and Tailwind CSS to create visually appealing, responsive websites.
          <br></br>
          Beyond coding, I enjoy drawing and exploring new recipes in my free time. Food is a passion of mine, and I 
          love reviewing different types of cuisine. To maintain a healthy work-life balance, I stay active by working out regularly, which helps me stay energized and focused.
          </p>
        </div>
      </div>
      <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={300} height={300}/>
    </div>
    </div>
  )
}

export default About
