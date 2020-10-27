import React from 'react';
import { Grid, Cell } from 'react-mdl';
import DisplayContainer from '../Components/DisplayContainer';





const Display = () => {
    return (
    <>
            <div className="banner-landing" style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid-col-1">
                
               <Cell className="banner-space-col" col={12}>
                        <div className="banner-text">
                            <h1>Frontend Developer</h1>
                            
                            <hr/>
                        <p>HTML | CSS | Javascript | Python  |  React | React Native </p>
                        
                                               
                       
                        </div>
                    </Cell> 
                                                               
                  </Grid>
              
            </div> 
            <DisplayContainer />
            </>    
   
    );
};

export default Display;
