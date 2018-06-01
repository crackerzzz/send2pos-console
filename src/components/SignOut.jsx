
import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../services/AuthService';

const SignOut = withRouter(
    ({ history }) => (
        <button onClick={() => {
            AuthService.signout(() => history.push('/'));
        }}>Sign out</button>
    )
);

export default SignOut;