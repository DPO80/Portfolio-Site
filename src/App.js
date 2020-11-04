import React, { Component } from 'react';
import './App.css';
import Main from './Components/main';
import {Link} from 'react-router-dom';
import logo from '../src/images/logo.svg';
import {FaAlignRight } from 'react-icons/fa';

class App extends Component {
    state= {
        isOpen:false
    }  
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return <>
        <Main /> 
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
    
            <Link to="/">
                <img src={logo} alt="portfolio-logo"/></Link>
            <button 
            type="button" 
                className="nav-btn" 
                    onClick={this.handleToggle}
                    >          
                <FaAlignRight className="nav-icon" />
                </button> 
        
        </div>
            <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
            
            <li>
                <Link style={{fontSize: '22px',fontFamily: 'lato'}} to="/">Home</Link>
            </li>
            <li>
                <Link style={{fontSize: '22px',fontFamily: 'lato'}} to="/showcase">Showcase</Link>
            </li>

            <li>
                <Link style={{fontSize: '22px',fontFamily: 'lato'}} to="/projects">Projects</Link>
            </li>
            
            </ul>
            </div>              
            <div class="top-option">
                        <div class="to-search search-switch">
                            <i style={{color: '#aa9627'}} class="fa fa-search"></i>
                        </div>
                        <div  class="to-social">
                           
                           
                            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-linkedin"></i></a>
                            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-twitter"></i></a>
                            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-codepen"></i></a>
                            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-github"></i></a>
                        </div>

                    </div>
        
        </nav>;
        </> 
           
    }
}  

   
       
export default App;           

 