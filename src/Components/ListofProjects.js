import React, { Component } from 'react';
import { FaBriefcase, FaCalculator, FaDumbbell, FaGlobeAfrica, FaHotel, FaLaptopCode, FaSpa } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import Title from './Title';


export default class ListofProjects extends Component {
    state = {
        listofprojects:[
         {
            icon: <MdRestaurant/>,
            title: "Veluwe Continental Restaurant",
            info: 'Veluwe Continental Restaurant (VCR), is a new premium restaurant, situated in Nunspeet, The Netherlands. Its core value is to bring is to bring affordable healthy meal to busy people that have no time to cook! Subscription plan includes up to 365 days coverage!',
            }, 
            
         {
            icon: <FaGlobeAfrica/>,
            title: "African-Art Web Shop",
            info: 'African Art Gallery web shop is an online art gallery shop. Each eccentric piece has a story to tell and all art work has certain elements of African Art techniques- Resemblance to a human being, luminosity, self-composure, clarity and symmetry smoothness!',
        },
        {
            icon:  <FaHotel/>,
            title: "Birdview Beach Resort",
            info: 'Bird-view Resort is a luxurious all-inclusive seaside resort. There are 13 accommodation units, made up of rooms and suites, from single economy to presidential suite. All rooms and suites are luxuriously furnished, spacious and comfortable!',
        },
        {
            icon:  < FaBriefcase/>,
            title: "DP Portfolio Website",
            info: 'DP Portfolio website provides information and links showcasing Dominic Patrick creative and Frontend development projects. Latest Web Design | Clean code |Websites responsive on any device | Contact/Order form fully functional!',
        },
        {
            icon:  < FaDumbbell/>,
            title: "EKOR HiiT30 Fitness & Your Mind",
            info: 'EKOR HiiT30 is a new 30 minutes high intensity interval training that focuses on physical fitness and mental exercise. Classes are made up of plyometric based workout and cardiovascular fitness, designed to improve strength and build lean muscle!',
        },
        {
            icon:  < FaSpa/>,
            title: "Wellspring Healthy Lifestyle",
            info: 'Wellspring healthy lifestyle combines a balanced diet and tips on ways of living that lowers the risk of being seriously ill. Wellspring lifestyle provides users with tips on healthy recipe, physical exercise, preventive healthcare, relationship, environment and social activities!',
        },
        {
            icon:  < FaLaptopCode/>,
            title: "EKOR Front-End Solutions",
            info: 'Build complete website with all functionality, E-commerce, SEO friendly URLs and overall users friendly facing features! EKOR frontend solutions provide optimization of web pages for maximum efficiency while maintaining brand consistency across all web pages!',
        },
        {
            icon:  < FaCalculator/>,
            title: "BMI & Cadence Calculator",
            info: 'BMI & Cadence App, is part of EKOR HiiT30 workout. The app records how fast members lose weight and keep track of their BMI weight and body fat percentage. It helps EKOR HiiT30 trainers to provide tailored program that fits members right body mass index!',
        },
    ]
};
    render() {
        return (
            <div className="projects-col">
            <section className="listofprojects">
                <Title title="List Of Projects" />
                <section>
                <div className="listofprojects-center">
                    {this.state.listofprojects.map((item, index ) => {
            return <article key={index} className="listofprojects">
                    <span>{item.icon}</span>
                    <span>{item.icons}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    
                    
                    
                    </article>
                   
                        })}
                    </div>
            </section>
            </section>
            </div>
            
        );
    }
}

