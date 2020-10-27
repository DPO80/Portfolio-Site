import React, { Component} from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'


class Programminglanguageandstacks extends Component {
    render() {
        return(
            <Grid>
                <Cell className="programminglanguageandstacks-col" col={12}>
                    <div style={{ display: 'flex'}}>{this.props.programminglanguageandstacks} <ProgressBar style={{ margin: 'auto', width: '75%'}}
                     progress={this.props.progress} /> </div>
                    </Cell>
            </Grid>
        )
    }
}

export default Programminglanguageandstacks;