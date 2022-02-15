import React from "react";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <Link to="/b/furniture">
            <MDBCarouselElement
              src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="..."
              style={{ maxHeight: "40rem", "object-fit": "cover" }}
            />
            <MDBCarouselCaption>
              <h1 className=" text-dark ">Love Deals? Look No Further.</h1>
            </MDBCarouselCaption>
          </Link>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <Link to="/b/jewelry">
            <MDBCarouselElement
              src="https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="..."
              style={{ maxHeight: "40rem", "object-fit": "cover" }}
            />
            <MDBCarouselCaption>
              <h1 className=" text-dark ">
                No Selling Fees On Jewelry Over $500
              </h1>
            </MDBCarouselCaption>
          </Link>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <Link to="/b/accessories">
            <MDBCarouselElement
              src="https://images.unsplash.com/photo-1580064141068-f42c18d153f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
              alt="..."
              style={{ maxHeight: "40rem", "object-fit": "cover" }}
            />
            <MDBCarouselCaption>
              <h1 className=" text-dark ">
                We've Got A Feeling You'll Love This
              </h1>
            </MDBCarouselCaption>
          </Link>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Hero;
