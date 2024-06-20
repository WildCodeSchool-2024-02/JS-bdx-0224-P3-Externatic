/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
      <Swiper
        slidesPerView="2"
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Keyboard, Autoplay]}
        className=" mt-20 mb-20 pl-16 pr-16"
      >
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Akeneo.png"
            alt="Akeneo"
            className=" max-md:w-52 pb-5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Decath.png"
            alt="Decathlon"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Allovoisins.png"
            alt="Allovoisins"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/GIE.png"
            alt="GIE"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Nickel.png"
            alt="Nickel"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Lucca.png"
            alt="Lucca"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Groupama.jpg"
            alt="Groupama"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Maincare.jpg"
            alt="Maincare"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/IAdvize.png"
            alt="IAdvize"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Automotive.jpg"
            alt="Automotive"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Lengow.png"
            alt="Lengow"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Manitou.png"
            alt="Manitou"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/IKKS.png"
            alt="IKKS"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Showroom .png"
            alt="Showroomprivé"
            className="max-md:w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/mdm.png"
            alt="Maison du monde"
            className="max-md:w-52"
          />
        </SwiperSlide>
      </Swiper>
  );
}
