import React from 'react'
import {useAuth} from "../../Context/global.js"
import styles from './Cart.module.css'


export default function Cart() {
    let {deleteItem,decrementItem,addToCart,cart}=useAuth()
  return (
    <>
    <div className='container overflow-hidden'>
    {cart.length==0?<h1>Your Cart is empty</h1>:<h1 className='pt-4 '>Shopping Cart</h1>}
    
    <div className={styles.shoppingCart}>
    
      <div className={styles.columnLabels}>
        <label className={styles.productImage}>Image</label>
        <label className={styles.productDetails}>Product</label>
        <label className={styles.productPrice}>Price</label>
        <label className={styles.productQuantity}>Quantity</label>
      
    
      </div>
      {cart.map((product,index)=><div key={index} className={styles.product}>
        <div className={styles.productImage}>
          <img src={product.heroImage}/>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productTitle}>{product.displayName}</div>
          <p className={styles.productDescription}></p>
        </div>
        <div className={styles.productPrice}>{product.currentSku.listPrice.split("").slice(1,7).join("")}</div>
        <div className={`${styles.productQuantity} ps-3`}>{product.qty}</div>
        
      <div className={`${styles.productRemoval} d-flex  `}>
       <button
        onClick={()=>{  if(cart) {addToCart(product);}}}   className='btn btn-success me-1'> <i className="fa-solid fa-plus"  ></i> </button>
        <button  className='btn btn-dark me-1 'onClick={()=>{  if(cart) {decrementItem(product);}}}> <i className="fa-solid fa-minus"  ></i> </button>
        
        <button   className='btn btn-danger'onClick={()=>{  if(cart) {deleteItem(product);}}}> <i className="fa-solid fa-trash"  ></i> </button>
        </div>
    
       
        
        
      </div> )}
      <div className={styles.totals}>
      
      <div className={`${styles.totalsItem} ${styles.totalsItemTotal}`}>
        <label className=' fs-4 text-black'>Total</label>
        <div className={styles.totalsValue} >{cart.reduce((x,y)=>x+y.qty*y.currentSku.listPrice.split("").slice(1,7).join(""),0)}</div>
      </div>
  </div>
    
  
    

          
          <button className={styles.checkout}>Checkout</button>
    
    </div>
    </div>
     
    </>
  )
}
