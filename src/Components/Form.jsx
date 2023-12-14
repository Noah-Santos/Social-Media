import React from 'react';
import { Link } from "react-router-dom";

const Form = ({data, location}) => {
    console.log(data)
  return (
    <div>
        {data.map(entry=>{
            return(
                <input type={entry.type} key={entry.id} placeholder={entry.title}/>
            )
        })}
        {(location == 'sign') ? <Link to={'/sign'} className='account'>Sign In</Link> : <Link to={'/'} className='account'>Create Account</Link>}
    </div>
  )
}

export default Form;