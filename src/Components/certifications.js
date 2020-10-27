import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certifications extends Component {
    render() {
        return(
            <Grid>
                <Cell className="certifications-col" col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    
                    </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    </Cell>

                    
            </Grid>
            




        )
    }
}

export default Certifications;
