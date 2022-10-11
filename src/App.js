import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
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
                <Switch>
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/products" component={Store} />
                    <Route path="/cart" component={ShopCart} />
                    <Redirect to="/products" />
                </Switch>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
