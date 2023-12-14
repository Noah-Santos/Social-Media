import {useRef} from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import Form from '../Components/Form';

const SignUp = () => {
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
    <div>
        <Form data={data.current}></Form>
    </div>
  )
}

export default SignUp