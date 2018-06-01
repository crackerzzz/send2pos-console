import React from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthService from '../services/AuthService';

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        if (AuthService.isAuthenticated) {
            return <Route
                {...rest}
                render={(props) =>
                    <Component {...props} />
                }
            />
        } else {
            return <Route
                {...rest}
                render={(props) =>
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                }
            />
        }
    }
}
export default PrivateRoute;