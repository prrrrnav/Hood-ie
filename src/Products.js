import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = (props) => {

  const [productItinerary, setProductItinerary] = useState([]);

  // State to store product titles extracted from the product data
  const [titleItinerary, setTitleItinerary] = useState([]);
  const [searchedLowerCaseData, setSearchedLowerCaseData] = useState(null);


  const [searchStringMatched, setSearchStringMatched] = useState(null)


  console.log(props.searchedItem)

  // working 
  useEffect(()=>{
    async function fetchProducts() {
      try {
        let url = 'https://fakestoreapi.com/products';
        let response = await fetch(url);
        let data = await response.json();
  
        // Update the productItinerary state with the fetched data
        setProductItinerary(data);
  
        function fetchTitles() {
          const updatedTitles = data.map((key) => key.title.toLowerCase().trim());
          setTitleItinerary(updatedTitles);
        }
        fetchTitles();
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  },[])
  





  // working  ps both searched and arr item's spaces are removed with trim
  useEffect(() => {
    function compareStrings() {
      let matchedString = titleItinerary.find((title) => {
        return title === searchedLowerCaseData
      })

      if (matchedString) {
        // console.log("String are same", matchedString)
        setSearchStringMatched(matchedString === null ? matchedString : matchedString.toLowerCase());
      }
    }

    // working
    function searchedDataLowercased() {
      if (searchedLowerCaseData !== null) {
        setSearchedLowerCaseData(props.searchedItem.toLowerCase())
        // console.log("searched data low cased  ---> " + searchedLowerCaseData)
      }
      else if (searchedLowerCaseData === null) {
        setSearchedLowerCaseData(props.searchedItem)
        // console.log("searched data not yet low cased --> " + searchedLowerCaseData)
      }
    }
    searchedDataLowercased()


    compareStrings()
  }, [props.searchedItem])






  // console.log(typeof searchStringMatched)
  // console.log(typeof searchedLowerCaseData)

  // not working
  if (searchStringMatched === null || searchedLowerCaseData !== searchStringMatched) {
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


  else if (searchedLowerCaseData === searchStringMatched) {
    // Use the filter function to find the matched product
    const matchedProduct = productItinerary.filter((key) => key.title === searchStringMatched);
    // console.log(matchedProduct)
    // Check if a matched product is found
    if (searchedLowerCaseData === searchStringMatched) {
      // Return a message if no matched product is found
      return <h1>Searched data not found</h1>;
    }

    return (
      <div>
        {/* Render the matched product */}
        <Product
          key={matchedProduct[0].id}
          image={matchedProduct[0].image}
          title={matchedProduct[0].title}
          desc={matchedProduct[0].description}
          category={matchedProduct[0].category}
          price={matchedProduct[0].price}
        />
      </div>
    );

  }


}



export default Products;
