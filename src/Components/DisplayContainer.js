import React from "react";
import DisplayedFilter from "./DisplayFilter";
import DisplayedList from "./DisplayList";
import { withDisplayConsumer } from "../context1";
import Loading from "./Loading";

 function DisplayContainer({context}) {
    
         const { loading, sortedProjects, displayed } = context;
     
      if (loading) {     
          return <Loading />;
         }  
            return (
             <>
                 <DisplayedFilter displayed={displayed} />
                 <DisplayedList  displayed={sortedProjects} />
             </>
         );
     }
     export default withDisplayConsumer(DisplayContainer);
    
    
    