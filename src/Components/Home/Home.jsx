import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useAuth} from "../../Context/global.js"

import header2 from '../../images/header2.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useParams } from 'react-router-dom';



export default function Home() {
    let [products, setProducts] = useState([])
    const {addToCart,cart}=useAuth()
    const params= useParams()
    var settings = {
   
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500
    };
    var setting = {
    
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
      
   
    };
 
    useEffect(() => {
      get()
    
     
    }, [])
    const get=()=>{
      const options = {
        method: 'GET',
        url: 'https://sephora.p.rapidapi.com/products/list',
        params: {categoryId: "cat60270", pageSize: '60', currentPage: '1'},
        headers: {
          'X-RapidAPI-Key': 'bcf01d03cbmsh149668e9058105ap1e5e3djsnc9e0c8202f3e',
          'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        }
      };
    axios.request(options).then(function (response) {
      setProducts(response.data.products);;
    }).catch(function (error) {
      console.error(error);
    });
  }
    
    const getProducts=()=>{
      const options = {
        method: 'GET',
        url: 'https://unofficial-shein.p.rapidapi.com/products/list',
        params: {
          cat_id: '1779',
          adp: '10170797',
          language: 'en',
          country: 'US',
          currency: 'USD',
          sort: '7',
          limit: '20',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'bcf01d03cbmsh149668e9058105ap1e5e3djsnc9e0c8202f3e',
          'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setProducts(response.data.info.products);
      }).catch(function (error) {
        console.error(error);
      });

    }
 
  return (
    <>
    <Slider {...settings}>

    <div className="" >
      <img src={header2} className="d-block w-100" alt="..."/>
    </div>
  
 
</Slider>
<div className="container">
<div className="row py-4">
  <Slider {...setting}>
    {products.map((product,index)=><div key={index} className='col-2 p-2 '>
    <div className= {` cursor    `}>
        <img className="w-100" src={product.heroImage} alt="product"/>  
        </div>

    </div>)}

  </Slider>
  </div>

</div>





    </>
  )
}
