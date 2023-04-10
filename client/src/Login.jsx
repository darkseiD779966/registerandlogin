import React, { useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import axios from "axios";
function login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[redirect,setRedirect]=useState(false);
    async function handleSubmit (e) {
        e.preventDefault(); 
      try{
        await axios.post('/login',{email,password});
    alert("login successfull");
    setRedirect(true);
    }catch(e){
alert("login failed");
    }
}
if(redirect){
    return <Navigate to={'/'} />
}
  return (
    <div className='mt-4 grow flex items-center justify-around'>
     <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4' >Login</h1>
        <form className='max-w-md mx-auto border' onSubmit={handleSubmit}>
            <input type="email" placeholder={"youregmail.com"}
            value={email} 
            onChange={e=>setEmail(e.target.value)}
            />
            <input type="password" placeholder='password' 
            value={password} 
            onChange={e=>setPassword(e.target.value)}
            />
            <button className='primary' >Login</button>
      <div className='text-center py-2'>
        Dont have an Account yet?  <Link className="underline-text" to={'/register'}>Register</Link>
      </div>
        </form>
    </div></div>
  )
}

export default login