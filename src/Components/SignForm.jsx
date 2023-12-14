import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const SignForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(sessionStorage.getItem("authenticated")|| false)
    const [people, setPeople] = useState([]);

    // useEffect(async()=>{
    //     let result = await fetch('http://localhost:5000/users',{
    //         method: 'Get',
    //         // body: JSON.stringify({name, email}),
    //         // headers: {'Content-Type': 'application/json'},
    //     })
    //     setPeople(result);
    // }, []);

    console.log(people)

    // New handle submit for forms
    const handleSubmit = (e)=>{
        e.preventDefault();
        people.map(person=>{
            if(email === person.email && password === person.password){
                setLogin(true);
                sessionStorage.setItem('authenticated', true);
            }
        })
    }

    if(login){
        window.location.replace('/home');
    }

    return (
        <>
            <article>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-control">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <Link to={'/'} className='account'>Create Account</Link>
            </article>
        </>
    )
}

export default SignForm;