import React, { useContext } from "react";

import { CartContext } from "../../context/CartContextProvider";
import trash from "../../assets/images/trash.svg";
import { shortner } from "../../utils/helper";
import styles from "../../assets/css/Cart.module.css";

const Card = (props) => {
    const { state, dispatch } = useContext(CartContext);

    const { image, title, price, quantity } = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} />
            <div className={styles.data}>
                <h3>{shortner(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>

            <div className={styles.buttonContainer}>
                {quantity > 1 ? (
                    <button onClick={() => dispatch({ type: "DECREASE_ITEM", payload: props.data })}>-</button>
                ) : (
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>
                        <img src={trash} alt="trash" />
                    </button>
                )}

                <button onClick={() => dispatch({ type: "INCREASE_ITEM", payload: props.data })}>+</button>
            </div>
        </div>
    );
};

export default Card;
