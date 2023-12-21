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
                              className="object-contain h-20 mx-auto" 
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
              <div className="py-8 pb-5 px-4 mx-auto max-w-screen-md">
                  <p className="mb-8 text-center text-text text-3xl">If you want to get in touch feel free to reach out to by contacting me on any of my socials!!</p>
                  <div className="flex flex-row">

                    <div className="flex flex-col text-center items-center">
                      <svg width="150px" height="150px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="#204969"></path> </g></svg>
                      <p className="text-text font-bold text-3xl pb-3">Email</p>
                      <p className="text-text font-bold">Nicolas.Power@optusnet.com.au</p>
                    </div>
                    
                    <div className="flex flex-col text-center items-center">
                      <svg width="150px" height="150px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#204969"></path> </g></svg>
                      <p className="text-text font-bold text-3xl pb-3">Phone Number</p>
                      <p className="text-text font-bold">+61 0423 697 664</p>
                    </div>   
                    
                    <div className="flex flex-col text-center items-center">
                      <svg width="150px" height="150px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#204969"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#204969"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#204969"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#204969"></path> </g></svg>
                      <p className="text-text font-bold text-3xl pb-3">LinkedIn</p>
                      <a className="text-text font-bold" href="https://www.linkedin.com/in/nicolas-power-31b217220" target="_blank" rel="noopener noreferrer">Come Connect with here</a>
                    </div> 
                  </div>
              </div>
            </section>

            
          </Element>

        </div>
      </div>
    </main>
  );
};

export default Home;
