"use client"
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className="text-gray-600 body-font w-full">
      <h2 className="mt-12 text-center text-3xl md:text-4xl font-bold underline text-cyan-600">My Projects</h2>
      <div className="container px-5 py-12 md:py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col md:flex-row w-full mb-10 md:mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-500 md:w-1/3 mb-4 md:mb-0">
            Here are some of my projects.
          </h1>
          <p className="text-base md:text-lg lg:text-xl lg:pl-6 md:w-2/3 mx-auto leading-relaxed text-cyan-200">
            These projects showcase a variety of applications and design skills in Next.js. They include API integrations for a weather app, state management for a to-do list, dynamic layouts for burger and ice cream sites, and e-commerce functionality.
          </p>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-cyan-300 hover:border-2"
                src="/img/clock.png"
                width={300}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-cyan-300 hover:border-2"
                src="/img/apple.png"
                width={300}
                height={200}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-blue-300 hover:border-2"
                src="/img/burger.png"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-blue-300 hover:border-2"
                src="/img/icecream.png"
                width={300}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-cyan-300 hover:border-2"
                src="/img/project.png"
                width={300}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-cyan-300 hover:border-2"
                src="/img/project1.png"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
