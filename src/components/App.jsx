import React from 'react';
import { Switch, Route } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Main from './Main';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const theme = createMuiTheme();

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Main} />
        </Switch>
    </MuiThemeProvider>
)

export default App;