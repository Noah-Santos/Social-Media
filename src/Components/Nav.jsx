import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo3.png';

const Nav = ({logged}) => {
  if(!logged){
    return (
      <nav className="nav">
        <div className="logoContainer">
            <img src={logo} alt="logo" className='logo'/>
            <p className='title'>Peak Posts</p>
        </div>

        <div className="linksContainer">
          <button className='navBtn'><Link to={'/'} className='links'>Log In</Link></button>
          <button className='navBtn'><Link to={'/sign'} className='links'>Sign In</Link></button>
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
            <Link to={'/home'} className='links navBtn'>Home</Link>
            <Link to={'/blog'} className='links navBtn'>Blog</Link>
            <Link to={'/'} className='links navBtn'>Logout</Link>
        </div>
    </nav>
  )
}

export default Nav;