import "../App.css";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallMadeIcon from '@mui/icons-material/CallMade';



function Intro() {


  return (
    <div id="about" className=" bg-[#111827] ">
      <div className="md:flex dark:bg-[#111827] dark:text-slate-300">
        <div className="left flex-col pl-[6%] w-[50%]">
          <div className=" mb-6 flex-col text-2xl font-alb space-y-3 pt-[15%]">
            <p className="bg-gradient-to-r text-transparent bg-clip-text from-yellow-400 to-[#111827] relative bottom-6 left-1 text-yellow-500">Namaskar,It's</p>
            <p> <span className="font-title text-[8rem] bg-gradient-to-r text-transparent bg-clip-text from-white via-slate-300 to-slate-800 stroke-2 stroke-white">Kumar Shivam  </span></p>
          </div>
          <div className="flex-col text-lg mt-4 font-normal font-alb  mb-20 ">
            <p>I am a CSE Undergraduate at BIT,Mesra</p>
            <p>I am a web developer and a competitive programmer </p>
           

          </div>
          <button className=" hover:scale-105 rounded-2xl shadow-md bg-purple-500 hover:bg-purple-600 cursor-pointer text-white px-8 py-5 mt-10 ease-in-out duration-200">Let's Talk  <SendIcon className=" -rotate-[20deg] ml-2 mb-2" /></button>
          <button className=" ml-10 hover:scale-105 rounded-2xl shadow-md  hover:bg-slate-100 cursor-pointer text-black px-8 py-5 mt-10 ease-in-out duration-200">Portfolio <CallMadeIcon className=" rotate-[20deg] ml-2 mb-2" /></button>
          <div className="flex mt-12 space-x-10 mb-20">
            <div className="text-lg font-semibold mt-[18px]">Checkout my</div>
            <button className=" rounded-full bg-slate-200 h-16 w-16 hover:scale-110 hover:text-slate-700  ease-in-out duration-200">
              <InstagramIcon className=" dark:text-[#111827]  scale-150 text-2xl" />
            </button>

            <button className=" rounded-full bg-slate-200 h-16 w-16 hover:scale-110 hover:text-slate-700  ease-in-out duration-200">
              <GitHubIcon className=" dark:text-[#111827] scale-150 " />
            </button>

            <div>

            </div>
          </div>
        </div>





        <div className="right w-[50%] ">


          <img className='mt-28 hover:scale-125 duration-300 scale-110 mx-auto' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg"></img>

        </div>
        <div className="md:block hidden">

          <div className="border-l-[2.5px] border-gray-400 h-[60%] mt-10"></div>
          <div className="-rotate-90 relative right-[43px] -bottom-20 ">Scroll Down</div>


        </div>
      </div>
    </div>
  )
};

export default Intro;

