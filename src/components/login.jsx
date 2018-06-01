import React from 'react';
import { Route, Redirect } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles';
import TextField from "material-ui/TextField";
import AppBar, { RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
import AuthService from '../services/AuthService';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false,
        };
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleClick = (event) => {

        let payload = {
            username: this.state.username,
            password: this.state.password,
            redirectToReferrer: true,
        };

        AuthService.authenticate(payload, () => {
            this.setState(payload);
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <TextField
                    hintText="Enter your username"
                    floatingLabelText="Username"
                    onChange={this.handleUsernameChange}
                />
                <TextField
                    type="password"
                    hintText="Enter your password"
                    floatingLabelText="Password"
                    onChange={this.handlePasswordChange}
                />
                <br />
                <RaisedButton
                    label="Submit"
                    primary={true}
                    style={style}
                    onClick={this.handleClick} />
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;