/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import akeneo from "../assets/images/company/Akeneo.png";
import decath from "../assets/images/company/Decath.png";
import alloVoisins from "../assets/images/company/Allovoisins.png";
import gie from "../assets/images/company/GIE.png";
import nickel from "../assets/images/company/Nickel.png";
import lucca from "../assets/images/company/Lucca.png";
import groupama from "../assets/images/company/Groupama.jpg";
import maincare from "../assets/images/company/Maincare.jpg";
import iadvize from "../assets/images/company/IAdvize.png";
import automotive from "../assets/images/company/Automotive.jpg";
import lengow from "../assets/images/company/Lengow.png";
import manitou from "../assets/images/company/Manitou.png";
import ikks from "../assets/images/company/IKKS.png";
import showroom from "../assets/images/company/Showroom .png";
import mdm from "../assets/images/company/mdm.png";
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
        <img src={akeneo} alt="Akeneo" className=" max-md:w-52 pb-5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={decath} alt="Decathlon" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={alloVoisins} alt="Allovoisins" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gie} alt="GIE" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={nickel} alt="Nickel" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={lucca} alt="Lucca" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={groupama} alt="Groupama" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={maincare} alt="Maincare" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={iadvize} alt="IAdvize" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={automotive} alt="Automotive" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={lengow} alt="Lengow" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={manitou} alt="Manitou" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ikks} alt="IKKS" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={showroom} alt="Showroomprivé" className="max-md:w-52" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mdm} alt="Maison du monde" className="max-md:w-52" />
      </SwiperSlide>
    </Swiper>
  );
}
