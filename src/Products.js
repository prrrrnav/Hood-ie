import React from 'react'
import { useEffect, useState } from 'react';
import Product from './Product'

const Products = () => {

    const [productItinerary, setProductItinerary] = useState([]);
    let [titleItinerary,setTitleItinerary] = useState([])

    async function fetchProducts() {
      try {
        let url = 'https://fakestoreapi.com/products';
        let response = await fetch(url);
        let data = await response.json();
        setProductItinerary(data);
        console.log(data)
        function fetchTitles(){
            data.map((key,index)=>{
              titleItinerary.push(key.title)
            })
            console.log(titleItinerary)
        }
        fetchTitles()
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);



  return (
    <div>
      <h2 className='trending'>Trending</h2><br></br>
      <div className='products-box'>
      
      {productItinerary.map((value, index) => (
        <Product key={index} image={value.image} title={value.title} desc={value.description} category={value.category} price={value.price} />
      ))}

    </div>
    </div>
    
  )
}

export default Products
