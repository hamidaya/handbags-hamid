import React from 'react';

const Product = (props) => {

    return (

        <article className="product">
            <span className="label"> {props.label}</span>
            <img src={props.image} alt={props.image}/>
            <h4 className="product-name">{props.price}</h4>
            <p className="product-description">{props.name}</p>
        </article>
    );
};

export default Product;