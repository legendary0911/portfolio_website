import "../App.css";
import React from 'react';
import { SiMongodb,SiFirebase,SiPython,SiCplusplus,SiReact,SiExpress,SiJava,SiJavascript,SiTailwindcss,SiCss3 } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import {GrNode } from 'react-icons/gr';
import ReactDOM from 'react-dom/client';
;



function Fields() {
    return (
        <div id="skill" className=" h-[37rem] text-black bg-yellow-500 flex">

            <div className="left text-black flex-col pl-[6%]">
                <div className=" text-black flex-col mt-28 text-7xl font-alb space-y-3 pt-[15%]">
                    <p className="text-black ">My Area Of</p>
                    <p>Expertise</p>
                </div>
                <div className="flex-col text-2xl mt-8 font-normal font-alb space-y  pb-96">
                    <p>These are the area in  </p>
                    <p>which i have expertise and experience </p>


                </div>




                <div>

                </div>

            </div>
            <div className="right mx-auto mt-20">
            <div className="flex space-x-28 mb-12 text-7xl"><ImHtmlFive  className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/> <SiCss3 className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><SiTailwindcss className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/></div>
            <div className="flex space-x-28 mb-12 text-7xl"><SiJavascript className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><SiExpress className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><GrNode className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/></div>
            <div className="flex space-x-28 mb-12 text-7xl"><SiMongodb className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><SiFirebase className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><SiReact className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/></div>
            <div className="flex space-x-28  text-7xl"><SiCplusplus className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><SiJava className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/><SiPython className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] "/></div>
           
            </div>
        </div>
    )
}

export default Fields;

