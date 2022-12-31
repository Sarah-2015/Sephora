import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

import {signInWithEmailAndPassword} from "firebase/auth"

import {useAuth} from "../../Context/global.js"
import { auth } from '../../firebase.js'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate=useNavigate()
    const login=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((auth)=>
        {
            if(auth){
           navigate ("/");
            }
    })
    }
 
  return (
    
    <div className="container border rounded w-50 m-auto  my-5">
   
    
    <div className=" text-center py-3">
     
  
      <h1 className='h4' >Sign In</h1>
      <form onSubmit={login}  className='my-3' >
  
        <input className='form-control my-2' type='email' placeholder='Email'name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          
        

        <input  className='form-control my-2' type='password' placeholder='Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
         
        
        <div className="">
     <button type='submit' className='btn btn-dark my-3 w-100 fw-bold' >Sign In</button>
     </div>

      </form>
      <hr/>
      <div  className="text-center ">
        <span  className="small">Not a member yet? </span>
        <Link  className="small  text-decoration-none" to="/register"> Create Your Amazon Account
        <i className="fas fa-chevron-right small"></i>
        </Link>
        </div>
     
    
      
      </div>
  </div>

 
  )
}
