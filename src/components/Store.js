import React, { useContext } from "react";

// Components
import Products from "./common/Products";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

const Store = () => {
    const products = useContext(ProductsContext);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {products.map((product) => (
                <Products key={product.id} productData={product} />
            ))}
        </div>
    );
};

export default Store;
