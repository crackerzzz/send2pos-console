import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Main from './Main';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Main} />
        </Switch>
    </MuiThemeProvider>
)

export default App;