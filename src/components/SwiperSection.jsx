import React, { useEffect } from "react";
// import Swiper, { Navigation, Pagination } from "swiper";

const SwiperSection = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: true,
      pagination: { clickable: true },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
    </div>
  );
};

export default SwiperSection;
