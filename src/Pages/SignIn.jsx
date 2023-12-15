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

  return (
    <>
      <Nav  logged={false}></Nav>
      <div>
        <SignForm></SignForm>
      </div>
    </>
  )
}

export default SignIn