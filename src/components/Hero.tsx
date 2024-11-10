import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto sm:h-[700px] items-center">
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start lg:ml-20  lg:mt-0 lg:px-4">
        <Image
          src="/img/hero-image.png"
          alt="Hero"
          width={300}
          height={300}
          className="rounded-full bg-pink-100 hover:bg-pink-200 transition-all duration-300 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]"
          priority // ensures better loading for the main image
        />
      </div>
      
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 px-6 lg:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-600 leading-snug">
          Hello <br /> I am <br /> Nadia Ikram
        </h2>
        
        {/* Button Section */}
        <div className="flex gap-4 sm:gap-6 mt-6 lg:mt-10">
          <Link href="/about">
            <button className="text-md sm:text-lg lg:text-xl px-4 py-2 border-2 border-cyan-600 rounded-xl bg-black-100 hover:bg-pink-300 transition-all duration-300">
              About Me
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-md sm:text-lg lg:text-xl px-4 py-2 border-2 border-cyan-600 rounded-xl bg-black-100 hover:bg-pink-300 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
