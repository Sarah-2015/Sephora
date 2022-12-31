import React, { useEffect, useState } from 'react'
import axios from "axios";

import Home from '../Home/Home'
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../Context/global';


export default function Fragnance() {
    let [products, setProducts] = useState([])
    const {addToCart,cart}=useAuth()
    const params= useParams()

    useEffect(() => {
   getProducts()
    
     
    }, [])
    
    const getProducts=()=>{
      const options = {
        method: 'GET',
        url: 'https://sephora.p.rapidapi.com/products/list',
        params: {categoryId: params.id, pageSize: '60', currentPage: '1'},
        headers: {
          'X-RapidAPI-Key': 'bcf01d03cbmsh149668e9058105ap1e5e3djsnc9e0c8202f3e',
          'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        }
      };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setProducts(response.data.products);
          }).catch(function (error) {
              console.error(error);
          });

        }
  return (
    <>
    <Home/>
      <div className='container py-5'>
      <div className="row g-5">
            {products.map((product,index)=><div key={index} className="col-lg-3 col-md-4 text-center ">
             
          
                <div className= {`nav-link cursor border py-1 product`}>
                <img className={"image"} src={product.heroImage} alt="product"/>  
                
                
                <p className='mt-2  px-2'>{product.displayName?.split(" ").slice(0,2).join(" ")}</p>

                <p>{product.currentSku.listPrice}</p>

                <button onClick={()=>{if(cart) {addToCart(product);}}} className={`add btn btn-dark`}>Add To Cart</button>

               
                </div>
               

                    
                 </div>
            )}
        </div>
    </div>
    </>
  )
}
