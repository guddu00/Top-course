import React from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import {Filter}  from "./components/Filter";
// import Cards from "./components/Cards";
const App = () => {

  return (
    <div>
      <Navbar/>
      <Filter/>
        filterData={filterData}
      <Cards/>  
    </div>
  );
};

export default App;
