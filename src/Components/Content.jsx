import {Link} from "react-router-dom";
import {useRef} from 'react';
const Content = ({data}) => {
    // gets the current user
    const user = useRef(JSON.parse(sessionStorage.getItem('currentUser')));
    let authorId = user.current[0];

    // removes the post from the database
    const removePost = () =>{
        fetch(`http://localhost:5000/posts/${data.data.id}`,{
            method: 'Delete',
            headers: {'Content-Type': 'application/json'},
        })
    }

    // sets the clicked post into the sessionStorage
    const storeId = () =>{
        sessionStorage.setItem('clickedPost', data.data.id);
    }
    
    return(
        <div className="individualPost">
            {data.success ? 
                <div className='blogBody'>
                    <img src={data.data.image} alt={data.data.title} className='singleImage'></img>
                    <h1 className='singleTitle'>{data.data.title}</h1>
                    <h3 className='singleAuthor'>By {data.data.authorName}</h3>
                    <p className='singleDescription'>{data.data.description}</p>
                    {/* only shows the edit and delete button if the user is the author of the post */}
                    <div className='buttonCont'>
                        {data.data.authorId === authorId ? <Link to={'/edit'} className='singleButtons'><button onClick={storeId} className='buttonText'>Edit</button></Link> : <></>}
                        {data.data.authorId === authorId ? <Link to={'/home'} className='singleButtons'><button onClick={removePost} className='buttonText'>Delete</button></Link> : <></>}
                    </div>
                </div> 
                : <h1>There is no post with this id</h1>
            }
        </div>
    )
}

export default Content;