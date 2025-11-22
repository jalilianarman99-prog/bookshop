import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import books from "../data";
import Header from "../components/Header";
import { IoIosPricetag } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { TbWritingSign } from "react-icons/tb";
import { useCart } from "../context/CartContext";

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const { addToCart, notification } = useCart();

  if (!book)
    return (
      <h2 className="text-red-500 text-2xl text-center py-10">
        کتابی یافت نشد
      </h2>
    );

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-10 bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-indigo-100"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-60 md:w-72 h-auto rounded-2xl object-cover shadow-lg"
            />

            <div className="flex-1 space-y-4 text-gray-600">
              <h1 className="text-3xl font-bold text-red-950">{book.title}</h1>

              <div className="flex items-center gap-2 text-lg"></div>

              <div className="flex items-center gap-2 text-lg">
                <TbWritingSign className="text-red-700" />
                نویسنده: {book.author}
              </div>

              <div className="flex items-center gap-2 text-lg">
                <BiSolidCategory className="text-red-700" />
                دسته‌بندی: {book.categories}
              </div>

              <div className="flex items-center gap-2 text-lg">
                <FaBook className="text-red-700" />
                ناشر: {book.publisher}
              </div>

              <div className="flex items-center gap-2 text-lg">
                <FaStar className="text-yellow-500" />
                امتیاز: {book.rating}
              </div>

              <button
                onClick={() => addToCart(book)}
                className="bg-linear-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-xl 
                font-semibold shadow-md hover:scale-105 transition-transform w-full md:w-auto"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 text-center md:text-right">
          کتاب های مرتبط
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {books
            .filter((related) => related.id !== book.id)
            .slice(0, 4)
            .map((related) => (
              <Link
                key={related.id}
                to={`/bookdetails/${related.id}`}
                className="group"
              >
                <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition-all duration-200">
                  <img
                    src={related.image}
                    className="rounded-xl w-full h-44 object-cover"
                  />
                  <h3 className="mt-3 font-semibold text-gray-900 ">
                    {related.title}
                  </h3>
                  <p className="text-red-800 font-bold mt-1">
                    {related.price} تومان
                  </p>
                </div>
              </Link>
            ))}
        </div>

        {notification && (
          <div className="fixed bottom-4 left-4 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-slide-in z-50">
            {notification}
          </div>
        )}
      </div>
    </>
  );
}

export default BookDetails;
