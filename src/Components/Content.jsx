import {Link} from "react-router-dom";
import {useRef} from 'react';
const Content = ({data}) => {
    // gets the current user
    const user = useRef(JSON.parse(sessionStorage.getItem('currentUser')));
    let authorId = user.current[0];

    // removes the post from the database
    const removePost = () =>{
        console.log(data.data.id)
        fetch(`http://localhost:5000/posts/${data.data.id}`,{
            method: 'Delete',
            headers: {'Content-Type': 'application/json'},
        })
    }
    // console.log(data.data)
    
    return(
        <div className="individualPost">
            {data.success ? 
                <div className='blogBody'>
                    <h1>{data.data.title}</h1>
                    <img src={data.data.image} alt={data.data.title}></img>
                    <h3>{data.data.authorName}</h3>
                    <p>{data.data.description}</p>
                    {/* only shows the edit and delete button if the user is the author of the post */}
                    {data.data.authorId == authorId ? <Link to={'/edit'}>Edit</Link> : <></>}
                    {data.data.authorId == authorId ? <Link to={'/home'}><button onClick={removePost}>Delete</button></Link> : <></>}
                </div> 
                : <h1>There is no post with this id</h1>
            }
        </div>
    )
}

export default Content;