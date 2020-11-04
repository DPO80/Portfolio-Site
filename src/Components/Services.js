import React, { Component } from 'react';
import { FaCode, FaCogs, FaCog, FaLaptopCode} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
         {
             icon: <FaCode/>,
             title: "Creative Web Designer",
             info: 'Responsive and mobile friendly tailored design. Ensuring the technical feasibility of UI/UX. Modern and attractive layout!',
         }, 
         {
            icon: <FaCog/>,
            title: "Build Reusable Code",
            info: 'Build reusable code in HTML, CSS and JavaScript with libraries for future use. Translate UI/UX design wireframes to code!',
        },
        {
            icon:  <FaLaptopCode/>,
            title: "Bridge The Gap",
            info: 'Bridge the gap between UI/UX designers, Graphical designers and Technical implementation. Play an active role on all sides!',
        },
        {
            icon:  < FaCogs/>,
            title: "Web Development",
            info: 'Build complete website with all functionality, E-commerce, animated slider, SEO friendly URLs and overall users friendly facing features!',
        },
    ]
};
    render() {
        return (
            <section className="services">
                <Title title="services" />
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
