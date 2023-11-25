/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Link, Element } from "react-scroll";



const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about"); // Default to 'about' section

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className=" bg-mainbg py-20">
      {/* Header */}
      <div className="h-screen flex flex-col bg-mainbg">
        <div className="h-1/4"></div>
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-text md:text-5xl lg:text-6xl">
            Hi, I&apos;m Nicolas Power
          </h1>
          <p className="text-xl text-text md:text-xl lg:text-xl mt-10">
            A student studying Computer Science with a focus on front-end Web
            Development
          </p>

          <div className="flex flex-row justify-around items-center mx-auto mt-20 w-3/4">
            <div>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50} // Adjust the offset based on your layout
                duration={500}
              >
                <div
                  className={`flex-initial text-center basis-1/4 cursor-pointer ${
                    activeSection === "about" ? "font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick("about")}
                >
                  <p className="text-text text-xl">About</p>
                </div>
              </Link>
            </div>


            <div>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-50} // Adjust the offset based on your layout
                duration={500}
              >
                <div
                  className={`flex-initial text-center basis-1/4 cursor-pointer ${
                    activeSection === "about" ? "font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick("about")}
                >
                  <p className="text-text text-xl">Projects</p>
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50} // Adjust the offset based on your layout
                duration={500}
              >
                <div
                  className={`flex-initial text-center basis-1/4 cursor-pointer ${
                    activeSection === "about" ? "font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick("about")}
                >
                  <p className="text-text text-xl">Contact</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center w-4/5 mx-auto ">
        {/* Content */}
        <div className="w-full">
          {/* about and skills */}
          <Element name="about" className="element">
            <div className="h-screen">
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  {/* Header */}
                  <div className="">
                    <h1 className="mb-4 font-extrabold leading-none tracking-tight text-text text-5xl">
                      About me
                    </h1>
                  </div>
                  
                  {/* Description */}      
                  <div className="flex flex-col mt-10 text-text">
                      <p className="mb-2 text-lg">
                      I&apos;m a student studying at the Queensland University 
                      of Technology  majoring in <span className="font-bold">Computer Science</span>. I have a keen 
                      interest in <span className="font-bold">Front-end Web Development</span> but have skills in other 
                      fields.
                      </p>

                      <p className="mb-2 text-lg">
                      I am actively seeking employment opportunities that align with my 
                      <span className="font-bold"> expertise</span> and offer a platform for continuous learning and 
                      <span className="font-bold"> professional growth</span> 
                      . If you have a position that matches my skillset and experience do
                      not hesitate to contact me.
                      </p>
                  </div>

                  {/* Skills */}
                  <h1 className="my-4 font-extrabold leading-none tracking-tight text-text text-5xl">Skills</h1>
                  <div className="flex flex-col mx-auto text-text font-bold">
                        <div className="flex flex-wrap justify-center content-center items-center w-full mx-auto">
                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/python.png"
                              alt=""
                            />
                            <p>Python</p>
                          </div>

                      
                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            <img 
                              className="object-contain w-20 mx-auto" 
                              src="/img/c.png" 
                              alt="" 
                            />
                            <p className="">C</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/c++.png"
                              alt=""
                            />
                            <p className="">C++</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/javascript.png"
                              alt=""
                            />
                            <p className="">Java Script</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/typescript.png"
                              alt=""
                            />
                            <p className="">Type Script</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/react.png"
                              alt=""
                            />
                            <p>React</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/next.png"
                              alt=""
                            />
                            <p className="">Next.js</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/flask.png"
                              alt=""
                            />
                            <p className="">flask</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/node.png"
                              alt=""
                            />
                            <p className="">Node</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/sql.svg"
                              alt=""
                            />
                            <p className="">SQL</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/css.png"
                              alt=""
                            />
                            <p className="">CSS</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/html.png"
                              alt=""
                            />
                            <p className="">HTML</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/bootstrap.png"
                              alt=""
                            />
                            <p className="">Boot Strap</p>
                          </div>

                          <div className="flex-initial text-center w-16 h-8 mx-5 mb-28">
                            
                            <img
                              className="object-contain h-20 mx-auto"
                              src="/img/tailwind.webp"
                              alt=""
                            />
                            <p className="">Tailwind CSS</p>
                          </div>

                        </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="w-1/2  text-center">
                  <img className="object-contain h-2/3 rounded-full mx-auto" src="/img/pfp.jpg" alt="Profile Picture"></img>
                </div>
                


              </div>
            </div>
          </Element>

          {/* Projects */}
          <Element name="Projects" className="element">

            <div>
              <h1 className="mb-4 font-extrabold text-6xl text-text" >
                Projects
              </h1>
            </div>
            
            <div className="text-text flex mt-20">
              <div className="w-1/3">
                <img className="rounded-t-lg object-contain w-full" src="/img/musicalFoods.png" alt="" />
              </div>
              <div className="w-2/3 flex flex-col ml-12">
                <h5 className="mb-2 text-3xl font-bold">
                  Musical Foods
                </h5>
                <p className="mb-3 font-normal ">
                  This web application ustilises API&apos;s to find the origin of the
                  users name and provide them with a geographically appropiate
                  recipe and playlist. This application was a trial run for a 
                  stateless cloud applicatio, once the trial was done the cloud computing
                  was removed and is now a static webpage
                </p>
                <a
                      href="https://github.com/NicolasPower/food-name.git"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button rounded-lg hover:bg-buttonHL focus:ring-4 focus:outline-none focus:ring-blue-300 w-1/6"
                    >
                      Github
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
              </div>
            </div>

            <div className="text-text flex mt-20">
              <div className="w-1/3">
                <img className="rounded-t-lg object-contain w-full" src="/img/portfolioSite.png" alt="" />
              </div>
              <div className="w-2/3 flex flex-col ml-12">
                <h5 className="mb-2 text-3xl font-bold">
                  Portfolio Site
                </h5>
                <p className="mb-3 font-normal text-text">
                  This very site your on!!! I made this to have a place to display my projects
                  in a nice digestible fashion. This portfolio site serves as a virtual canvas 
                  where I present my diverse range of skills and my completed projects.
                </p>
                <a
                      href="https://github.com/NicolasPower/food-name.git"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#CE5A67] rounded-lg hover:bg-[#ff7988] focus:ring-4 focus:outline-none focus:ring-blue-300 w-1/6"
                    >
                      Github
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
              </div>
            </div>

            <div className="text-text flex mt-20">
              <div className="w-1/3">
                <img className="rounded-t-lg object-contain w-full" src="/img/musicalFoods.png" alt="" />
              </div>
              <div className="w-2/3 flex flex-col ml-12">
                <h5 className="mb-2 text-3xl font-bold">
                  Musical Foods
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  This web application ustilises API&apos;s to find the origin of the
                  users name and provide them with a geographically appropiate
                  recipe and playlist. This application was a trial run for a 
                  stateless cloud applicatio, once the trial was done the cloud computing
                  was removed and is now a static webpage
                </p>
                <a
                      href="https://github.com/NicolasPower/food-name.git"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#CE5A67] rounded-lg hover:bg-[#ff7988] focus:ring-4 focus:outline-none focus:ring-blue-300 w-1/6"
                    >
                      Github
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
              </div>
            </div>


          </Element>

          {/* Contact Me */}
          <Element name="Contact" className="element">
            <div className="mt-20 justify-center items-center content-center">
              <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-text text-center">
                Contact Me
              </h1>
            </div>

            <section className="">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <p className="mb-8 text-center text-text">Feel free to contact me through any of my listed socials or by filling out the form below and I will get back to you as soon as possible.</p>
                  <form action="#" className="space-y-8 text-text">
                      <div>
                          <label className="block mb-2 text-sm font-medium">Your email</label>
                          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                      </div>
                      <div>
                          <label className="block mb-2 text-sm font-medium ">Subject</label>
                          <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="I Have a Job for you" required></input>
                      </div>
                      <div className="sm:col-span-2">
                          <label className="block mb-2 text-sm font-medium ">Your message</label>
                          <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                      </div>
                      <button type="submit" className=" bg-button text-white py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                  </form>
              </div>
            </section>

            
          </Element>

        </div>
      </div>
    </main>
  );
};

export default Home;
