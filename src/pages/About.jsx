import React from "react";
import Header from "../components/Header";
import aboutImg from "../assets/images/about-avatar.jpg";
import { PiBooks } from "react-icons/pi";
function About() {
  return (
    <div>
      <Header />
      {/* about us header */}
      <section
        className="text-center text-white bg-linear-to-tr from-[#fd6969] to-[#d82828] rounded-b-[50px]
      p-15"
      >
        <h1 className="text-3xl mb-5 md:text-4xl">درباره ما</h1>
        <p className="text-lg opacity-90">
          با فرنود بوک دنیای کتاب های الکترونیکی و صوتی همیشه در دسترس شماست.
        </p>
      </section>
      {/*about-container*/}
      <section className="flex flex-wrap justify-center items-center py-16 gap-8 px-6 mx-auto max-w-[1200px]">
        {/*right-side-text*/}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-red-600 font-bold text-[28px] mb-5 text-justify">
            فرنود بوک چیست؟
          </h3>
          <p className="text-md text-gray-600 leading-8">
            فرنود وک یک فروشگاه اینترنتی کتاب است که تلاش می کند تجربه ای متفاوت
            از مطالعه را به شما هدیه دهد.ما مجموعه ای بزرگ از متاب های صوتی و
            الکترونیکی را در اختیار شما قرار داده ایم تا بتوانید در هر زمان و
            مکان به دنیای کتاب وارد شوید. در فرنود بوک شما میتوانید کتاب ها را
            به صورت انلاین خریداری کنید و امانت بگیرید و حتی از بخش کتاب های
            رایگان لذت ببرید.هدف ما این است که کطالع را آسان تر و اذت بخش تر
            کنیم.
          </p>
        </div>
        {/*left-side-img*/}
        <div className="flex-1 min-w-[300px] flex justify-center">
          <img
            src={aboutImg}
            alt="about-img"
            className="w-full max-w-[450px] shadow-2xl rounded-3xl"
          />
        </div>
      </section>
      {/* values of FarnodBook */}
      <section className="bg-[#ffc2c2] mx-auto p-7 text-center">
        <h4 className="text-center font-semibold text-2xl text-red-700 mb-8">
          ارزش های فرنود بوک
        </h4>
        {/*boxes */}
        <div className="flex flex-wrap justify-center items-center max-w-[1000px] mx-auto gap-4">
          <div className=" text-black bg-white rounded-2xl py-5 px-2 shadow-lg flex-1 min-w-[220px] ">
            <p className="text-lg font-bold mb-4  text-red-700" >
              
              دسترسی آسان</p>
            <span className="text-[#333]">
              کتاب های صوتی و الکترونیکی همیشه همراه شماست چه در موبایل, چه در
              تبلت و چه در لبتاپ.
            </span>
          </div>
          <div className=" text-black bg-white rounded-2xl py-5 px-2 shadow-lg flex-1 min-w-[220px] ">
            <p className="text-lg font-bold mb-4  text-red-700">
              تجربه شنیداری
            </p>
            <span className="text-[#333]">
              با کتاب های صوتی حتی در مسیر و هنگام کارهای روزانه میتوانید به
              دنیای کتاب سفر کنید و لذت ببرید.
            </span>
          </div>
          <div className=" text-black bg-white rounded-2xl py-5 px-2 shadwo-lg flex-1 min-w-[220px] ">
            <p className="text-lg font-bold mb-4  text-red-700">تنوع و کیفیت</p>
            <span className="text-[#333]">
              از رمان و روانشناسی گرفته تا آموزش و کسب وکار و هزاران عنوان دیگر
              در دسترس شما عزیزان است.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
