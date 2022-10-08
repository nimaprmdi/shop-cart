import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContextProvider";
import Products from "./common/Products";

const Store = () => {
    const products = useContext(ProductsContext);

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {products.map((product) => (
                <Products key={product.id} productData={product} />
            ))}
        </div>
    );
};

export default Store;
