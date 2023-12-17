import {useRef} from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import SignForm from '../Components/SignForm';

const SignIn = () => {
  const data = useRef([
    {
      title: 'email',
      type: 'email',
      id:1,
    },
    {
      title: 'password',
      type: 'password',
      id:2,
    },
  ])

  if(sessionStorage.getItem("authenticated") == 'true'){
    window.location.replace('/home');
  }

  return (
    <>
      <Nav  logged={false}></Nav>
      <div className='stretch'>
        <SignForm></SignForm>
      </div>
    </>
  )
}

export default SignIn