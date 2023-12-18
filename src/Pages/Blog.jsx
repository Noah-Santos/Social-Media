import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from '../Components/Nav';
import Content from "../Components/Content";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  // returns user to log in page if not logged in
  if(sessionStorage.getItem("authenticated") === 'false'){
    navigate('/home');
    // window.location.replace('/');
  }

  let {id} = useParams();
  const [result, setResult] = useState({success: true, data: {
    authorName: "",
    title: "",
    id: "",
    image: "",
    description: "",
    authorId: ""
  }})
  // gets the post clicked on
  let getPost = async() => {
    try {
      let response = await axios.get(`http://localhost:5000/posts/${id}`);
      setResult(response.data);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <Nav logged={true}></Nav>
      <Content data={result}/>
    </div>
  )
}

export default Blog;