import React, { useEffect, useState } from 'react'
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    let [products, setProducts] = useState([])


    var setting = {
    
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
      
   
    };
 
    useEffect(() => {
      getProducts()
    
     
    }, [])
    const getProducts=()=>{
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
    
  
 
  return (
    <>
<div className={` mt-3 pt-5`}>
<div className="container ">
<div className="row  py-3">
  <Slider {...setting}>
    {products.map((product,index)=><div key={index} className='col-3 p-2 '>
    <div className= {` cursor    `}>
        <img className="w-100" src={product.heroImage} alt="product"/>  
        </div>

    </div>)}

  </Slider>
  </div>

</div>
</div>





    </>
  )
}
