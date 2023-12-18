import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo3.png';
import { useNavigate } from 'react-router-dom';



const Nav = ({logged}) => {
  const navigate = useNavigate();
  // blocks the user from accessing the site until they log back in after logging out
  const out = () => {
    sessionStorage.setItem('authenticated', false);
    navigate('/home');
    // window.location.replace('/');
  }

  // nav bar for unauthorized users
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

  // nav for logged in users
  return (
    <nav className="nav">
        <div className="logoContainer">
            <img src={logo} alt="logo" className='logo'/>
            <p className='title'>Peak Posts</p>
        </div>

        <div className="linksContainer">
            <Link to={'/home'} className='links navBtn'>Home</Link>
            <Link to={'/create'} className='links navBtn'>Post</Link>
            <Link to={'/'} className='links navBtn' onClick={out}>Logout</Link>
        </div>
    </nav>
  )
}

export default Nav;