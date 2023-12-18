import {useState, useEffect} from 'react';
// import axios from "axios";
// import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import BlogCard from "../Components/BlogCard";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // returns user to log in page if not logged in
  if(sessionStorage.getItem("authenticated") === 'false'){
    // window.location.replace('/');
    navigate('/');
  }
  
  const [result, setResult] = useState({success: true, data: [{
    authorName: "",
    title: "",
    id: "",
    image: "",
    description: "",
    authorId: ""
  }]})
  // gets all posts
  let getPosts = async() => {
    try {
      fetch('http://localhost:5000/posts').then(response =>{
          return response.json();
      }).then(res=>{
          setResult(res);
      });
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
        <Nav logged={true}></Nav>
        <div className="stretch">
          <div id="cardContainer">
            {result.data.map((item) => {
              return <BlogCard key={item.id} {...item}/>
            })}
          </div>
        </div>
    </>
  )
}

export default Home