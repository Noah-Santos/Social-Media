import {useState} from 'react';
import { Link } from "react-router-dom";

const LogForm = ({data, location}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(sessionStorage.getItem("authenticated")|| false)
  const [people, setPeople] = useState([
      {
          firstName: 'Noah',
          email: 'test@gmail.com',
          password: '12345'
      }
  ]);

  // New handle submit for forms
  const handleSubmit = (e)=>{
      e.preventDefault();
      people.map(person=>{
          if(firstName === person.firstName && email === person.email && password === person.password){
              setLogin(true);
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
                    <label htmlFor="firstName">Name:</label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
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
        </article>
        <Link to={'/sign'} className='account'>Sign In</Link>
    </>
  )
}

export default LogForm;