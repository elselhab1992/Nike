/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import { heroapi } from "../../data/data";
import { products } from "../../data/products";

export const AppContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const AppProvider = ({ children }) => {
  const [hero, setHero] = useState(heroapi);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: newAmount };
    });
  };

  const cartSubtotal = () => {
    let subTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = products.find((Product) => Product.id === Number(item));
        subTotal += cartItems[item] * itemPrice.price;
      }
    }
    return subTotal;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    hero,
    setHero,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartAmount,
    getTotalCartItems,
    cartSubtotal,
    products,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
