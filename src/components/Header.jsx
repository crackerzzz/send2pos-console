
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <ul style={{ listStyleType: "none" }}>
            <li><Link to='/'>Home</Link></li>
        </ul>
    </div>
)

export default Header;