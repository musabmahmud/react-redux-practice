import { createStore } from "redux";
import cartReducers from "../reducer/cartReducers";
export const store = createStore(cartReducers);
