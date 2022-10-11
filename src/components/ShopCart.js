import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../context/CartContextProvider";
import Card from "./common/Card";

import styles from "../assets/css/ShopCart.module.css";

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>

            {state.itemsCounter > 0 && (
                <div className={styles.payments}>
                    <p>
                        <span>Total Items : {state.itemsCounter}</span>
                        <span>Total Payment : {state.total}</span>
                    </p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({ type: "CHECKOUT" })}>
                            Check out
                        </button>
                        <button className={styles.checkout} onClick={() => dispatch({ type: "CLEAR" })}>
                            Clear
                        </button>
                    </div>
                </div>
            )}

            {!state.checkout && state.itemsCounter === 0 && (
                <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go Shopping Please</Link>
                </div>
            )}
            {state.checkout && (
                <div className={styles.complete}>
                    <h3>Checkout Successfully</h3>
                    <Link to="/products">Go Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default ShopCart;
