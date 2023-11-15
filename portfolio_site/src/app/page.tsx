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
      <div>
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

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/food-name.png" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Musical Foods</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    For an Assignment we were tasked to develop a stateless web application. I create an application that took the user's First and last name and provide them with a food and playlist from the names origin.
                  </p>
              </div>
          </a>

        )}

        {activeSection === 'skills' && (
          <div>
            <p>Skills section</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
