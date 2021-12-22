import React from 'react';

const Product = (props) => {
    const {productName, id} = props.product;
    const {addToCart} = props;
    return (
        <div>
            <h5>{productName}</h5>
            <button onClick={() => addToCart(id)}>Added to Cart</button>
        </div>
    );
};

export default Product;