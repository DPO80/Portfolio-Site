import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FaCode, FaCogs, FaCog, FaLaptopCode} from 'react-icons/fa';


     
     
       class Landing extends Component {
         render() { 
             
             return (
                <>
                 <div className="banner-landing" style={{width: '100%', margin: 'auto'}}>
                     <Grid className="landing-grid-col-1">
                     
                    <Cell className="banner-space-col" col={12}>
                             <div className="banner-text">
                                 <h1>Frontend Developer</h1>
                                 
                                   
                                 <hr/>
                             <p>HTML | CSS | Javascript | React | React Native  | Python  </p>
                             
                                                    
                            
                             </div>
                         </Cell> 
                         <Cell className="services-col" col={12}>
                         <div>
                        <Cell className="services-1" col={3}>
                         <div className="icon-col">
                         <FaCode color="#aa9627" font-size="2.5rem" />
                         <h5 style={{fontSize: '25px', color: 'whitesmoke',fontFamily: 'lato'}}>Creative Web Designer</h5>
                         <p style={{fontSize: '15px', color: 'whitesmoke',fontFamily: 'lato'}}>Responsive and mobile friendly tailored design. Ensuring the technical feasibility of UI/UX. Modern and attractive layout.</p>
                         </div>                               
                        </Cell>
                        <Cell className="services-2" col={3}>
                        <div className="icon-col">
                         <FaCog color="#aa9627" font-size="2.5rem"/>
                         <h5 style={{fontSize: '25px', color: 'whitesmoke',fontFamily: 'lato'}}>Build Reusable Code</h5>
                         <p style={{fontSize: '15px', color: 'whitesmoke',fontFamily: 'lato'}}>Build reusable code in HTML, CSS and JavaScript with libraries for future use. Translate UI/UX design wireframes to code.</p>
                         </div>  
                        </Cell>
                        <Cell className="services-3" col={3}>
                         
                        <div className="icon-col">
                         <FaLaptopCode color="#aa9627" font-size="2.5rem" />
                         <h5 style={{fontSize: '25px', color: 'whitesmoke',fontFamily: 'lato'}}>Bridge The Gap</h5>
                         <p style={{fontSize: '15px', color: 'whitesmoke',fontFamily: 'lato'}}>Bridge the gap between UI/UX designers, Graphical designers and Technical implementation. Play an active role on all sides.</p>
                         </div>  
                        </Cell>
                        <Cell className="services-4" col={3}>
                        <div className="icon-col">
                         <FaCogs color="#aa9627" font-size="2.5rem" />
                         <h5 style={{fontSize: '25px', color: 'whitesmoke',fontFamily: 'lato'}}>Web Development</h5>
                         <p style={{fontSize: '15px', color: 'whitesmoke',fontFamily: 'lato'}}>Build complete website with all functionality, E-commerce, animated slider, SEO friendly URLs and overall users friendly facing features.</p>
                         </div>
                        </Cell>
                        </div> 

                        
                        
                        </Cell>                                            
                       </Grid>
                   
                 </div> 
                
                 </>    
             )
    
         }
     
     }
     export default Landing;
     
     
/* 
<img src={logo}      
                             
                             alt="myphoto"
                             className="myphoto-img" />

  style={{paddingLeft: '1rem', paddingRight: '1rem'}}                      
                        */