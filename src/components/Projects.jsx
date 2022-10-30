import "../App.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ProjectCard from "./ProjectCard";



function Project(props) {


    
    
    return (
        <div id="project" className=" pt-32 dark:bg-yellow-500 bg-slate-100 h-fit pb-20  text-black">

            <div className="text-center mb-10"><mark className="bg-blue-500 px-3 py-2 rounded-lg text-4xl md:text-5xl lg:text-6xl  ">Projects</mark></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit  mx-auto">
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            <ProjectCard desc="hiiiii1" img="https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
            
                
            </div>
            

        </div>
    )
}

export default Project;
