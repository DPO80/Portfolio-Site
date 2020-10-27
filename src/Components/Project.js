import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from '../folder1/core-showcase-1.jpg';
import PropsTypes from 'prop-types';

export default function Project({project}) {
    const { name, myform, images } = project;
    return (
        <article className="project">
           <div className="img-container">
               <img src={images[0] || defaultImage} 
               alt="single project" /> 
               <Link to={`/display/${myform}`}  
               className="btn-primary 
               project-link">
                   Featured
                </Link>           
               </div> 
               <p className="project-info">{name}</p>
        </article>
    );
}

Project.PropsTypes= {
    project: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
        myform: PropsTypes.string.isRequired,
        images: PropsTypes.arrayOf(PropsTypes.string)
        .isRequired
    })
}