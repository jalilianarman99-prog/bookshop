import React from "react";
import Header from "../components/Header";
import contactImg from "../assets/images/contact.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  return (
    <div>
      <Header />
      {/*contaact-header*/}
      <section
        className=" bg-linear-to-tr from-[#fd6969] to-[#d82828]
         text-white text-center p-15 rounded-b-[50px]
      "
      >
        <h1 className="text-3xl mb-5 md:text-4xl">تماس با ما</h1>
        <p className="text-lg opacity-90">
          هر سوالی دارید خوشحال میشیم با ما در ارتباط باشید
        </p>
      </section>

      {/*contact-container*/}
      <section className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto py-16 px-4">
        {/*right-side-img*/}
        <div className="flex-1 min-w-[300px] max-w-md ">
          <img
            className="w-full object-cover h-[300px] rounded-xl"
            src={contactImg}
            alt="تماس با فرنود بوک"
          />
        </div>
        {/*left-side*/}
        <div className="flex-1 flex flex-col gap-8">
          {/*box-form*/}
          <div className="bg-white py-8 rounded-xl shadow-md">
            <h2 className="text-red-600 text-2xl font-bold mb-8 mt-3 px-5">
              تماس با ما
            </h2>
            <form className="flex flex-col px-5">
              <label className="font-semibold mb-2 text-[#333] p-2">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                placeholder="نام ونام خانوادگی خود را وارد کنید..."
                className="border border-gray-300 px-4 py-3 mb-5 rounded-3xl"
              />
              <label className="font-semibold mb-2 text-[#333] p-2">
                ادرس ایمیل
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="border border-gray-300 px-4 py-3 mb-5 rounded-3xl"
              />
              <label className="font-semibold mb-2 text-[#333] p-2">
                پیام شما
              </label>
              <textarea
                rows={8}
                placeholder="پیام خود را وارد کنید.."
                className="border border-gray-300 px-4 py-3 mb-5 rounded-3xl"
              ></textarea>
              <button
                type="submit"
                className=" cursor-pointer text-white bg-linear-to-r from-[#db1e1e] to-[#940000] text-lg
                px-8 py-3 rounded-full"
              >
                ارسال پیام
              </button>
            </form>
          </div>
          {/*box-contact*/}
          <div className="bg-white py-8 rounded-xl shadow-md">
            <h2 className="text-red-600 text-2xl font-bold mb-5 mt-3 px-5">
              اطلاعات تماس
            </h2>
            <ul className=" space-y-4 px-3">
              <li className="flex items-center gap-3">
                <MdEmail className="text-red-600" />
                <span className="text-[#333]"> ایمیل :info@FarnodBook.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneFlip className="text-red-600" />
                <span className="text-[#333]"> تلفن:55886541-021</span>
              </li>
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-red-600" />
                <span className="text-[#333]"> آدرس:تهران-شهران</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
