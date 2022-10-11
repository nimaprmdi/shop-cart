import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/common/Navbar";
// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";
// Context
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/products" element={<Store />} />
                    <Route path="/cart" element={<ShopCart />} />
                    <Route path="*" element={<Navigate to="/products" />} />
                </Routes>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
