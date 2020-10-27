import React, { Component } from 'react';
import { ShowcaseContext  } from '../context';
import Loading from './Loading';
import Detail from './Detail';
import Title from './Title';



export default class FeaturedProjects extends Component {
    static contextType = ShowcaseContext;
    render() {
  let { loading, featuredProjects : showcase } = this.context;
  showcase = showcase.map( detail => {
    return <Detail Key={detail.id} detail={detail} />;
});


        return (
            <section className="featured-projects" > 
            <Title title="Deployed Projects" />
            <div className="featured-projects-center">
                {loading ? <Loading /> : showcase }
            </div>                    
            </section>
        );     
    }
}

