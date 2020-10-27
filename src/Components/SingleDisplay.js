import React, { Component } from 'react';
import defaultBackground from '../folder1/core-showcase-4.jpg';
// import Content from '../Components/Content';
// import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { DisplayContext } from '../context1';
import StyledContent from '../Components/StyledContent';
    
    export default class SingleDisplay extends Component {
        constructor(props) {
            super(props);
        // console.log(this.props);
       
        this.state = {
            myform: this.props.match.params.myform,
            defaultBackground
            };
        }
        static contextType = DisplayContext;   
        //  componentDidMount() {}
      
        
    
        render() { 
            const {getProject} = this.context;
            const project = getProject(this.state.myform);
            if (!project) {
                return (
                <div classname="error">
                    <h3>Such project feature cannot be found...</h3>
                    <Link to='/project' className="btn-primary">
                        Display
                    </Link>
                </div>
            
             );   
        }
       
            const { 
    
                name, 
                description,
                offers,
                extras,  
                images  
            } = project;
            const [mainImage,...detailedImage] = images
                return ( 
           <>
             
            <StyledContent image={mainImage  ||
               this.state.defaultBackground}>      
                <Link to='/showcase' className="btn-primary">
                   Showcase
                </Link>           
            </StyledContent>
            
            <section className="single-display">
        <div className="singledisplay-button-col">               
            
            </div>
           <div className="single-display-folder">
            {detailedImage.map((item, index) => {
             return   <img Key={index} src={item} alt={name} />;
            })}           
            </div>
            
            <div className="single-display-info" >
                <article className="disc">
                    <h2 style={{fontFamily: 'lato',color: '#151515' }}>Information:</h2>                   
                    <h4 style={{fontFamily: 'lato', color: '#151515' }}>{description}</h4>
                    </article>
                </div>
            </section>
           
            <section className="singledisplay-col">
            <h3 style={{fontFamily: 'lato', color: '#151515'}}>Offers</h3>
            <h4 style={{fontFamily: 'lato', color: '#151515'}}>Services include but not limited to:</h4>
            <h6 style={{fontFamily: 'lato',color: '#151515'}} className="offers">
                {offers.map((item,index) => {
                    return <li key={index}><i className="fa fa-check" aria-hidden="true"/> {item}</li>
                })}
                </h6>
        </section>

        <section className="extra-info">
            <h3 style={{fontFamily: 'lato',color: '#151515'}}>Extras</h3>
            <h4 style={{fontFamily: 'lato',color: '#151515'}}>I can develop website for:</h4>
            <h6 className="extras">
                {extras.map((item,index) => {
                    return <li key={index}><i className="fa fa-check-square" aria-hidden="true"/> {item}</li>
                })}
            </h6>
         
         <div classname="extra-col">
            <h5 style={{padding: '2em 0',fontFamily: 'lato', color: '#151515'}}>The list of sectors goes on …! Let’s Discuss your projects and get it up and running! 
            </h5>
            </div>
           
                
        </section>
             </>
           
            );
         
        }
    }
    
    