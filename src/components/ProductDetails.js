import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "../assets/css/ProductDetails.module.css";

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    const data = useContext(ProductsContext);

    // const { image, title, description, price, category } = product;

    useEffect(() => {
        data.length > 0 && setProduct(data[id - 1]);
    }, [data, product]);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={product.image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}>
                    <span>Category:</span> {product.category}
                </p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{product.price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
