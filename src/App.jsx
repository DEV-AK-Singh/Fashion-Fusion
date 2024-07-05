import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const cartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, {...item, qty:1}]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.pid !== itemId));
  };

  const getProductFromCart = (itemId) => {
    return cart.filter((item) => item.pid == itemId)[0];
  };

  const incQtyFromCart = (itemId) => {
    let cartItems = cart.map((item) => {
      if((item.pid == itemId) && (item.qty <= 10)){
        item.qty += 1;
      }
      return item;
    });
    setCart(cartItems);
  };

  const decQtyFromCart = (itemId) => {
    let cartItems = cart.map((item) => {
      if((item.pid == itemId) && (item.qty >= 2)){
        item.qty -= 1;
      }
      return item;
    });
    setCart(cartItems);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += Number((item.discountedPrice * item.qty));
    });
    return total;
  };

  const productTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += Number((item.price * item.qty));
    });
    return total;
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        getProductFromCart,
        incQtyFromCart,
        decQtyFromCart,
        removeFromCart,
        clearCart,
        cartTotal,
        productTotal,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </cartContext.Provider>
  );
}

export default App;
