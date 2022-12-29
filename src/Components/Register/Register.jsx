import React, { useState } from 'react'
import {auth} from "../../firebase.js"
import {createUserWithEmailAndPassword,updateProfile,updateCurrentUser} from "firebase/auth"
import {useAuth} from "../../Context/global.js"

import {useNavigate} from "react-router-dom"

export default function Register() {
    const {user}=useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    
    let navigate=useNavigate()

    const register=async(e)=>{
        e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((auth)=>
        {
            if(auth)
            {

            navigate("/login")
            return  updateProfile(auth.user,{
              displayName: name
            })
            
        }
        

    }).catch(function(error) {
      console.log(error);
    });
}
  return (
    <>
    <div className="container w-50 m-auto border my-5 p-3 ">
    <h1 className="h4">Create account</h1>

     <form onSubmit={register} className='my-3' >
          
        <div className=" ">
        <input  className='form-control ' type='text' placeholder='Name' name='first_name'
        onChange={(e)=>setName(e.target.value)} />
    
        </div>
         
       
          <input  className='form-control my-2' type='email' placeholder='Email'name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
         
      
   

    <input  className='form-control my-2' type='password' placeholder='Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         
        

          
        <div className="">
       <button className='btn btn-dark my-3 w-100 ' type='submit' >Continue</button>
       </div>

        </form>
        <div  className="my-3">By creating an account, you agree to Amazon's <a href="/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&amp;nodeId=508088">Conditions of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&amp;nodeId=468496">Privacy Notice</a>.
        </div>
        </div>
    </>
  )
}
