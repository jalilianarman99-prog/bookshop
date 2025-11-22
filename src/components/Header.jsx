// src/components/Header.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, dispatch } = useCart();
  const totalPrice = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
    return sum + price * item.quantity;
  }, 0);
  return (
    <>
      <header className="shadow-sm px-4 py-2 flex justify-between items-center relative">
        {/* لوگو */}
        <div className="flex items-center gap-2">
          <img src={logoImg} className="w-20 h-20 object-cover" alt="logo" />
        </div>

        {/* سرچ دسکتاپ */}
        <div className="hidden md:block relative w-80 mx-4">
          <input
            type="search"
            placeholder="اسم کتاب را بنویسید"
            className="w-full p-2 rounded-3xl border border-gray-200 focus:outline-none
             focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-700" />
        </div>

        {/* لینک‌ها دسکتاپ */}
        <div className="hidden md:flex items-center gap-8">
          <Link to={"/"} className="hover:text-red-600">خانه</Link>
          <Link to={"/about"} className="hover:text-red-600">درباره ما</Link>
          <Link to={"/contact"} className="hover:text-red-600">تماس با ما</Link>

          {/* سبد خرید */}
          <button onClick={() => setIsCartOpen(true)} className="relative flex items-center">
            <FaShoppingCart className="text-xl hover:text-red-700" />
            <span className="bg-red-700 text-white text-sm font-semibold rounded-full absolute -top-4 
            -right-2 px-2">
        {items.length}
            </span>
          </button>
        </div>

        {/* منوی موبایل دکمه */}
        <button className="md:hidden text-2xl" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* بک‌دراپ موبایل */}
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsMobileOpen(false)} />}

      {/* منوی موبایل از راست */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform
         duration-300 z-40 ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">منو</h2>
          <button onClick={() => setIsMobileOpen(false)}><FaTimes className="text-xl hover:text-red-600" /></button>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="relative">
            <input type="search" placeholder="اسم کتاب را بنویسید" className="w-full p-2 rounded-3xl border
             border-gray-200 focus:outline-none" />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-700" />
          </div>
          <Link to={"/"} className="hover:text-red-600">خانه</Link>
          <Link to={"/about"} className="hover:text-red-600">درباره ما</Link>
          <Link to={"/contact"} className="hover:text-red-600">تماس با ما</Link>
          <button onClick={() => { setIsMobileOpen(false); setIsCartOpen(true); }} className="relative flex
           items-center">
            <FaShoppingCart className="text-xl hover:text-red-700" />
            <span className="bg-red-700 text-white text-sm font-semibold rounded-full absolute -top-2
             -right-2 px-2">{items.length}</span>
          </button>
        </div>
      </div>

      {/* بک‌دراپ سبد خرید */}
      {isCartOpen && <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsCartOpen(false)} />}

      {/* منوی سبد خرید از چپ */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform 
        duration-300 z-40 ${isCartOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">سبد خرید شما</h2>
          <button onClick={() => setIsCartOpen(false)}><FaTimes className="text-xl hover:text-red-600" /></button>
        </div>

      <div className="flex-1 p-4 overflow-y-auto">
          {items.length === 0 && <p className="text-gray-500">سبد خرید خالی است.</p>}
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.image} className="w-16 h-20 object-cover rounded" />
              <div className="flex-1 mx-2">
                <p className="font-semibold">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
                    className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
                    className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                className="text-red-600 font-bold">❌</button>
            </div>
          ))}
        </div> 

        <div className="p-4 border-t">
<p className="text-lg font-bold mb-2">قیمت کل: {totalPrice.toLocaleString()} تومان</p>
          <button
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
            تکمیل خرید

          </button>
        </div>
      </div>
    </>
  );
}
