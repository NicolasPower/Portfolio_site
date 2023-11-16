/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import Image from "next"

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about'); // Default to 'about' section

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className="flex flex-col justify-center items-center w-4/5 mx-auto mt-20">

      {/* Header */}
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hi, I&apos;m Nicolas Power</h1>
      </div>

      {/* Topic Buttons */}
      <div className="flex flex-row justify-center content-center items-center w-full mx-auto mt-20">
        <div className={`flex-initial text-center basis-1/4 cursor-pointer ${activeSection === 'about' ? 'font-bold' : ''}`} onClick={() => handleButtonClick('about')}>
          <p>About</p>
        </div>

        <div className={`flex-initial text-center basis-1/4 cursor-pointer ${activeSection === 'projects' ? 'font-bold' : ''}`} onClick={() => handleButtonClick('projects')}>
          <p>Projects</p>
        </div>

        <div className={`flex-initial text-center basis-1/4 cursor-pointer ${activeSection === 'skills' ? 'font-bold' : ''}`} onClick={() => handleButtonClick('skills')}>
          <p>Skills</p>
        </div>
      </div>

      {/* Content */}
      <div className='w-full'>
        {activeSection === 'about' && (
          <div>
            <p className='pt-2 text-center'>
              I am a proactive, engaging and motivated university student studying a Bachelor of Information Technology at
              Queensland University of Technology seeking to get some work experience while I study. Working in a wide array job
              has given me a strong and reliable work ethic. I am a great communicator who works incredibly well in a team setting
              and who is always eager to learn new skills.
            </p>
            <p className='pt-2 text-center'>
              Having worked in a variety of customer service and labour jobs has given me great insight into working as a team in a
              professional setting as well as how to take initiative when unexpected circumstances arise.
              With the goal to develop my professional skills I am looking for a place to expand my career skills and further grow
              my network. I look forward to working with you.
            </p>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className='flex flex-row pt-2'>
            <div className='p-2'>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src="/img/food-name.png" alt="" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Musical Foods</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This web application ustilises API's to find the origin of the users name and provide them with a geographically appropiate recipe and playlist.
                      </p>
                      <a href="https://github.com/NicolasPower/food-name.git" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Github
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </div>
            </div>

            <div className='p-2'>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src="/img/food-name.png" alt="" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Musical Foods</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This web application ustilises API's to find the origin of the users name and provide them with a geographically appropiate recipe and playlist.
                      </p>
                      <a href="https://github.com/NicolasPower/food-name.git" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Github
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </div>
            </div>

            <div className='p-2'>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src="/img/food-name.png" alt="" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Musical Foods</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This web application ustilises API's to find the origin of the users name and provide them with a geographically appropiate recipe and playlist.
                      </p>
                      <a href="https://github.com/NicolasPower/food-name.git" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Github
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </div>
            </div>

          </div>



        )}

        {activeSection === 'skills' && (
          <div className='flex flex-col w-3/5 mx-auto'>
            <div className='flex flex-wrap justify-center content-center items-center w-full mx-auto p-2'>
            
              <div className='flex-initial text-center w-20 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/python.png" alt=""/>
                <p>Python</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/c.png" alt=""/>
                <p className=''>C</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/c++.png" alt=""/>
                <p className=''>C++</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/javascript.png" alt=""/>
                <p className=''>Java Script</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/typescript.png" alt=""/>
                <p className=''>Type Script</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/react.png" alt=""/>
                <p>React</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/next.png" alt=""/>
                <p className=''>Next.js</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/flask.png" alt=""/>
                <p className=''>flask</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/node.png" alt=""/>
                <p className=''>Node</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/sql.svg" alt=""/>
                <p className=''>SQL</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/css.png" alt=""/>
                <p className=''>CSS</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/bootstrap.png" alt=""/>
                <p className=''>Boot Strap</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/tailwind.webp" alt=""/>
                <p className=''>Tailwind CSS</p>
              </div>

              <div className='flex-initial text-center w-24 h-25 m-3'>
                <img className='w-20 h-20 mx-auto' src="/img/docker.png" alt=""/>
                <p className=''>Docker</p>
              </div>

            </div>

          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
