
import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import SignOut from './SignOut';

const Header = () => (
    <div>
        <ul style={{ listStyleType: "none" }}>
            <li><Link to='/'>Home</Link></li>
            <li><SignOut /></li>
        </ul>
    </div>
)

export default Header;