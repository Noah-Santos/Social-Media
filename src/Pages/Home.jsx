import {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import BlogCard from "../Components/BlogCard";

const Home = () => {
  const [result, setResult] = useState({success: true, data: [{
    authorName: "",
    title: "",
    id: "",
    image: "",
    description: "",
    authorId: ""
  }]})
  let getPosts = async() => {
    try {
      let response = await axios.get(`http://localhost:5000/posts`);
      console.log(response.data);
      setResult(response.data);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
        <Nav logged={true}></Nav>
        <div id="cardContainer">
        {result.data.map((item) => {
          return <BlogCard key={item.id} {...item}/>
        })}
        </div>
    </div>
  )
}

export default Home