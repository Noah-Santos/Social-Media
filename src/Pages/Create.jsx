import {useRef, useState} from 'react';
import Nav from '../Components/Nav';

const Create = () => {
    if(sessionStorage.getItem("authenticated") === 'false'){
        window.location.replace('/');
    }

    const user = useRef(JSON.parse(sessionStorage.getItem('currentUser')));
    let authorId = user.current[0];
    let authorName = user.current[1];
    // id, name, email
    const [title, setTitle] = useState('');
    const [desc, setDescription] = useState('');
    const image = useRef('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        let img = image.current;
        if(title !== '' && desc !== '' && image !== ''){
            fetch('http://localhost:5000/posts',{
                method: 'POST',
                body: JSON.stringify({title, img, desc, authorName, authorId}),
                headers: {'Content-Type': 'application/json'},
            })
        }
    }

    const onImageChange = (e) => {
        image.current = URL.createObjectURL(e.target.files[0]);
    }

  return (
    <div>
        <Nav logged={true}></Nav>
        <form onSubmit={handleSubmit} className='createPost'>
            <div className='blogArea'>
                <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)} className='input' placeholder='Title'/>
            </div>
            <div className='blogArea'>
                <input type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} className='input' placeholder='Description'/>
            </div>
            <div className='blogArea'>
                <input type="file" id="imageBlog" name="image" onChange={onImageChange} className='input' accept="image/png, image/jpeg"/>
            </div>
            <input type="submit"/>
        </form>
        <img src="" alt="" id="output" />
    </div>
  )
}

export default Create;