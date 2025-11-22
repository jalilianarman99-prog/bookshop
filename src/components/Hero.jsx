import React from "react";
import heroImg from "../assets/images/hero-1.jpg";
function Hero() {
  return (
    <div className="flex justify-center items-center">
      {/* hero-img right-side */}

      <div
        className="w-1/2 h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* text-content right-side */}
      <div
        className="w-1/2 h-[400px] bg-[rgb(188,188,188)] flex justify-center items-center flex-col
         text-center p-6
      "
      >
        <h3 className="text-lg font-semibold my-4 sm:text-3xl">
          بیش ده هزار کتاب متنی و صوتی
        </h3>
        <p className="text-sm text-[#333] sm:text-lg my-4">
          کتاب های رایگان وپولی
        </p>
        <button
          className="text-lg text-white bg-[#940000]
        px-8 py-3 rounded-full shadow-sm cursor-pointer"
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
}

export default Hero;
