import React, { useState, useEffect } from "react";
import { listByCategory } from "./apiCore";

const SearchBar = () => {
  const [thedata, setTheData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = thedata;

  useEffect(() => {
    fetch(`http://localhost:5000/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        // console.log("json.data---->" + json.data);
        // console.log("thedata---->" + thedata);
        setTheData({ ...thedata, categories: json.data });
        // console.log("thedata---->" + thedata);
      })
      .catch((err) => console.log(err));
  }, []);


const searchData=()=>{
 // console.log(search, category);
 if (search) {
  // setTheData({ ...thedata, results: response, searched: true });
//http://localhost:5000/products?category=furniture

fetch(`http://localhost:5000/products?category=${search}`)
.then(res=>{
    res.json()
    console.log( search)
    // console.log( res.data)
})
.then(json=>{
    
    console.log(json)


})
.catch(err=>console.log(err))

            
 }
    

}


const searchSubmit=e=>{
    e.preventDefault();
    searchData();
}

const handleChange=name=>event=>{
    setTheData({...thedata,[name]:event.target.value, searched:false})
}

  return (
    <div className="row">
      {/* <div className="container mb-3">searchForm()</div> */}
      {/* <div className="container-fluid mb-3">searchedProducts(results)</div> */}
     {/*  <div>{JSON.stringify(categories)}</div> */}
    </div>
  );
};

export default SearchBar;
