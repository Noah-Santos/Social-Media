import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from '../Components/Nav';
import Content from "../Components/Content";

const Blog = () => {
  let {id} = useParams();
  const [result, setResult] = useState({success: true, data: {
    authorName: "",
    title: "",
    id: "",
    image: "",
    description: "",
    authorId: ""
  }})
  let getPost = async() => {
    try {
      let response = await axios.get(`http://localhost:5000/posts/${id}`);
      console.log(response.data);
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