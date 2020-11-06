import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
import { Tabs, Tab, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
       super(props);
        this.state = { activeTab: 3};
    }


    toggleCategories() {
        
        
        if (this.state.activeTab === 0){
            return (
                
                <div className="projects-grid">
                {/*  Restaurant Project 1  textAlign: "center",  */}  
               <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: 'whitesmoke', height: '140px', background: 'url(https://iili.io/d8qrZl.jpg) center / cover'}}></CardTitle>
                    <CardText style={{ letterSpacing: '3px',paddingLeft:'2.5em', color: 'black',fontFamily: 'lato', fontSize: '25px'}}> Veluwe Continental                      
                    </CardText>                  
                    <CardActions border>                       
                    <Button style={{fontFamily: 'lato', fontSize: '18px',paddingLeft: '8.5rem'}} colored target="_blank" href='https://veluwe-continental-restaurant.netlify.app'>Link</Button>
                    <Button style={{fontFamily: 'lato', fontSize: '18px'}} colored target="_blank" href='https://github.com/DPO80/Veluwe-Continental-Restaurant'>GitHub</Button>
                    </CardActions>                   
                    <CardMenu style={{color: 'whitesmoke'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card> 
                </div>
            )
        

            } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/*  Afroasian Art Gallary Project #2 */}
                <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: 'whitesmoke', height: '140px', background: 'url(https://iili.io/d8qZ8u.jpg) center / cover'}}></CardTitle>
                    <CardText style={{letterSpacing: '3px',paddingLeft:'2.5em',color: 'black',fontFamily: 'lato', fontSize: '25px'}}> Afro-Art Web Shop 
                    </CardText>
                    <CardActions border>
                                                
                    <Button style={{fontFamily: 'lato', fontSize: '18px', marginLeft: '7rem'}} colored target="_blank" href='https://react-africanart-online-store.netlify.app'>Link</Button>                     
                    <Button style={{fontFamily: 'lato', fontSize: '18px'}} colored target="_blank" href='https://github.com/DPO80/react-africanart-online-store'>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'whitesmoke'}}>
                    <IconButton name="share"></IconButton></CardMenu>
                </Card>
                </div>
                )
            } else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                {/*  Birdview Beach Resort #3 */}
                <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: 'whitesmoke', height: '140px', background: 'url(https://iili.io/d8qpZQ.jpg) center / cover'}}></CardTitle>
                    <CardText style={{letterSpacing: '3px',paddingLeft:'3.5em',color: 'black',fontFamily: 'lato', fontSize: '25px'}}> 
                    Birdview Resort
                    </CardText>
                    <CardActions border>
                        <Button style={{fontFamily: 'lato', fontSize: '18px', marginLeft: '7.5rem'}} colored target="_blank" href='https://birdview-beach-resort.netlify.app'>Link</Button>
                        <Button style={{fontFamily: 'lato', fontSize: '18px'}} colored target="_blank" href='https://github.com/DPO80/birdview-beach-resort'>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'whitesmoke'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card> 
                </div>
                )
            }  else if (this.state.activeTab === 3){
                return(
                <div className="projects-grid">
                {/*  Portfolio Website #4 */}
                <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: 'whitesmoke', height: '140px', background: 'url(https://iili.io/3MGyHN.jpg) center / cover '}}></CardTitle>
                    <CardText style={{letterSpacing: '3px',paddingLeft:'3.2em',color: 'black',fontFamily: 'lato', fontSize: '25px'}}> Portfolio Website
                    </CardText>
                    <CardActions border>
                        <Button style={{fontFamily: 'lato', fontSize: '18px', marginLeft: '7.5rem'}} colored target="_blank" href='https://www.dominicpatrick.com'>Link</Button>
                        <Button style={{fontFamily: 'lato', fontSize: '18px', }} colored target="_blank" href= 'https://github.com/DPO80/Portfolio-Site'>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'whitesmoke'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
               
                );
               
            }  
    }

    render() {
        return (
            
            <div className="category-tab" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab style={{color: 'whitesmoke',fontFamily: 'lato'}}>Veluwe Continental</Tab>
                <Tab style={{color: 'whitesmoke',fontFamily: 'lato'}}>African Art Web Shop</Tab> 
                <Tab style={{color: 'whitesmoke',fontFamily: 'lato'}}>Birdview Resort</Tab>                           
                <Tab style={{color: 'whitesmoke',fontFamily: 'lato'}}>Portfolio Website</Tab>
                                         
                </Tabs>
               
                    {this.toggleCategories()}              
            </div>    
        );
    }

}



export default Projects


/*
import {Link } from 'react-router-dom';

<h6>
                        <Link to='/showcase' className="btn-primary" style={{fontFamily: 'lato'}}>
                                 Showcase
                            </Link>
                            </h6>
*/