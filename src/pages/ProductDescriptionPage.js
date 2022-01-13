// //export default ProductDescriptionPage
// import React from "react";
// import axios from "axios";

// import { useEffect, useState } from "react";
// // import { useParams } from 'react-router-dom'
// // import ProductList from "../components/ProductList";
// //import { useDispatch } from 'react-redux';

// import {
//   MDBCard,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";

// import Header from "../components/Header";

// // function GetId() {

// //     const { id } = useParams();
// //     console.log(id);

// //     return (
// //         <div>
// //             {id}
// //         </div>
// //     );
// // }

// const ProductDescriptionPage = () => {
//   // const params = useParams();         crashes
//   let id = window.location.pathname;
//   //   console.log("id : " + id);
//   let arr = [];
//   arr = id.split("/");
//   console.log(arr[3]);
//   id = arr[3];
//   console.log("id : " + id);

//   const [product, setProduct] = useState({
//     name: "",
//     price: 0,
//     description: "",
//     category: "",
//     quantity: "",
//     isBestSeller: true,
//     photoURL: "",
//   });

//   //   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     //communicate with the backend!
//     fetch(`http://localhost:5000/products/${id}`)
//         .then((response) => {
//           // console.log(response);
//           response.json();
//         })
//       .then((json) => {
//         setProduct(json.data);
//         // console.log(json);
//       })
//       .catch((err) => {
//         console.log(`Error ${err}`);
//       });
//   }, []);

//   //   useEffect(() => {
//   //     fetch(`http://localhost:5000/products/related/${product._id}`)
//   //       .then((res) => {
//   //         console.log("---->" + product._id);
//   //         res.json();
//   //       })
//   //       .then((json) => {
//   //         setRelatedProducts(json.data);
//   //         console.log("relatedProducts  " + relatedProducts);
//   //       })
//   //       .catch((err) => {
//   //         console.log(`Error ${err}`);
//   //       });
//   //   }, []);

//   //   useEffect(() => {
//   //     axios
//   //       .get(`http://localhost:5000/products/related/${product._id}`)
//   //       //   .then((res) => {
//   //       //     console.log("---->" + product._id);
//   //       //     res.json();
//   //       //   })
//   //       .then((json) => {
//   //         setRelatedProducts(json.data);
//   //         console.log("relatedProducts  " + relatedProducts);
//   //       })
//   //       .catch((err) => {
//   //         console.log(`Error ${err}`);
//   //       });
//   //   }, []);

//   return (
//     <>
//       {/* {product.name} */}
//       {/* <Header />
//       <MDBCard style={{ width: "70rem", margin: "auto auto auto auto" }}>
//         <MDBRow className="g-0 align-items-center">
//           <MDBCol md="6">
//             <MDBCardImage
//               src={product.photoURL}
//               alt="..."
//               fluid
//               style={{ height: "30rem", "object-fit": "cover" }}
//             />
//           </MDBCol>
//           <MDBCol md="6">
//             <MDBCardBody>
//               <MDBCardTitle> {product.name}</MDBCardTitle>
//               <MDBCardText>
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </MDBCardText>
//               <MDBCardText>
//                 <small className="text-muted">Last updated 3 mins ago</small>
//               </MDBCardText>
//               <MDBCardText>{product.category} </MDBCardText>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard> */}
//       {/* <p>{relatedProducts?.map((e) => e?.name)}</p> */}

//   {product.name}
//   {product.price}
//   {product.description}
//   {product.category}
//   <img src={product.photoURL} alt="" />
//     </>
//   );
// };

// export default ProductDescriptionPage;
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const ProductDescriptionPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    photoURL: "",
  });

  const [relatedProducts, setRelatedProduct] = useState([]);

  useEffect(() => {
    //communicate with the backend!
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        //We updated the data returned from the Backed with the resort state
        setProduct(json.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  useEffect(() => {
    //communicate with the backend!
    fetch(`http://localhost:5000/products/related/${id}`)
      .then((response) => response.json())
      .then((json) => {
        //We updated the data returned from the Backed with the resort state
        setRelatedProduct(json.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <>
      <Header />
      <ProductDescription product={product} />

      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">Related products</h2>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relatedProducts?.map((e) => (
              <RelatedProducts product={e} />
            ))}
          </div>
        </div>
      </section>
      {/* <RelatedProducts products={relatedProducts} /> */}
      <Footer />
    </>
  );
};

export default ProductDescriptionPage;
