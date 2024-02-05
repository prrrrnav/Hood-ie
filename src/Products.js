import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = (props) => {

  const [productItinerary, setProductItinerary] = useState([]);
  const [matchLocation, setMatchLocation] = useState(null)


  // working 
  useEffect(() => {
    async function fetchProducts() {
      try {
        let url = 'https://fakestoreapi.com/products';
        let response = await fetch(url);
        let data = await response.json();

        // Update the productItinerary state with the fetched data
        setProductItinerary(data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchProducts()
  }, [])


  useEffect(() => {
    productItinerary.map((key, index) => {
      key.title = key.title.trim().toLowerCase()
      if (props.searchedItem === key.title)
        setMatchLocation(index)
    })






    // console.log(matchLocation) //here its two(2)
  }, [props.searchedItem])





  if (matchLocation === null || props.searchedItem === '') {
    return (
      <div>
        <h2 className='trending'>Trending</h2><br></br>
        <div className='products-box'>
          {
            productItinerary.map((key, index) => (
              <Product key={index} image={key.image} title={key.title} desc={key.description} category={key.category} price={key.price} />
            ))
          }
        </div>
      </div>
    );


  }
  else if (matchLocation !== null) {

    return (
      <div>
        <h2 className='trending'>Trending</h2><br></br>
        <div className='products-box'>
          <Product
            key={productItinerary[matchLocation].id}
            image={productItinerary[matchLocation].image}
            title={productItinerary[matchLocation].title}
            desc={productItinerary[matchLocation].description}
            category={productItinerary[matchLocation].category}
            price={productItinerary[matchLocation].price}
          />
        </div>
      </div>
    );


  }


}





export default Products;
