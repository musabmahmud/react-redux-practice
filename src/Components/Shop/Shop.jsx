import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {productName: "Lenovo Led", id: '1'},
        {productName: "LF Led", id: '2'},
        {productName: "Samsung Led", id: '3'},
        {productName: "Walton Led", id: '4'},
        {productName: "Env Led", id: '5'},
    ]
    return (
        <div>
            <h4>This is Shop</h4>
            {
                products.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps)

// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);