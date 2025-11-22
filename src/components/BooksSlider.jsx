import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookSlider = ({ title, category, books }) => {
  const filteredBooks = books.filter((book) =>
    book.categories?.some((cat) => cat === category)
  );

  if (filteredBooks.lenght === 0) return null;

  return (
    <div className="max-w-6xl mx-auto py-16 px-10">
      <h2
        className="relative text-xl sm:text-2xl font-semibold text-red-700 text-center
            mb-12 inline-block
            "
      >
        {title}
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-4"
      >
        {filteredBooks.map((book) => (
          <SwiperSlide className="" key={book.id}>
            <Link to={`/bookdetails/${book.id}`}>
              <div
                className="bg-white rounded-2xl mt-2  shadow-md flex flex-col items-center 
                        transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl
                        md:hover:border md:hover:border-red-400 min-h-[270px] 
                        "
              >
                <div className="p-5">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-[170px] h-[200px]"
                  />
                </div>
                <h3 className="text-red-700 text-lg">{book.title}</h3>
                <p className="text-sm text-gray-500 py-2 ">{book.author}</p>
                <p className="text-green-600 text-sm mb-1">{book.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BookSlider;
