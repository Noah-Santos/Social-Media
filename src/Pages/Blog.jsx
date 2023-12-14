import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';

const Blog = () => {
  return (
    <div>
      <Nav logged={true}></Nav>
      <div>Blog</div>
    </div>
  )
}

export default Blog