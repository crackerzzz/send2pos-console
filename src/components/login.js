import React from 'react';
import MuiThemeProvider from 'material-ui/styles';
import TextField from "material-ui/TextField";
import AppBar, { RaisedButton } from 'material-ui';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleClick(event) {
        let apiBaseUrl = "http://localhost:4000/api/";
        let self = this;

        let payload = {
            "email": this.state.username,
            "password": this.state.password
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login" />
                        <TextField hintText="Enter your username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <TextField
                            type="password"
                            hintText="Enter your username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style}
                            onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;