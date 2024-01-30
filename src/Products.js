import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = (props) => {
  const [productItinerary, setProductItinerary] = useState([]);

  // State to store product titles extracted from the product data
  const [titleItinerary, setTitleItinerary] = useState([]);
  const [lowerCaseTitles, setLowerCaseTitles] = useState([]);



  async function fetchProducts() {
    try {
      let url = 'https://fakestoreapi.com/products';
      let response = await fetch(url);
      let data = await response.json();

      // Update the productItinerary state with the fetched data
      setProductItinerary(data);
      // console.log("printing library", data)

      // Function to extract titles from the fetched data and update titleItinerary state
      function fetchTitles() {
        data.map((key, index) => {
          titleItinerary.push(key.title);
        });
        
      }
      // Call the function to fetch titles
      fetchTitles();
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    function compareStrings() {
    
      const lowerCaseTitlesCopy = []
      titleItinerary.map((key, index) => {
        let element = key.toLowerCase()
        lowerCaseTitlesCopy.push(element)
      })
      setLowerCaseTitles(lowerCaseTitlesCopy)


      const matchedString = lowerCaseTitles.find((title) => {
        return title === props.searchedItem
      })

      if (matchedString) {
        console.log("String are equal", matchedString)
      }
    }
    compareStrings()

  }, [props.searchedItem])



  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
    // console.log(titleItinerary)
  }, []);

  return (
    <div>
      {/* Section header */}
      <h2 className='trending'>Trending</h2><br></br>
      <div className='products-box'>
        {/* Map through the productItinerary state to render Product components */}
        {productItinerary.map((value, index) => (
          <Product key={index} image={value.image} title={value.title} desc={value.description} category={value.category} price={value.price} />
        ))}
      </div>
    </div>
  );
}

export default Products;
