import {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

const LogForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(sessionStorage.getItem("authenticated")|| false)
  const [people, setPeople] = useState([]);
  const taken = useRef(false);

    useEffect(()=>{
        fetch('http://localhost:5000/users').then(response =>{
            return response.json();
        }).then(res=>{
            setPeople(res);
        });
    }, []);

  // New handle submit for forms
  const handleSubmit = (e)=>{
      e.preventDefault();
      people.data.map(person=>{
          if(email === person.email){
              taken.current = true;
          }
      })

      if(taken.current == true){
        alert('Email is already taken')
      }else{
        fetch('http://localhost:5000/users',{
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        sessionStorage.setItem('authenticated', true);
        setLogin(true);
      }
  }

  if(login == true){
      window.location.replace('/sign');
  }

  return (
    <div className='loginBody'>
        <article className='loginSection'>
            <form onSubmit={handleSubmit} className='loginForm'>
                <div className='loginArea'>
                    {/* <label htmlFor="name">Name:</label> */}
                    <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className='input' placeholder='Name'/>
                </div>
                <div className='loginArea'>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input' placeholder='Email'/>
                </div>
                <div className='loginArea'>
                    {/* <label htmlFor="password">Password:</label> */}
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password'/>
                </div>
                <button type='submit' className='submitButton'>Create Account</button>
            </form>
            <p className='gotIt'>Already have an account? <Link to={'/sign'} className='account'>Sign In</Link></p>
        </article>
    </div>
  )
}

export default LogForm;