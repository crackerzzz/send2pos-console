import React from 'react';
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
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

    handleClick = () => {
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
                    id="username"
                    label="Username"
                    value={this.state.username}
                    autoFocus={true}
                    margin="normal"
                    onChange={this.handleUsernameChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    value={this.state.password}
                    type="password"
                    onChange={this.handlePasswordChange}
                />
                <br />
                <Button
                    label="Login"
                    variant="contained"
                    color="primary"
                    style={style}
                    onClick={this.handleClick}
                >
                    Login
                </Button>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;