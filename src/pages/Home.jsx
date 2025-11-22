import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BookSlider from "../components/BooksSlider";
import books from "../data";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BookSlider
        title="کتاب‌های کودک و نوجوان"
        category="داستان کودک و نوجوانان"
        books={books}
      />
    </div>
  );
};

export default Home;
