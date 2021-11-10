import React from 'react'

import { Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const products = [{
    "_id": "6184b45780d5f3aef8055a43",
    "name": "lamp",
    "price": 36,
    "description": "dadadadadadadda",
    "category": "furniture",
    "quantity": 88,
    "isBestSeller": true,
    "isFeatured": true,
    "photoURL": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    ],
}, {
    "_id": "6184b3f280d5f3aef8055a38",
    "name": "vase",
    "price": 36,
    "description": "dadadadadadadda",
    "category": "accessories",
    "quantity": 88,
    "isBestSeller": true,
    "isFeatured": true,
    "photoURL": [
        "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],

}, {
    "_id": "6178c8ae43ce60fc37786e6e",
    "name": "bag",
    "price": 40,
    "description": "fhyytnlkmkjbhgv ggggoll ttttt",
    "category": "accessories",
    "quantity": 83,
    "isBestSeller": true,
    "photoURL": [
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    ],
}, {
    "_id": "617b0a7d868966853e5ef90a",
    "name": "candle",
    "price": 36,
    "description": "dadadadadadadda",
    "category": "accessories",
    "quantity": 88,
    "isBestSeller": true,
    "photoURL": [
        "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    ],
}, {
    "_id": "6178c8ab43ce60fc37786e6d",
    "name": "laptop",
    "price": 50,
    "description": "fhyytnlkmkjbhgv ggggoll ttttt",
    "category": "electronics",
    "quantity": 83,
    "isBestSeller": true,
    "photoURL": [
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    ],
}]



const Deals = props => {
    const settings = {
        dots: true,
        infinite: false,

        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container>
                <div className="clearfix mt-5 mb-2">
                    <h4 className="float-left">Today's Deals</h4>
                    {/* <Link className="float-right text-uppercase" to="/">
                        see all
        </Link> */}
                </div>
                <Slider {...settings}>
                    {products.map(function (product) {
                        return (
                            <React.Fragment>
                                <Link to={`/product/details/${product._id}`}>
                                    <Col>
                                        <Card >
                                            <Card.Img
                                                variant="top"
                                                src={product.photoURL}
                                                style={{
                                                    width: "12rem",
                                                    height: "12rem",
                                                    objectFit: "cover",
                                                    display: "block",
                                                    margin: "2px"

                                                }}
                                            />

                                        </Card>
                                    </Col>
                                </Link>
                            </React.Fragment>
                        );
                    })}
                </Slider>
            </Container>
        </>
    )
}

export default Deals
