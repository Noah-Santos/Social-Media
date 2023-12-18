import {useRef, useState} from 'react';
import Nav from '../Components/Nav';

const Create = () => {
    // returns user to log in page if not logged in
    if(sessionStorage.getItem("authenticated") === 'false'){
        window.location.replace('/');
    }

    // gets the current user
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
        window.location.replace('/home');
    }

    // const onImageChange = (e) => {
    //     image.current = URL.createObjectURL(e.target.files[0]);
    // }

    const updateImage = (e) =>{
        // updates the image value and sets the preview to the image
        image.current = e.target.value;
        document.getElementById('imageView').src = image.current;
    }

  return (
    <>
        <Nav logged={true}></Nav>
        <div className='stretch'>
            <div className="createBody">
                <article className="createSection">
                    <form onSubmit={handleSubmit} className='createPost'>
                        <div className='blogArea'>
                            <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)} className='input' placeholder='Title'/>
                        </div>
                        <div className='blogArea'>
                            <input type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} className='input' placeholder='Description'/>
                        </div>
                        <div className='blogArea'>
                            {/* <input type="file" id="imageBlog" name="image" onChange={onImageChange} className='imageInput' accept="image/png, image/jpeg"/> */}
                            <input type="text" name="image" id="image" onChange={updateImage} className='input' placeholder='Image URL' required/>
                            <img src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="uploaded" id='imageView'/>
                        </div>
                        <input type="submit" className='submitButton'/>
                    </form>
                </article>
            </div>
        </div>
    </>
  )
}

export default Create;