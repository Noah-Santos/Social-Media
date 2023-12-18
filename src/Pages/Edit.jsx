import {useState, useRef, useEffect} from 'react';
import Nav from '../Components/Nav';
import axios from "axios";

const Edit = () => {
    // returns user to log in page if not logged in
    if(sessionStorage.getItem("authenticated") === 'false'){
        window.location.replace('/');
    }

    const [title, setTitle] = useState('');
    const [desc, setDescription] = useState('');
    const image = useRef('')

    // gets current post
    let postId = sessionStorage.getItem('clickedPost');
    console.log(postId);

    const [result, setResult] = useState([])
    // gets the post clicked on
    let getPost = async() => {
        try {
        let response = await axios.get(`http://localhost:5000/posts/${postId}`);
        setResult(response.data);
        } catch(err) {
        console.log(err);
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${postId}`).then(response =>{
            return response.json();
        }).then(res=>{
            setResult(res);
            setTitle(res.data.title);
            setDescription(res.data.description);
            image.current = (res.data.image);
        });
    }, []);
    console.log(result.data)

    const handleSubmit = (e) =>{
        e.preventDefault();
        let img = image.current;
        if(title !== '' && desc !== '' && image !== ''){
            fetch(`http://localhost:5000/posts/${postId}`,{
                method: 'PUT',
                body: JSON.stringify({title, img, desc}),
                headers: {'Content-Type': 'application/json'},
            })
        }
    }

    const onImageChange = (e) => {
        image.current = URL.createObjectURL(e.target.files[0]);
    }

    return (
        <>
            <Nav logged={true}></Nav>
            <div className='stretch'>
                <div className="editBody">
                    <article className="editSection">
                        <form onSubmit={handleSubmit} className='editPost'>
                            <div className='blogArea'>
                                <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)} className='input' value={title}/>
                            </div>
                            <div className='blogArea'>
                                <input type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} className='input' value={desc}/>
                            </div>
                            <div className='blogArea'>
                                <input type="file" id="imageBlog" name="image" onChange={onImageChange} className='imageInput' accept="image/png, image/jpeg"/>
                            </div>
                            <input type="submit" className='submitButton'/>
                        </form>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Edit;