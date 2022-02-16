import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";
import { read, listRelated } from "../components/apiCore";
import { Link } from "react-router-dom";

const ProductDescriptionPage = () => {
  const { id } = useParams();
  console.log("id:" + id);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    photoURL: "",
  });

  const [relatedProducts, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   fetch(`https://eemart.herokuapp.com/products/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setProduct(json.data);
  //     })
  //     .catch((err) => {
  //       console.log(`Error ${err}`);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch(`https://eemart.herokuapp.com/products/related/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setRelatedProduct(json.data);
  //     })
  //     .catch((err) => {
  //       console.log(`Error ${err}`);
  //     });
  // }, []);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data.data);
        console.log("products:" + data.data._id);

        listRelated(data.data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data.data);
            console.log("relatedProducts:" + relatedProducts);
          }
        });
      }
    });
  };

  useEffect(() => {
    // const productId = id;
    loadSingleProduct(id);
  }, [id]);

  return (
    <>
      <Header />
      <ProductDescription product={product} />

      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">Related products</h2>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relatedProducts?.map((e) => (
              <Link to={`/product/details/${e._id}`}>
                <RelatedProducts product={e} />
              </Link>
            ))}
            {/* {JSON.stringify(relatedProducts)} */}
            {/* <RelatedProducts id={id} /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDescriptionPage;
