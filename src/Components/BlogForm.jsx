import React from 'react'

const BlogForm = () => {
  return (
    <div>
        <form action="/action_page.php">
            <div className='blogArea'>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className='input' placeholder='Name'/>
            </div>
            <div className='blogArea'>
                <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input' placeholder='Email'/>
            </div>
            <div className='blogArea'>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password'/>
            </div>
            <input type="file" id="myFile" name="filename"/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default BlogForm;