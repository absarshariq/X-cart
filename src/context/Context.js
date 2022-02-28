import { createContext, useReducer, useContext } from "react";
import faker from "@faker-js/faker";
import { CartReducer, ProductReducer } from "./Reducer";

const Cart = createContext();
const Context = (props) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        instock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    console.log(products);
    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: [],
    })

    const [productState, productDispatch] = useReducer(ProductReducer, {
        searchQuery: "",
        searchProducts: products,
        fastDelivery: false,
    })
    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {props.children}
        </Cart.Provider>
    )
}
export default Context;
export const CartState = () => {
    return useContext(Cart);
}

