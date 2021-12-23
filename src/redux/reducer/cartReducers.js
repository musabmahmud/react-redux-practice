import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {productName: "Lenovo Led", id: '1'},
        {productName: "LF Led", id: '2'},
        {productName: "Samsung Led", id: '3'},
        {productName: "Walton Led", id: '4'},
        {productName: "Env Led", id: '5'},
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newId = action.id;
            const newItem = {
                cartId: state.cart.length+1,
                productId: newId,
                productName: action.productName, 
            }
            const newCarts = [...state.cart, newItem];
            return {
                products : state.products,
                cart: newCarts
            };
        case REMOVE_FROM_CART:
            const id = action.cartId;
            const newCart = state.cart.filter(item => item.cartId !== id);
            return{
                products : state.products,
                cart: newCart
            }
        default:
            return state;
    }
}
export default cartReducers;