import { addToCart, ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

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
            const newCarts = [...state.cart, newId];
            return {
                products : state.products,
                cart: newCarts
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const newCart = state.cart.filter(item => item !== id);
            return{
                cart: newCart
            }
        default:
            return state;
    }
}
export default cartReducers;