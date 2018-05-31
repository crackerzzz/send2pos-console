const Routes = () => {
    return {
        component: Main,
        childRoutes: [{
                path: '/',
                component: Main
            },
            {
                path: '/login',
                component: Login
            }
        ]
    }
};

export default Routes;