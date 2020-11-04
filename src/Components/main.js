import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Home from './home';
import Error from './Error';
import Showcase from './showcase';
import SingleShowcase from './SingleShowcase';
import SingleDisplay from './SingleDisplay';
import Projects from './Projects';







const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/showcase" component={Showcase} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/showcase/:reformed" component={SingleShowcase} />
        <Route exact path="/singleshowcase" component={Projects} /> 
        <Route exact path="/display/:myform" component={SingleDisplay} />
        <Route component={Error} />
    </Switch>
)

export default Main;


/* 
<Route exact path="/display" component={Display} /> 
*/