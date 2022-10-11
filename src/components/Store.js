import React, { useContext } from "react";

// Components
import Products from "./common/Products";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

import styles from "../assets/css/Store.module.css";

const Store = () => {
    const products = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            {products.map((product) => (
                <Products key={product.id} productData={product} />
            ))}
        </div>
    );
};

export default Store;
