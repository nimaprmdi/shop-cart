import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";
import shopIcon from "../../assets/images/shop.svg";
import styles from "../../assets/css/Navbar.module.css";

const Navbar = () => {
    const { state } = useContext(CartContext);

    console.log(state);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">
                    Products
                </Link>

                <div className={styles.iconContainer}>
                    <Link to="/cart">
                        <img src={shopIcon} alt="shopIcon" />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
