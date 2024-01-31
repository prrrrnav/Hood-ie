import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = (props) => {
  const [productItinerary, setProductItinerary] = useState([]);

  // State to store product titles extracted from the product data
  const [titleItinerary, setTitleItinerary] = useState([]);
  const [searchedLowerCaseData, setsearchedLowerCaseData] = useState(null);
  const [matchedStringItemFound, setMatchedStringItemFound] = useState(null)



  async function fetchProducts() {
    try {
      let url = 'https://fakestoreapi.com/products';
      let response = await fetch(url);
      let data = await response.json();

      // Update the productItinerary state with the fetched data
      setProductItinerary(data);

      function fetchTitles() {
        data.map((key, index) => {
          titleItinerary.push(key.title.toLowerCase());
        });

      }
      fetchTitles();
    } 
    catch (error) {
      console.error(error);
    }
  }
  // setsearchedLowerCaseData(props.searchedItem.toLowerCase())





  useEffect(() => {
    function compareStrings() {
      if (searchedLowerCaseData !== null) {
        setsearchedLowerCaseData(props.searchedItem.toLowerCase())
      }
      else if(searchedLowerCaseData === null){
        setsearchedLowerCaseData(props.searchedItem)
      }
      // Mens Cotton Jacket
      // setsearchedLowerCaseData(props.searchedItem.toLowerCase())


      const matchedString = titleItinerary.find((title) => {
        return title === searchedLowerCaseData
      })
      console.log("this is your search " + searchedLowerCaseData)




      if (matchedString) {
        console.log("String are equal", matchedString)
        setMatchedStringItemFound(matchedString)
      }
    }
    compareStrings()
  },[props.searchedItem])



  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
    // console.log(titleItinerary)
  }, []);



  if (searchedLowerCaseData === null || searchedLowerCaseData !== matchedStringItemFound){
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


  //--       my task right now is to implement jsx according to match of searched item and productItinerary.title


  else if(searchedLowerCaseData === matchedStringItemFound){    
    productItinerary.map((key, index) => {
      if (key.title === matchedStringItemFound) {
        return (
          <Product key={index} image={key.image} title={key.title} desc={key.description} category={key.category} price={key.price} />
        )
        
      }
      console.log("comparison for jsx runs")
    })
  }
  else{
    return (
      <h1>Searched data not found</h1>
    )
  }
}



  export default Products;
