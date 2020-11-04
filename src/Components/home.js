import React from 'react';  
// import { Cell } from 'react-mdl';
import {Link } from "react-router-dom";
import Content from "../Components/Content";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import MoreInfo from '../Components/MoreInfo';
import ContactForm from '../Components/ContactForm';

     
     
export default function Home() {
         
            return (
                <>
                 
                    <Content>
                        <Banner title="Frontend Developer" subtitle="HTML|CSS|Javascript|React|React Native">
                        <Link to='/showcase' className="btn-primary">
                            Showcase
                        </Link>
                        </Banner>       
                    </Content>
                         
                     <Services /> 
                     <ContactForm /> 
                     <MoreInfo /> 
                   
                
                 </>    
             );
    
         }
     
    
   