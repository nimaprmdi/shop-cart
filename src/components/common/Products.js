import React, { useContext } from "react";
import { shortner, isInCart, quantityCount } from "../../utils/helper";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

import trachIcon from "../../assets/images/trash.svg";

const Products = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext);

    console.log(state);

    return (
        <div style={{ backgroundColor: "lightblue", maxWidth: "300px" }}>
            <img src={productData.image} alt={productData.title} style={{ width: "300px", height: "300px" }} />
            <h3>{shortner(productData.title)}</h3>
            <p>{productData.price}</p>

            <div>
                <Link to={`/products/product-${productData.id}`}>Details</Link>

                {quantityCount(state, productData.id) > 1 && (
                    <button onClick={() => dispatch({ type: "DECREASE_ITEM", payload: productData })}>-</button>
                )}

                {quantityCount(state, productData.id) === 1 && (
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>
                        {" "}
                        <img src={trachIcon} style={{ width: "20px", height: " 20px" }} />
                    </button>
                )}
                {isInCart(state, productData.id) ? (
                    <button onClick={() => dispatch({ type: "INCREASE_ITEM", payload: productData })}>+</button>
                ) : (
                    <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To Cart</button>
                )}
            </div>
        </div>
    );
};

export default Products;
