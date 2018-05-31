import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './components/App';

const Entry = () => (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(<Entry />, document.getElementById('app'));