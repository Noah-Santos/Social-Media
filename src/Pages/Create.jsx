import {useRef, useState} from 'react';
import Nav from '../Components/Nav';

const Create = () => {
    if(sessionStorage.getItem("authenticated") == 'false'){
        window.location.replace('/');
    }

    const user = useRef(JSON.parse(sessionStorage.getItem('currentUser')));
    let authorId = user[0];
    let authorName = user[1];
    let authorEmail = user[2];
    // id, name, email
    const [title, setTitle] = useState('');
    const [desc, setDescription] = useState('');
    const [image, setImage] = useState('');
    console.log(user)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title != '' && desc != '' && image != ''){
            fetch('http://localhost:5000/posts',{
                method: 'POST',
                body: JSON.stringify({title, desc, image, authorId, authorName, authorEmail}),
                headers: {'Content-Type': 'application/json'},
            })
        }
    }

  return (
    <div>
        <Nav></Nav>
        <form onSubmit={handleSubmit} className='createPost'>
            <div className='blogArea'>
                <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)} className='input' placeholder='Title'/>
            </div>
            <div className='blogArea'>
                <input type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} className='input' placeholder='Description'/>
            </div>
            <div className='blogArea'>
                <input type="file" id="image" name="image" onChange={(e)=>setImage(e.target.value)} className='input' accept="image/png, image/jpeg"/>
            </div>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Create;