import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className='nav-link bg-secondary'>
            <span className="navbar-brand mb-0 h1">restaurant management</span>
            <Link to={`/`}>
                <button className='btn btn-info'>Home</button>
            </Link>
            <Link to={`/tables`}>
                <button className='btn btn-info'>Tables</button>
            </Link>
            <Link to={`/waiters`}>
                <button className='btn btn-info'>Waiters</button>
            </Link>
        </nav>
    );
}

export default Header;