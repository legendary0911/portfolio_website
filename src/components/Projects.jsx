import "../App.css";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ProjectCard from "./ProjectCard";



function Project(props) {

    const [i, seti] = useState(0)
    return (
        <div id="project" className=" mt-8 dark:bg-yellow-500 bg-slate-100 h-[46rem] text-black">

            hii its project page
            <div className="flex">
                <div className="hover:shadow-2xl ml-40  "><ProjectCard no={i % 9} /></div>
                <div className="hover:shadow-2xl  mr-20 ml-20 scale-125"><ProjectCard no={(i + 1) % 9} /></div>
                <div className="hover:shadow-2xl mr-20 "><ProjectCard no={(i + 2) % 9} /></div>
            </div>
            <div className="flex">
                <button onClick={() => { seti((i - 1)) }} className="bg-blue-500 rounded-lg px-4 py-2 ">back</button>
                <button onClick={() => { seti((i + 1)) }} className="bg-blue-500 rounded-lg px-4 py-2 ">next</button>

            </div>

        </div>
    )
}

export default Project;
