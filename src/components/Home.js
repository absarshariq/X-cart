import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter.js";
import "./style.css";
import { useState } from "react";
const Home = () => {
    const { state: { products },
        productState: { searchQuery, searchProducts, sort, fastDelivery } } = CartState();
    const filteredProducts = () => {
        let sortedProducts = products;
        if (sort) {
            console.log("in" + sort);
            sortedProducts = sortedProducts.sort((a, b) => sort === "lowToHigh" ? a.price - b.price : b.price - a.price);
            console.log(sortedProducts);
        }
        if (fastDelivery) {
            sortedProducts = sortedProducts.filter(item => item.fastDelivery == true);
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return sortedProducts;
    }


    return (
        <div className="home">
            <Filter />
            <div className="productContainer">
                {filteredProducts().map(item => <SingleProduct item={item} key={item.id} />)}
            </div>
        </div>
    )
}
export default Home;

