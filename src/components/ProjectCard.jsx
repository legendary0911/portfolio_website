import "../App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';



function ProjectCard(props) {
    return (
    
        <div id='p' className="mt-8 bg-white h-48 w-52 rounded-md">
    
        {props.no}
        </div>
        
    )
}

export default ProjectCard;

