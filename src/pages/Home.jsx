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
      <BookSlider
        title="کتاب‌های موفقیت و خودیاری"
        category="موفقیت و خودیاری"
        books={books}
      />
      <BookSlider
        title="رمان و داستان خارجی"
        category="داستان خارجی"
        books={books}
      />
      <BookSlider title="کتاب‌های جنایی" category="جنایی" books={books} />
      <BookSlider title="کتاب‌های وحشت" category="وحشت" books={books} />
    </div>
  );
};

export default Home;
