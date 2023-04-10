import React, { useState ,Navigate} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
function Register  () {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

 async function registerUser(e){
    e.preventDefault();
 try{
    await axios.post('/register',{
        name,
        email,
        password,
    });
alert("Registration successfully.Now you can log in");

 }catch(e){
    alert("Registration failed.Please try again later");
 }

}

    return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
       <h1 className='text-4xl text-center mb-4' >Register</h1>
       <form className='max-w-md mx-auto border' onSubmit={registerUser}>
       <input type="text" placeholder="username"
       value={name}
       onChange={e=>setName(e.target.value)}
       /> 

           <input type="email" placeholder={"youregmail.com"}
               value={email}
               onChange={e=>setEmail(e.target.value)} 
               />

           <input type="password" placeholder='password'
           value={password}
           onChange={e=>setPassword(e.target.value)} 
           />

           
           <button className='primary' >Register</button>
     <div className='text-center py-2'>
  Already have Account  <Link className="underline text-black-300" to={'/login'}>Login</Link>
     </div>
       </form>
   </div></div>
  )
}

export default Register 