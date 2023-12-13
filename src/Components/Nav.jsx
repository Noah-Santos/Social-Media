import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/yLogo.png';

const Nav = () => {
  return (
    <nav className="nav">
        <div className="logoContainer">
            <img src={logo} alt="logo" />
        </div>

        <div className="linksContainer">
            <Link to={'/home'} className='links'>Home</Link>
            <Link to={'/blog'} className='links'>Blog</Link>
            <Link to={'/'} className='links'>Logout</Link>
        </div>
    </nav>
  )
}

export default Nav;