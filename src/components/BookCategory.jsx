import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/custom-swiper.css';
import { BookCard } from './BookCard';

export const BookCategory = ({ books }) => {
  return (
    <div>
      <h6 className="text-md mb-2 font-bold text-gray-600 uppercase">
        {books[0]?.volumeInfo?.categories?.[0]}
      </h6>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
        slidesPerView="auto"
        spaceBetween={24}
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
