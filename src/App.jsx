import './App.css'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';

export const cartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
 
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.pid !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    let total = 0;
    cart.forEach((item)=>{
        total += Number(item.discountedPrice);
    })
    return total;
  }

  const productTotal = () => {
    let total = 0;
    cart.forEach((item)=>{
        total += Number(item.price);
    })
    return total;
  }

  return (
    <cartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,cartTotal,productTotal}}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </cartContext.Provider>
  );
}

export default App;
