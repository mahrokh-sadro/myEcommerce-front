import React from 'react'
import { useEffect, useState } from "react";

import ProductsListByCat from '../components/ProductsListByCat'
import Header from '../components/Header'
import Grid from '@material-ui/core/Grid';

const ProductCategoryPage = () => {

    const path = window.location.pathname;
    console.log(path);
    let arr = [];
    arr = path.split("/");
    console.log(arr[2]);
    let cat = arr[2];

    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        //communicate with the backend!
        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products?category=${cat}`)
            .then(response => response.json())
            .then(json => {
                console.log(json.data);
                //We updated the data returned from the Backed with the resort state
                setProducts(json.data);
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })
    }, [])


    return (
        <div>

            <Header />
            {/* <h1>   ProductCategoryPage
            </h1> */}
            <ProductsListByCat />

        </div>
    )
}

export default ProductCategoryPage
