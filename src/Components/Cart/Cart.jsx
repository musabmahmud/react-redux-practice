import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <h5>This is cart</h5>
            <ul>
                {
                    cart.map(item => <li key={item.cartId}>{item.productName} <button onClick={() => removeFromCart(item.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);