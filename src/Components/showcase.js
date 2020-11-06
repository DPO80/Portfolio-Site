import React from 'react';
import ShowcaseContainer from '../Components/ShowcaseContainer';
import DisplayContainer from '../Components/DisplayContainer';
import ListofProjects from '../Components/ListofProjects';



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

