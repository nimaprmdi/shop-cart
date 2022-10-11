import React, { useContext } from "react";
import { shortner, isInCart, quantityCount } from "../../utils/helper";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

import trashIcon from "../../assets/images/trash.svg";

import styles from "../../assets/css/Product.module.css";

const Products = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt={productData.title} />
            <h3>{shortner(productData.title)}</h3>
            <p>{productData.price}</p>

            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) === 1 && (
                        <button
                            className={styles.smallButton}
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}
                        >
                            <img src={trashIcon} alt="trash" />
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 1 && (
                        <button
                            className={styles.smallButton}
                            onClick={() => dispatch({ type: "DECREASE_ITEM", payload: productData })}
                        >
                            -
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 0 && (
                        <span className={styles.counter}>{quantityCount(state, productData.id)}</span>
                    )}
                    {isInCart(state, productData.id) ? (
                        <button
                            className={styles.smallButton}
                            onClick={() => dispatch({ type: "INCREASE_ITEM", payload: productData })}
                        >
                            +
                        </button>
                    ) : (
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
