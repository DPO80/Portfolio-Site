import React, { Component } from 'react';
import { FaCode,FaSpa,FaDumbbell, FaLaptopCode} from 
'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
         {
             icon: <FaCode />,
             title: "Creative Web Design",
             info: 'Everything is designed. Few things are designed well. At Ekor, we help you close the gap!'
         }, 
         {
            icon: < FaSpa/>,
            title: "Ekor Healthy Lifestyle",
            info: 'Live healthy today! Keep your body and mind at its best!'
        },
        {
            icon: <FaDumbbell/>,
            title: "EKOR Fitness & Mind",
            info: 'Physical fitness is good, do not forget your mind!'
        },
        {
            icon: <FaLaptopCode />,
            title: "EKOR Web Development",
            info: 'Great web development with all functionality! Our offers look good from the inside out!'
        },
    ]
};
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                < hr/>
                
                    <div className="services-center">
                    {this.state.services.map((item, index ) => {
            return <article key={index} className="services">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                   
                        })}
                    </div>
            </section>
            
        );
    }
}
