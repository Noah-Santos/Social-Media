import {useRef} from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import SignForm from '../Components/SignForm';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
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
    navigate('/home');
    // window.location.replace('/home');
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