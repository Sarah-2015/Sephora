import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {useAuth} from "../../Context/global.js"
import { auth } from '../../firebase'



export default function Navbar() {
    const{user,cart}=useAuth()

    console.log(user);
    
    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
            console.log("hello");
        }
      
       
    }
 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <Link className="navbar-brand fw-bold" to={"/"}>S E P H O R A</Link>
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink  className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold ' : '  nav-link ')} to={"/Makeup/cat140006"} >Makeup</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold ' : ' nav-link ')} to={"/skincare/cat150006"} >Skincare</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold ' : '  nav-link ')} to={"/hair/cat130038"} >Hair</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold ' : '  nav-link ')} to={"/fragnance/cat160006"} >Fragrance</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold ' : '  nav-link ')} to={"/tools/cat130042"} >Tools & Brushes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold ' : '  nav-link ')} to={"/bath/cat140014"} >Bath & Body</NavLink>
        </li>


        </ul>
        
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <span className='nav-link text-white '>Hello {user?user.displayName:"Guest"}</span>
        </li>

        <li className="nav-item ">
        <Link to={"/login"} className="nav-link "  onClick={handleAuthentication} >{user?"Sign Out":"Sign in"}</Link>
        </li>

        
        
        <li className="nav-item">
        
        <NavLink className={({ isActive }) => (isActive ? ' nav-link text-white  fw-bold position-relative ' : ' nav-link text-white position-relative ')}  to={"/cart"}><i className="fa-solid fa-cart-shopping "><span className="position-absolute  top-25 start-25 ms-1 translate-middle badge fs-6    ">{cart.reduce((x,y)=>x+y.qty,0)}</span></i></NavLink>
        </li>

        </ul>
     
    </div>
  </div>
</nav>

</>
  )
}
