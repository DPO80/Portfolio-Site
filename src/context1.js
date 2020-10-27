import React, { Component } from 'react';
import items from "./data1";

    const DisplayContext = React.createContext();
    class DisplayProvider extends Component {
        state = {
            displayed: [],
            sortedProjects: [],
            displayedProjects: [], 
            type: 'all',      
            loading: true          
        };
        
        // getdata1

   componentDidMount() {
    // this.getdata1
    let displayed  = this.formatdata1(items)
    let displayedProjects = displayed.filter
        (project => project.featured === true);
    
    
    this.setState({
        displayed,
        displayedProjects,
        sortedProjects: displayed,
        loading: false,       
}); 
}
formatdata1(items) {
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image =>
                image.fields.file.url);
        
    let project = { ...item.fields, images, id };
            return project;
        });
            return tempItems;
    
    }
    getProject = (myform) => {
        let tempDisplayed = [...this.state.displayed];
        const project = tempDisplayed.find
        (project =>project.myform === myform );
        return project;
    };
    handleChange = event => {
        const target = event.target.type;
        const value = event.type === "checkbox" ?
        target.checked : target.value;
        const name = event.target.name;
        this.setState ({
            [name]:value
        },this.filterDisplayed
        );
        
    };
    filterdisplayed = () => {
        let {
            displayed, type
        } = this.state   
     // all projects
        let tempDisplayed = [...displayed];
    
    // filter by type
    if(type !== 'all') {
        tempDisplayed = tempDisplayed.filter(project =>project.type === 
            type);
    }
     
    this.setState({
        sortedProjects:tempDisplayed
    });

};
render() {
    return (
        <DisplayContext.Provider value={{ 
        ...this.state,
        getProject: this.getProject,
        handleChange:this.handleChange           
        }}
        >
        {this.props.children}
        </DisplayContext.Provider>          
    );
}


}
const DisplayConsumer = DisplayContext.Consumer;

export function withDisplayConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <DisplayConsumer>
            {value => <Component {...props} context={value} />}
        </DisplayConsumer>        
   }
 }
export{ DisplayProvider, DisplayConsumer, DisplayContext };
