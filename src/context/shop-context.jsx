import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=1; i<= PRODUCTS.length; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }

  const updateCartitemCount = (newCount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newCount}));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartitemCount, getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
