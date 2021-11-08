//export default ProductDescriptionPage


import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ProductList from "../components/ProductList";
//import { useDispatch } from 'react-redux';


import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';




// function GetId() {

//     const { id } = useParams();
//     console.log(id);

//     return (
//         <div>
//             {id}
//         </div>
//     );
// }

const ProductDescriptionPage = () => {


    // const params = useParams();         crashes
    let id = window.location.pathname;
    console.log("id : " + id);
    let arr = [];
    arr = id.split("/");
    console.log(arr[3]);
    id = arr[3];


    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
        category: "",
        quantity: "",
        isBestSeller: true,
        photoURL: ""
    })


    useEffect(() => {

        //communicate with the backend!
        fetch(`http://localhost:5000/products/${id}`)
            .then(response => response.json())
            .then(json => {

                //We updated the data returned from the Backed with the resort state
                setProduct(json.data);

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, [])

    return (
        <>
            <MDBCard style={{ width: "70rem", margin: "auto auto auto auto" }} >
                <MDBRow className='g-0 align-items-center'>
                    <MDBCol md='6' >
                        <MDBCardImage src={product.photoURL} alt='...' fluid style={{ height: "30rem", "object-fit": "cover" }} />
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardBody>
                            <MDBCardTitle> {product.name}</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This
                                content is a little bit longer.
            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardText>
                            <MDBCardText>{product.category}  </MDBCardText>

                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </>

        //                     {product.name}
        //                     {product.price}
        //                     {product.description}
        //                     {product.category}
        //                     <img src={product.photoURL} alt="" />

    )
}


export default ProductDescriptionPage