import { MdFormatListBulleted } from "react-icons/md";
export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state.cart);
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
        case "CHANGE_CRTN_QTY":
            console.log("QTY=" + action.payload.qty);
            return { ...state, cart: state.cart.filter(item => item.id === action.payload.id ? item.qty = action.payload.qty : (item.qty)) };
        default:
            return state;
    }

}
export const ProductReducer = (state, action) => {
    switch (action.type) {
        case "search":
            return { ...state.searchQuery, searchQuery: action.payload }
        case "sort_By_Price":
            return { ...state, sort: action.payload }
        case "fast_delivery":
            return { ...state, fastDelivery: !state.fastDelivery }
        case "clear":
            console.log("button clicked");
            return { searchQuery: "", fastDelivery: false, sort: false }
        default:
            return state;
    }

}