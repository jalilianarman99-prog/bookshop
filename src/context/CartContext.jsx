// src/context/cartContext.jsx
import React, { createContext, useReducer, useContext, useState } from "react";

const CartContext = createContext();

const initialState = {
  items: [], // هر آیتم: {id, title, price, image, quantity}
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case "INCREASE":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        ),
      };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [notification, setNotification] = useState(null);

  const addToCart = (book) => {
    dispatch({ type: "ADD_ITEM", payload: book });
    setNotification(`${book.title} به سبد خرید اضافه شد`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <CartContext.Provider value={{ ...state, dispatch, addToCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
