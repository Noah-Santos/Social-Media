import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';

const Home = () => {
  return (
    <div>
        <Nav logged={true}></Nav>
        <div>Home</div>
    </div>
  )
}

export default Home