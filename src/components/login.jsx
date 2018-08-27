import React from 'react';
import { Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import AuthService from '../services/AuthService';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

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
        const { classes } = this.props;
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleUsernameChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
                                />
                            </FormControl>
                            <Button
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleClick}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Login);