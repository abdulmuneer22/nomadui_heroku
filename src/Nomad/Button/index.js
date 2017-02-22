import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Button extends Component{
    render(){
        return(
            <div style={{
                marginTop : 50
            }}>
            <MuiThemeProvider>
                <RaisedButton label="Submit"  primary={true}/>
            </MuiThemeProvider>
            </div>
        )
    }
}


export default Button