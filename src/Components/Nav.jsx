import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo1.jpg';

const Nav = ({logged}) => {
  if(!logged){
    return (
      <nav className="nav">
        <div className="logoContainer">
            <img src={logo} alt="logo" className='logo'/>
        </div>

        <div className="linksContainer">
            <Link to={'/'} className='links'>Log In</Link>
            <Link to={'/sign'} className='links'>Sign In</Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className="nav">
        <div className="logoContainer">
            <img src={logo} alt="logo" className='logo'/>
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