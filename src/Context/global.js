import { createContext, useContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import {initialState} from "./AppReducer";



 export const GlobalContext=createContext(0)


export default function GlobalContextProvider ({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState)
  
    const [cart, setCart] = useState([])

    useEffect(() => {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
          
    
    }, [])
    
    const saveCartData=()=>{
      localStorage.setItem("cart",JSON.stringify(cart))
     }
    
    const addToCart=(item)=>{
    let exist= cart.find((elem)=>elem.productId===item.productId)
    if(exist){
      let basket= cart.map((elem)=>elem.productId===item.productId?{...exist,qty:exist.qty+1}:elem)
      setCart(basket)
      console.log(basket);
      saveCartData();
   

    }
    else{
      setCart([...cart,{...item,qty:1}])
      saveCartData();
      console.log("hello");
    }
   
    }

    const decrementItem=(item)=>{
      let exist= cart.find((elem)=>elem.productId===item.productId)
      if(exist.qty>1){
    let basket= cart.map((elem)=>elem.productId===item.productId?{...exist,qty:exist.qty-1}:elem)
        setCart(basket)
        console.log(basket);
        saveCartData();
     }

    }
    
    const deleteItem=(item)=>{
      let basket = cart.filter((elem)=>elem.productId!=item.productId)
      setCart(basket)
      saveCartData();
    }
  

   
  return (
    <GlobalContext.Provider value={{basket:state.basket , user:state.user, dispatch:dispatch ,addToCart:addToCart,cart:cart,decrementItem:decrementItem,deleteItem:deleteItem}}>
        {children}
    </GlobalContext.Provider>
  )
}
 export const useAuth=()=>{
    return useContext(GlobalContext)
}

