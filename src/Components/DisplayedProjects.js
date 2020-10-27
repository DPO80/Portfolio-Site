import React, { Component } from 'react';
import { DisplayContext  } from '../context1';
import Loading from './Loading';
import Project from './Project';
import Title from './Title';

export default class DisplayedProjects extends Component {
    static contextType = DisplayContext;
    render() {
  let { loading, displayedProjects : display } = this.context;
  display = display.map( project => {
    return <Project Key={project.id} project={project} />;
});


        return (
            <section className="displayed-projects" > 
            <Title title="Projects-In-Production-Mode"/>
            <div className="displayed-projects-center">
                {loading ? <Loading /> : display }
            </div>                    
            </section>
        );     
    }
}

