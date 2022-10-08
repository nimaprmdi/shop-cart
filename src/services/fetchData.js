import { getProducts } from "./api";

const fetchProducts = async (setProducts) => {
    setProducts(await getProducts());
};

export { fetchProducts };
