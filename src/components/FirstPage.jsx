import "../App.css";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Typewriter from 'typewriter-effect';



function Intro() {


  return (
    <div id="about" className="pt-6 bg-yellow-500 dark:text-slate-300 dark:bg-[#111827]">
      <div className="md:flex  ">
        <div className="left flex-col pl-[6%] w-[60%]">
          <div className=" mb-6 flex-col text-2xl font-alb space-y-3 pt-[15%]">
         
            <p className=" relative bottom-6 left-1 font-semibold  tracking-wider text-red-600 dark:text-yellow-500 ">Namaskar,It's</p>
            <p id="name"> <Typewriter options={{
            strings:['kumar shivam'],
            autoStart:true,
            loop:true,
            wrapperClassName:"font-title text-[8rem] bg-gradient-to-r text-transparent bg-clip-text dark:from-white dark:via-slate-300 dark:to-slate-800 from-black via-[#111827]  to-yellow-600 ",
            pauseFor:1000,
            delay:150,
            deleteSpeed:50,
            cursorClassName:"text-[6rem] relative bottom-5 font-light"
          }}  / ></p>
          </div>
          <div className=" flex-col text-lg mt-16 font-normal font-alb  mb-20 ">
            <p>I am a CSE Undergraduate at BIT,Mesra</p>
            <p>I am a web developer and a competitive programmer </p>


          </div>
          <button className=" hover:scale-105 rounded-2xl shadow-md bg-purple-500 hover:bg-purple-600 cursor-pointer text-white px-8 py-5 mt-10 ease-in-out duration-200">Let's Talk  <SendIcon className=" -rotate-[20deg] ml-2 mb-2" /></button>
          <button className=" ml-10 hover:scale-105 rounded-2xl shadow-md hover:bg-[#111827] dark:hover:bg-slate-100 dark:bg-white bg-[#111827]/90 text-white cursor-pointer dark:text-black px-8 py-5 mt-10 ease-in-out duration-200">Portfolio <CallMadeIcon className=" rotate-[20deg] ml-2 mb-2" /></button>
          <div className="flex mt-12 space-x-10 mb-20">
            <div className="text-lg font-semibold mt-[18px]">Checkout my</div>
            <button className=" rounded-full  text-black bg-slate-200 h-16 w-16 hover:scale-110 hover:bg-slate-300  ease-in-out duration-200">
              <InstagramIcon id="insta" className="   scale-150 text-2xl" />
            </button>

            <button className=" rounded-full  text-black bg-slate-200 h-16 w-16 hover:scale-110 hover:bg-slate-300   ease-in-out duration-200">
              <GitHubIcon id="git" className=" scale-150 " />
            </button>

            <div>

            </div>
          </div>
        </div>
        <div className="right w-[50%] ">
          <img className='mt-28  duration-300 scale-110 mx-auto' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg"></img>
        </div>
        <div className="md:block hidden">
          <div className="border-l-[2.5px] border-black/50 h-[60%] mt-10"></div>
          <div className="-rotate-90 relative right-[43px] -bottom-20 ">Scroll Down</div>
        </div>
      </div>
    </div>
  )
};

export default Intro;

