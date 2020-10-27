import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from '../folder1/core-showcase-1.jpg';
import PropsTypes from 'prop-types';

export default function Detail({detail}) {
    const { name, reformed, images } = detail;
    return (
        <article className="detail">
           <div className="img-container">
               <img src={images[0] || defaultImage} 
               alt="single detail" /> 
               <Link to={`/showcase/${reformed}`}  
               className="btn-primary 
               detail-link">
                   Showcase
                </Link>           
               </div> 
               <p className="detail-info">{name}</p>
        </article>
    );
}

Detail.PropsTypes= {
    detail: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
        reformed: PropsTypes.string.isRequired,
        images: PropsTypes.arrayOf(PropsTypes.string)
        .isRequired
    })
}