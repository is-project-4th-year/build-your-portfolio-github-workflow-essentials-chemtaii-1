import React from 'react'
import html from '../assets/html.jpeg'
import php from '../assets/php.jpeg'
import kotlin from '../assets/kotlin.jpeg'
import python from '../assets/python.jpeg'
import mysql from '../assets/mysql.jpeg'
import bootstrap from '../assets/bootstrap.jpeg'
import java from '../assets/java.jpeg'
import javascript from '../assets/javascript.jpeg'
import css from '../assets/css.jpeg'

const Skills = () => {
  return (
    <div className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
                    place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
            SKILLS
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={html} width={100} height={100}/>
            <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={css} width={100} height={100}/>
            <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={php} width={100} height={100}/>
            <p className="mt-2">PHP</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={kotlin} width={100} height={100}/>
            <p className="mt-2">Kotlin</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={python} width={100} height={100}/>
            <p className="mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={java} width={100} height={100}/>
            <p className="mt-2">Java</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={javascript} width={100} height={100}/>
            <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={bootstrap} width={100} height={100}/>
            <p className="mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={mysql} width={100} height={100}/>
            <p className="mt-2">MySQL</p>
        </div>
        
    </div>
  )
}

export default Skills
