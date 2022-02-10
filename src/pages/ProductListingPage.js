import React from "react";

import { useState } from "react";

import Header from "../components/Header";
import Filter from "../components/Filter";

const ProductListingPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <Filter />
    </div>
  );
};

export default ProductListingPage;
