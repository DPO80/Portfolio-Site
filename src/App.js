import React, { Component } from 'react';
import './App.css';
import{ Layout, Header, Navigation, Drawer, Content}  from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom';
import logo from '../src/images/logo.svg';
// import { FaLinkedin, FaFacebook, FaTwitter, FaCodepen, FaGithub } from 'react-icons/fa';
// import logo from '../src/images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header   className="header-color" title={<Link style={{textDecoration: 'none',
        color: 'whitesmoke',fontSize: '30px',fontFamily: 'lato'}} to="/"><img src={logo} alt="store" 
        className="navbar-brand" style={{marginRight: '1em', color: 'whitesmoke',fontFamily: 'lato' }} />Dominic Patrick </Link>} scroll>
          
          <div class="nav-center">         
            <Navigation  className="nav-header">            
            </Navigation>
               </div>
               <ul className="nav-links show-nav" 
            >
            <li>
                <Link style={{fontSize: '19px',fontFamily: 'lato'}} to="/">Home</Link>
            </li>
            <li>
                <Link style={{fontSize: '19px',fontFamily: 'lato'}} to="/showcase">Showcase</Link>
            </li>

            <li>
                <Link style={{fontSize: '19px',fontFamily: 'lato'}} to="/projects">Projects</Link>
            </li>
            </ul>
               <div class="col-lg-3">
                    <div class="top-option">
                        <div class="to-search search-switch">
                            <i style={{color: '#aa9627'}} class="fa fa-search"></i>
                        </div>
                        <div  class="to-social">
                           
                           
                            <a href style={{color: '#aa9627'}}to=""><i class="fa fa-linkedin"></i></a>
                            <a href style={{color: '#aa9627'}}to=""><i class="fa fa-twitter"></i></a>
                            <a href style={{color: '#aa9627'}}to=""><i class="fa fa-codepen"></i></a>
                            <a href style={{color: '#aa9627'}}to=""><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
              
            

        </Header>
        <Drawer title={<Link style={{textDecoration: 'none',color: 'black'}} 
        to="/"> </Link>} scroll>
            
            
            <Navigation >
                <Link  style={{fontSize: '17px',fontFamily: 'lato'}}  to="/home">Home</Link>
                <Link  style={{fontSize: '17px',fontFamily: 'lato'}}  to="/showcase">Showcase</Link>
                <Link  style={{fontSize: '17px',fontFamily: 'lato'}}  to="/projects">Projects</Link> 
                                               
                
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />

        
        </Content>
    </Layout>
</div>

    )
  }
}

export default App;
