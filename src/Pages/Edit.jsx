import {useState, useRef, useEffect} from 'react';
import Nav from '../Components/Nav';
// import axios from "axios";

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

    // const [result, setResult] = useState([])
    // gets the post clicked on
    // let getPost = async() => {
    //     try {
    //     let response = await axios.get(`http://localhost:5000/posts/${postId}`);
    //     setResult(response.data);
    //     } catch(err) {
    //     console.log(err);
    //     }
    // }

    useEffect(() => {
        // gets the post clicked on and updates the useState variables
        fetch(`http://localhost:5000/posts/${postId}`).then(response =>{
            return response.json();
        }).then(res=>{
            // setResult(res);
            setTitle(res.data.title);
            setDescription(res.data.description);
            image.current = (res.data.image);
        });
    }, []);

    // updates the data in mongodb if all the fields are updated
    const handleSubmit = (e) =>{
        e.preventDefault();
        let img = image.current;
        if(title !== '' && desc !== '' && img !== ''){
            fetch(`http://localhost:5000/posts/${postId}`,{
                method: 'PUT',
                body: JSON.stringify({title, img, desc}),
                headers: {'Content-Type': 'application/json'},
            })
        }
        window.location.replace('/home');
    }

    const updateImage = (e) =>{
        // updates the image value and sets the preview to the image
        image.current = e.target.value;
        document.getElementById('imageView').src = image.current;
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
                                <input type="text" name="image" id="image" onChange={updateImage} className='input' placeholder='Image URL' value={image.current}/>
                                <img src={image.current} alt="uploaded" id='imageView'/>
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