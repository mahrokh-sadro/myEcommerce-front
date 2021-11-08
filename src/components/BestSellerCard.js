import React from 'react'


//fix the anchor tag

const BestSellerCard = props => {
    return (

        <div>
            <h5>{props.name}</h5>
            <a href={`/product/details/${props.id}`}>
                <img src={props.image} alt={props.name} style={{ "max-height": '14rem', "object-fit": "cover" }} />
            </a>

        </div>


    )
}

export default BestSellerCard
