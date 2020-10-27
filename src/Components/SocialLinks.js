import React, { Component } from 'react';
import { FaBicycle,FaSpa,FaDumbbell,FaHiking} from 
'react-icons/fa';


export default class SocialLinks extends Component {
    state = {
        socialLinks:[
         {
             icon: <FaBicycle />,
            
         }, 
         {
            icon: <FaSpa />,
           
        },
        {
            icon: <FaDumbbell />,
           
        },
        {
            icon: <FaHiking />,
           
        },
    ]
};
    render() {
        return (
            <section className="socialLinks">
               
                    <div className="socialLinks-center">
                    {this.state.socialLinks.map((item, index ) => {
            return <article key={index} className="socialLinks">
                    <span>{item.icon}</span>
                    
                    </article>
                   
            })}
        </div>
        </section>
        );
    }
}
