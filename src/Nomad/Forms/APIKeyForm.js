import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class APIKeyForm extends Component {
    render() {
        return (
            <div style={{
                marginTop : 20
            }}>
            <MuiThemeProvider>

                <TextField
                    hintText="Please Enter API Key"
                    //hintStyle={Styles.hintStyle}
                    //floatingLabelStyle={Styles.floatingLabelStyle}
                    floatingLabelFixed={true}
                    //value={this.props.TextValue}
                    onChange={(event, newValue) => {
                        //this.props.HandleTextInputForIRT(newValue)
                    }}

                />
            </MuiThemeProvider>
            </div>


        );
    }
}


export default APIKeyForm