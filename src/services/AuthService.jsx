const AuthService = {

    isAuthenticated: false,

    authenticate(payload, callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 100);
    },

    signout(callback) {
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

export default AuthService;