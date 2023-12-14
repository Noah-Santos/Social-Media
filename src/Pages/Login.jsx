import {useRef} from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import LogForm from '../Components/LogForm';

const Login = () => {
  const data = useRef([
    {
      title: 'name',
      type: 'text',
      id:1,
    },
    {
      title: 'email',
      type: 'email',
      id:2,
    },
    {
      title: 'password',
      type: 'password',
      id:3,
    },
  ])

  return (
    <>
      <Nav  logged={false}></Nav>
      <div>
        <LogForm></LogForm>
      </div>
    </>
  )
}

export default Login