import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
};

export default Nav;