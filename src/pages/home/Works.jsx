import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import {Member_Ship} from "../../components/data/Member"
import { Link } from 'react-router-dom';
const Worlds = () => {


  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const visibleImagesCount = getVisibleImagesCount();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: visibleImagesCount,
    slidesToScroll: 1,
    autoplay: true,   // Bật chế độ tự động
    autoplaySpeed: 2000,  // Thời gian chuyển slide (2s)
    arrows: false,    // Tắt mũi tên
  };

  return (
    <div className="w-[90%] mx-auto pt-10">
      <div className="w-[75%] sm:w-[80%] lg:w-[70%] text-center mx-auto py-5 mb-10">
        <span className="text-3xl animate-blink sm:text-4xl text-red-600 font-semibold leading-loose">
          TOP KỸ THUẬT VIÊN
        </span>
      </div>
      <Slider {...settings}>
        {Member_Ship.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <Link to={`/girl/${item.id}`}
              className="w-[95%] mx-auto flex flex-col  border-2 border-red-500
              hover:scale-[0.95] transition-all duration-500 group"
            >
              <img src={item.url} alt={item.name} />

              <div className="relative overflow-hidden">
                <p className="text-2xl pt-4 text-yellow-600 text-center font-bold">
                  {item.name}
                </p>
                <p className="text-base text-white text-center font-bold py-2">
                  {item.desc}
                </p>
                <p className="text-xs text-white text-center flex items-center justify-between w-[95%] mx-auto pb-4">
                  <p className="text-base italic font-semibold">ĐÁNH GIÁ : </p>
                  {/* Hiển thị 5 sao mặc định */}
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-yellow-400 ml-1 text-xl"
                    />
                  ))}
                 ( {item.vote} VOTE {""})
                </p>

                <div
                  className="absolute left-0 bottom-0 w-full bg-red-900 text-white text-lg font-semibold flex items-center justify-center py-3
                         translate-y-full group-hover:translate-y-0 transition-all duration-500"
                >
                  Xem chi tiết
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default Worlds;
