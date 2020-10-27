import React from 'react';
import ListofProjects from '../Components/ListofProjects';
import ShowcaseContainer from '../Components/ShowcaseContainer';
import DisplayContainer from '../Components/DisplayContainer';



const Showcase = () => {
    return (
    <>
            <div className="showcase-bgd" >
                <ShowcaseContainer />
                <DisplayContainer />               
                <ListofProjects />
            </div>  
                
              
                
   
    </>
    );
};

export default Showcase;

