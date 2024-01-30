import Navbar from './Navbar';
import Products from './Products';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [searchData, setSearchData] = useState(null)

  const fixingChildDataNeed = (data) => {
    setSearchData(data)
    console.log("data searhched",searchData);
  }
  


  return (
    <div className="App">
      <Navbar setSearchData={fixingChildDataNeed} />
      <Products searchedItem={searchData}/>
    </div>
  );
}

export default App;
