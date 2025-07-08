import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://picsum.photos/300/200?random=1"
            alt="Slide 1"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/300/200?random=2"
            alt="Slide 2"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/300/200?random=3"
            alt="Slide 3"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/300/200?random=4"
            alt="Slide 4"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
