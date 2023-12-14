import {useEffect, useRef} from "react";
import { Link, useParams } from "react-router-dom";
import Nav from '../Components/Nav';

const Blog = () => {
  let {id} = useParams();
  const result = useRef({})
  useEffect(() => {
    let test = async() => {
      result.current = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "GET"
      });
      result.current = await result.current.json();
      console.log(result.current.success);
    }
    test();
  }, );
  return (
    <div>
      <Nav logged={true}></Nav>
      <div>
        {result.current.success ? <><h1>{result.current.data.title}</h1><img href={result.current.data.image} alt={result.current.data.title}></img><h3>{result.current.data.author}</h3><p>{result.current.data.desc}</p></> : <h1>There is no post with this id</h1>}
      </div>
    </div>
  )
}

export default Blog