import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SourceCityFrom from './Forms/SourceCityForm'
import APIKeyForm from './Forms/APIKeyForm'
import Button from './Button'

class Nomad extends Component {
    render() {
        return (

            <div style={{
                display : 'flex',
                flex : 1,
                marginRight : 'auto',
                marginLeft : 'auto',
                maxWidth : '80%',
                marginTop : '20px',
                flexDirection : 'column'
                
            }}>

            <div style={{
                width : '100%',
                display : 'flex',
                height : '50px',
                //backgroundColor : 'red',
                alignItems : 'center',
                justifyContent : 'center'
            }}>

            <h2>Nomad DB Tool</h2>
            
            </div>



            <div>
                <SourceCityFrom />
            </div>

            <div>
                <APIKeyForm />
            </div>


            <div>
                <Button />
            </div>
            </div>
        );
    }
}


export default Nomad