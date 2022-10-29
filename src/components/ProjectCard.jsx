import "../App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';



function ProjectCard(props) {
    return (

        <div className="mt-8 mx-6 bg-[#111827] hover:scale-110 duration-200 h-80 w-96 rounded-lg" onHove>
            <div><img className="h-60 rounded-t-lg" src={props.img}></img></div>

            <div className="info text-white relative bottom-60 rounded-lg h-60 backdrop-blur-3xl  bg-white/[0.01] ">
                <p>
                    {props.desc}
                </p>
            </div>
            <div className=" space-x-6 ml-6">
                <button className="bg-slate-200 px-3 text-sm py-1 hover:scale-110 hover:bg-slate-50 rounded-lg "><a href={props.git}>GitHub</a></button>
                <button className="bg-slate-200 px-3 text-sm py-1 hover:scale-110 hover:bg-slate-50 rounded-lg "><a href={props.link}>Link</a></button>
            </div>
        </div>

    )
}

export default ProjectCard;

