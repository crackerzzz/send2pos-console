import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './MenuAppBar';
import SearchHome from './SearchHome';


const Main = () => (
    <React.Fragment>
        <CssBaseline />
        <MenuAppBar auth={true} />
        <p />
        <SearchHome />
    </React.Fragment>
)

export default Main;