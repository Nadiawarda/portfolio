import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <section className="text-gray-600 body-font w-full  md:h-[500px]">
      <h2 className="mt-12 text-center text-3xl md:text-4xl font-bold underline text-cyan-600">
        About Me
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row px-5 py-12 md:py-24 items-center justify-center">
        <Image
          className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mb-6 md:mb-0 object-cover object-center rounded-full"
          alt="hero"
          src="/img/about-image.png"
          width={300}
          height={300}
        />
        <div className="text-center md:ml-10 lg:ml-16 w-full md:w-1/2">
          <h1 className="title-font text-2xl md:text-3xl lg:text-4xl mb-4 font-medium text-cyan-600 hover:text-white">
            Introduction to Myself
          </h1>
          <p className="mb-8 leading-relaxed text-cyan-200 text-sm md:text-base lg:text-lg">
            I am a student at GIAIC pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse.
            Passionate about technology and constantly learning new skills to stay up to date with the latest innovations.
          </p>
          <div className="flex justify-center space-x-4 md:space-x-6">
            <button className="text-blue-400 hover:text-pink-200">
              <FaLinkedin className="text-2xl md:text-3xl" />
            </button>
            <button className="text-blue-400 hover:text-pink-200">
              <FaGithub className="text-2xl md:text-3xl" />
            </button>
            <button className="text-blue-400 hover:text-pink-200">
              <FaTwitter className="text-2xl md:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
