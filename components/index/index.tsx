'use client'; 

import Skills from "../Skills/1st-Rows/Myskills";
import Pages from ".";
import AboutMe from "../AboutMe/AboutMe";



import { useLocation } from "react-router-dom";


import { useState ,useEffect } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaFacebookF, FaGoogle } from "react-icons/fa"; 
import "./index.css";








export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
    <div className=" min-h-screen text-white" id="home">
   
      <header className="relative z-50 pt-10 pb-0 ">
        <nav className="flex justify-end items-center  px-60 navbar">
          
           
          <button
            className="lg:hidden"
            onClick={toggleMenu}
          >
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>

         
          <ul className="hidden lg:flex space-x-8  text-xl text-white ">
            <li className="text-item">
              <Link href="#AboutMe">About Me</Link>
            </li>
            <li className="text-item">
              <Link href="#Skills">Skills</Link>
            </li>
  
          </ul>
        </nav>

       
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 right-0 mt-4  text-white p-4 rounded-lg shadow-lg">
            <ul>
              <li className="mb-2">
                <Link href="#aboutMe">About Me</Link>
              </li>
              <li className="mb-2">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="mb-2">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </header>


      <section className="min-h-screen px-8 lg:px-16 py-12 relative flex items-center justify-center">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
          <p className="text-xl max-w-lg mx-auto lg:mx-0 Text-area  slide ">
             Khomkit Manpasong
           </p>
            
            
            
            
            <h1 className="text-7xl font-bold text-white leading-tight ">  
            Frontend Developer
            </h1>
            




            <div className='text-layout gap-4  lg:mx-0'>  
            <div className="container mx-auto px-1 gap-8 Icon-area">
                    <div className="flex justify-start gap-8 ">
                  
                      <a
                        href="https://github.com/kobbmm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-purple-500"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
            
                      <a
                        href="mailto:your-email@gmail.com"
                        className="text-3xl hover:text-purple-500"
                        aria-label="Gmail"
                      >
                        <FaGoogle />
                      </a>
            
            
                      <a
                        href="https://web.facebook.com/khomkit.manpasong.2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-purple-500"
                        aria-label="Facebook"
                      >
                        <FaFacebookF />
                      </a>
                    </div>
                  </div>

            
        
            </div>  

                  
            
            <div className="grid grid-cols-2 gap-8 pt-8 mx-auto lg:mx-0 ">
              <div>
                <p className="text-white">
                  66022444 Software Engineering University of Phayao
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-lime-300/20 blur-3xl rounded-full"></div>
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto item">
             
              <Image
                src="/src/PFP.png"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>


    <AboutMe />
    

  


   


    </main>
  );
}





/*         <svg
            width="400"
            height="100"
            viewBox="0 0 400 100"
            data-aos=""  // แอนิเมชันเมื่อเลื่อนหน้า
          >
            <text
              x="0"
              y="50"
              className="svg-text"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              About Me
            </text>
          </svg>
          
          
          */
