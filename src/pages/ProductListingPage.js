

import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList'
import MyPagination from '../components/MyPagination'
import Header from '../components/Header'

const ProductListingPage = props => {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products`);
            props.setProducts(res.data.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);


    // console.log(posts)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div >
            <Header />
            <ProductList posts={currentPosts} loading={loading} />
            <MyPagination
                postsPerPage={postsPerPage}
                totalPosts={props.products.length}
                paginate={paginate}
            />
        </div>
    );
};

export default ProductListingPage

