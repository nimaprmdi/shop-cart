import React, { useEffect, useState, createContext } from "react";
import { fetchProducts } from "../services/fetchData";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);

    return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>;
};

export default ProductContextProvider;
