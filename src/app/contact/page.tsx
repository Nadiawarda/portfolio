import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 sm:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 underline-offset-8 underline text-cyan-600">Contact Us</h1>
          <p className="text-cyan-200">Drop me a line or send me a message by submitting the form.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-cyan-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-cyan-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-cyan-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 sm:h-40 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 sm:px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            </div>
            <div className="p-2 w-full pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 text-center">
              <a className="text-cyan-500 block mb-4">nadiawarda05@gmail.com</a>
              <div className="flex justify-center space-x-4">
                <button className="text-blue-400 hover:text-pink-200 text-3xl">
                  <FaLinkedin />
                </button>
                <button className="text-blue-400 hover:text-pink-200 text-3xl">
                  <FaGithub />
                </button>
                <button className="text-blue-400 hover:text-pink-200 text-3xl">
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
