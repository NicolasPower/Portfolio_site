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
    <main className=" bg-mainbg">
      {/* Header */}
      <div className="h-screen flex flex-col bg-mainbg">
        <div className="h-1/4"></div>
        <div className="flex flex-col items-center mt-20">
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
      
      <div className="flex flex-col justify-center items-center w-4/5 mx-auto">
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
              <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                Contact Me
              </h1>
            </div>

            <div className="mb-52 mt-10 justify-center items-center content-center">
              <div className="container px-6 p-5 w-2/5 mx-auto bg-slate-700">
                <div className=" flex justify-around">
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                      />
                    </svg>
                    <h6 className="font-medium">Australia</h6>
                  </div>

                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <h6 className="font-medium">Brisbane</h6>
                  </div>

                  <div className="mx-auto mb-6 text-center md:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <h6 className="font-medium">+61 0423 697 664</h6>
                  </div>
                </div>
                <div className="mx-auto max-w-[700px]">
                  <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-slate-900 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput90"
                        placeholder="Name"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        htmlFor="exampleInput90"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-slate-900 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput91"
                        placeholder="Email address"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        htmlFor="exampleInput91"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border-0 bg-slate-900 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        placeholder="Your message"
                      ></textarea>
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Message
                      </label>
                    </div>
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block 2/5 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0 bg-slate-900"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Element>

        </div>
      </div>
    </main>
  );
};

export default Home;
