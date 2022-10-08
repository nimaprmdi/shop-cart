import React from "react";
import { shortner } from "../../utils/helper";

const Products = ({ productData }) => {
    return (
        <div style={{ backgroundColor: "lightblue", maxWidth: "300px" }}>
            <img src={productData.image} alt={productData.title} style={{ width: "300px", height: "300px" }} />
            <h3>{shortner(productData.title)}</h3>
            <p>{productData.price}</p>

            <div>
                <a href={`product-${productData.id}`}>Details</a>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;
