import { useEffect } from 'react';
import { auth } from './firebase';
import { useAuth } from './Context/global.js';
import './App.css';
import { createHashRouter, RouterProvider} from "react-router-dom";
import MasterLayout from './Components/MasterLayout/MasterLayout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart';
import Hair from './Components/Hair/Hair';
import Skincare from './Components/Skincare/Skincare';
import Fragnance from './Components/Fragnance/fragnance';
import Makeup from './Components/Makeup/Makeup';
import Bath from './Components/Bath/Bath';
import Tools from './Components/Tools/Tools';









function App() {


  const {dispatch}=useAuth()
  useEffect(() => {
   auth.onAuthStateChanged((authUser)=>{
    if(authUser)
    {
      dispatch({
        type:"SET_USER",
        user:authUser
   
      });
    }
    else{
      dispatch({
        type:"SET_USER",
        user:null
   
      });
    
    }
   });
  

  }, [])
  

  let routes=createHashRouter([{path:"/" ,element:<MasterLayout/>,children:[
    
    {index:true, element:<Makeup/>},
    {path:"/fragnance/:id", element:<Fragnance/>},
    {path:"/bath/:id", element:<Bath/>},
    {path:"/hair/:id", element:<Hair/>},
    {path:"/skincare/:id", element:<Skincare/>},
    {path:"/tools/:id", element:<Tools/>},

    {path:"/cart", element:<Cart/>},
  {path:"/login", element:<Login/>},
  {path:"/register", element:<Register/>}

] }])
  return (
    
    <RouterProvider router={routes}/>
  );
}

export default App;
