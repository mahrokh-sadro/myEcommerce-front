import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductCategory from '../components/ProductCategory'
import BestSellers from '../components/BestSellers'
import Footer from '../components/Footer'
import Featureds from '../components/Featureds'
import Deals from '../components/Deals'
//can i have 2 use effect???

const HomePage = props => {


    const [categories, setCategories] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([{}]);


    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products?isBestSeller=yes`)
            .then(response => response.json())
            .then(json => {
                props.setProducts(json.data)
                console.log(json.data)
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, []);


    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products/categories`)
            .then(response => response.json())
            .then(json => {
                console.log(`useEffect`)
                setCategories(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products?isFeatured=yes`)
            .then(res => res.json())
            .then(json => {
                console.log(`----------->${json.data.length}`)
                setFeaturedProducts(json.data)
            })
            .catch(err => `Error------>${err}`)


    }, [])



    return (
        <>
            <Header />
            <Hero />
            <br />      <br />

            <Featureds products={featuredProducts} setProducts={featuredProducts} />
            <br />      <br />
            <BestSellers products={props.products} setProducts={props.setProducts} />
            <br />      <br />
            <hr />
            <ProductCategory categories={categories} setCategories={setCategories} />

            <br />      <br />
            <Deals />
            <br />      <br />
            <hr />
            <Footer />
        </>
    )
}

export default HomePage
