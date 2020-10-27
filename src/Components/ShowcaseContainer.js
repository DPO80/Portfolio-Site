import React from "react";
import ShowcasedFilter from "./ShowcaseFilter";
import ShowcasedList from "./ShowcaseList";
import { withShowcaseConsumer } from "../context";
import Loading from "./Loading";
 
function ShowcaseContainer({ context }){
     const { loading, arrangedProjects, showcased } = context;

  if (loading) {     
      return <Loading />;
     }  
        return (
         <>
             <ShowcasedFilter showcased={showcased} />
             <ShowcasedList  showcased={arrangedProjects} />
         </>
     );
     
 }
 export default withShowcaseConsumer(ShowcaseContainer);


