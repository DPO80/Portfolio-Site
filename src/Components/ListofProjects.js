import React, { Component } from 'react';
import Title from './Title';

export default class ListofProjects extends Component {
    render() {
       
        return (
            <>
            
            <section className="Projects-list"> 
                <div className="Projectslist-center">
                <div className="listofprojects-col">  
                <Title title="List-Of-Projects"/>              
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>Veluwe continental Restaurant</h5>
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>African-Art-Gallery Web Shop </h5>                       
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>Birdview Beach Resort</h5>
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>Portfolio Website</h5>
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>BMI & Cadence Calculator</h5>
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>Wellspring Healthy Lifestyle</h5>
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>EKOR Front-End Solutions</h5>
                <h5 style={{paddingLeft: '23em',fontFamily: 'lato'}}><i className="fa fa-square" aria-hidden="true"/>EKOR HiiT Fitness & Your Mind</h5>                              
                </div>
                </div>                  
            </section>          
            </>
        );       
        
    }
}

