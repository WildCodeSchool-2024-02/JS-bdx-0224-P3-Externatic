/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
      <Swiper
        slidesPerView="6"
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
        modules={[Pagination, Keyboard, Autoplay]}
        className=" mt-20 mb-20 pl-16 pr-16"
      >
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Akeneo.png"
            alt=""
            className=" w-52 pb-5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Decath.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Allovoisins.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/GIE.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Nickel.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Lucca.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Groupama.jpg"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Maincare.jpg"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/IAdvize.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Automotive.jpg"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Lengow.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Manitou.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/IKKS.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/Showroom .png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/company/mdm.png"
            alt=""
            className="w-52"
          />
        </SwiperSlide>
      </Swiper>
  );
}
