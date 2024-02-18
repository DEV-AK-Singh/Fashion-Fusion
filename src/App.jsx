import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const cartContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.pid !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += Number(item.discountedPrice);
    });
    return total;
  };

  const productTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += Number(item.price);
    });
    return total;
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
    setTimeout(() => {
      if (JSON.parse(localStorage.getItem("userData")) == null) {
        navigate("/signin");
      }
    }, 2000);
  }, []);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        productTotal,
      }}
    >
      {/* {user == null ? (
        <h1>Fetching user data...</h1>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )} */}
      <Navbar />
      <Outlet />
      <Footer />
    </cartContext.Provider>
  );
}

export default App;
