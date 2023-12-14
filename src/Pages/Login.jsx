import {useRef} from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import Form from '../Components/Form';

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
    <div>
        <Form data={data.current}  location='sign'></Form>
    </div>
  )
}

export default Login