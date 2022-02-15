import React from "react";

import { Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bathtub from "../assets/image/bathtub.jpg";
import electronics from "../assets/image/electronics.jpg";
import jewel from "../assets/image/jew.jpg";
import furniture from "../assets/image/furniture.jpg";
import accessories from "../assets/image/accessories.jpg";

const ProductCategory = (props) => {
  let img;

  const settings = {
    dots: true,
    infinite: false,
    arrow: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <div className="clearfix mt-5 mb-2">
          <h4 className="float-left">categories</h4>
        </div>
        <Slider {...settings}>
          {props.categories.map(function (category) {
            if (category === "bathtub") img = bathtub;
            else if (category === "electronics") img = electronics;
            else if (category === "accessories") img = accessories;
            else if (category === "jewelry") img = jewel;
            else if (category === "furniture") img = furniture;

            return (
              <React.Fragment>
                <Link to={`/b/${category}`}>
                  <Col>
                    <Card className="shadow-none">
                      <img
                        variant="top"
                        src={img}
                        style={
                          {
                            // paddingTop: '81.25%',
                            // borderRadius: '50%',
                            // margin: '28px'
                          }
                        }
                        alt=""
                      />
                    </Card>
                    <Card.Title className="mt-5 ml-5">{category}</Card.Title>
                  </Col>
                </Link>
              </React.Fragment>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default ProductCategory;
