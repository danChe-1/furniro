import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import assets from "@/assets/assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const SwiperDivider = () => {
  const navigate = useNavigate();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className: string) {
      return (
        '<div class="' + className + '"><div class="bullet inner"></div></div>'
      );
    },

    bulletElement: "div",
  };
  const navigation = {
    disabledClass: "invisible",
    nextEl: ".img-sw-btn-next",
    prevEl: ".img-sw-btn-prev",
  };
  return (
    <div className="my-20 flex h-auto w-full flex-col justify-center bg-beige lg:h-[600px] lg:flex-row">
      <div className="mx-auto my-auto flex w-2/3 flex-col gap-5 py-20 lg:w-2/3 lg:px-40 lg:py-0">
        <h2 className="text-2xl font-bold lg:text-6xl">
          50+ Beautiful romms insipiration
        </h2>

        <p className="text-sm font-thin lg:text-xl">
          Our designer already made a lot of beautiful prototipes of rooms that
          inspire you
        </p>
        <Button
          variant="default"
          className="mt-5 w-48 bg-sand px-12 py-6 text-white hover:bg-sandDark"
        >
          Explore More
        </Button>
      </div>
      <div className="relative w-full lg:w-2/3">
        <div className="swiper-button img-sw-btn-prev flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-sandDark">
          <IoIosArrowBack />
        </div>
        <div className="swiper-button img-sw-btn-next flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-sandDark">
          <IoIosArrowForward />
        </div>

        <Swiper
          className="homeSwiper w-full"
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={navigation}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.7,
            slideShadows: false,
          }}
          loop={true}
          pagination={pagination}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {assets.homeSlider.map((room) => (
            <SwiperSlide className="w-auto bg-cover" key={room.id}>
              <div className="relative w-full">
                <img
                  src={room.bgImage}
                  className="max-h-[590px] overflow-hidden object-contain pt-2"
                />
                <div className="absolute bottom-10 left-5 flex h-[150px] w-2/3 items-end">
                  <div className="flex h-full w-full flex-col items-start justify-center gap-2 bg-white bg-opacity-70 px-6">
                    <div className="flex items-center gap-3 font-light text-gray-600">
                      {room.id} <hr className="w-6 border-black" /> {room.room}
                    </div>
                    <h2 className="text-3xl font-semibold">{room.name}</h2>
                  </div>
                  <Button
                    onClick={() => navigate(room.linkTo)}
                    variant="default"
                    className="h-12 w-12 bg-sandDark text-white hover:bg-sand"
                  >
                    <FaArrowRightLong className="text-3xl" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperDivider;
