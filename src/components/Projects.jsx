import "../App.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ProjectCard from "./ProjectCard";



function Project(props) {


    
    
    return (
        <div id="project" className=" mt-8 dark:bg-yellow-500 bg-slate-100 h-fit pb-20 pt-10 text-black">

            hii its project page
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit  mx-auto">
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            <ProjectCard desc="hiiiii2"/>
            <ProjectCard desc="hiiiii3"/>
            <ProjectCard desc="hiiiii4"/>
            <ProjectCard desc="hiiiii5"/>
            <ProjectCard desc="hiiiii6"/>
                
            </div>
            

        </div>
    )
}

export default Project;
