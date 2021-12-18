import React from 'react';

const Product = (props) => {
    const {productName, id} = props.product;
    return (
        <div>
            <h5>{productName}</h5>
            <button>Added to Cart</button>
        </div>
    );
};

export default Product;