import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main';

const App = () => (
    <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Main />
        </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));