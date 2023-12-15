import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const SignForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(sessionStorage.getItem("authenticated") || false)
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users').then(response =>{
            return response.json();
        }).then(res=>{
            setPeople(res);
        });
    }, []);

    console.log(people)
    console.log(people.data)

    // New handle submit for forms
    const handleSubmit = (e)=>{
        e.preventDefault();
        people.data.map(person=>{
            if(email === person.email && password === person.password){
                sessionStorage.setItem('authenticated', true);
                sessionStorage.setItem('currentUser', JSON.stringify([person.id, person.name, person.email]));
                setLogin(true);
            }
        })
    }

    if(login == true){
        window.location.replace('/home');
        console.log(login)
    }

    return (
        <>
            <article>
                <form onSubmit={handleSubmit} >
                    <div >
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input' placeholder='Email'/>
                    </div>
                    <div >
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password'/>
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <Link to={'/'} className='account'>Create Account</Link>
            </article>
        </>
    )
}

export default SignForm;