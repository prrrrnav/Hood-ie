import Navbar from './Navbar';
import Products from './Products';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [searchData, setSearchData] = useState(null)
  const fixingChildDataNeed = (data) => {
    if(searchData !== null){
      setSearchData(data)
      // console.log("data is not null --> "+data)
    }
    else if (searchData === null){
      setSearchData(data)
      // console.log("data is not null --> "+data)
      // console.log(searchData)
    }
  }
  return (
    <div className="App">
      <Navbar setSearchData={fixingChildDataNeed} />
      <Products searchedItem={searchData}/>
    </div>
  );
}

export default App;


// now navbar is working right and App.js is working right
// task- do correct two re renders and of products component it renders before and after data fetching