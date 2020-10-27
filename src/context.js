import React, { Component } from 'react';
import items from "./data";

const ShowcaseContext = React.createContext();
class ShowcaseProvider extends Component {
    state = {
        showcased: [],
        arrangedProjects: [],
        featuredProjects: [], 
        type: 'all',      
        loading: true          
    };
    
    // getData

    componentDidMount() {
        // this.getData
        let showcased  = this.formatData(items)
        let featuredProjects = showcased.filter
        (detail => detail.featured === true);
        
        
this.setState({
        showcased,
        featuredProjects,
        arrangedProjects: showcased,
        loading: false,       
    }); 
}
formatData(items) {
let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image =>
            image.fields.file.url);
    
let detail = { ...item.fields, images, id };
        return detail;
    });
        return tempItems;

}

getDetail = (reformed) => {
    let tempShowcased = [...this.state.showcased];
    const detail = tempShowcased.find
    (detail =>detail.reformed === reformed );
    return detail;
};
handleChange = event => {
    const target = event.target.type;
    const value = event.type === "checkbox" ?
    target.checked : target.value;
    const name = event.target.name;
    this.setState ({
        [name]:value
    },this.filterShowcased 
    );
    
};
   
filtershowcased = () => {
    let {
        showcased, type
    } = this.state   
 // all projects
    let tempShowcased = [...showcased];

// filter by type
if(type !== 'all') {
    tempShowcased = tempShowcased.filter(detail =>detail.type === 
        type);
}
    
    this.setState({
        arrangedProjects:tempShowcased
    });

};
    
    render() {
        return (
            <ShowcaseContext.Provider value={{ 
            ...this.state,
            getDetail: this.getDetail,
            handleChange:this.handleChange           
            }}
            >
            {this.props.children}
            </ShowcaseContext.Provider>          
        );
    }


}
const ShowcaseConsumer = ShowcaseContext.Consumer;

export function withShowcaseConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ShowcaseConsumer>
            {value => <Component {...props} context={value} />}
        </ShowcaseConsumer>        
   }
 }
export{ ShowcaseProvider, ShowcaseConsumer, ShowcaseContext };


