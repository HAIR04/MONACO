import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Products_Service } from "../../components/data/Service";
import { useParams } from "react-router-dom";
import Booking from "../../components/subscribe/Subscribe";
import Desc_RV from "./Desc";
import Review_PR from "../../components/review/Review";
import Subscribe_Responsive from "../../components/subscribe/Subscribe_Responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailSercive = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mặc định hiển thị 4 ảnh
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Màn hình tablet nằm ngang
        settings: {
          slidesToShow: 2, // Hiển thị 3 ảnh
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Màn hình tablet dọc
        settings: {
          slidesToShow: 2, // Hiển thị 2 ảnh
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Màn hình điện thoại
        settings: {
          slidesToShow: 1, // Hiển thị 1 ảnh
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { id } = useParams();
  const product = Products_Service.find((item) => item.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const MAX_VISIBLE_IMAGES = 4;

  if (!product) {
    return <p className="text-center text-red-600">Sản phẩm không tồn tại!</p>;
  }

  const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);
  const handleImageClick = (index) => setSelectedImageIndex(index);

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === product.sub_images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.sub_images.length - 1 : prevIndex - 1
    );
  };

  const goToNextGroup = () => {
    setVisibleStartIndex((prevIndex) =>
      prevIndex + MAX_VISIBLE_IMAGES >= product.sub_images.length
        ? 0
        : prevIndex + MAX_VISIBLE_IMAGES
    );
  };

  const goToPreviousGroup = () => {
    setVisibleStartIndex((prevIndex) =>
      prevIndex - MAX_VISIBLE_IMAGES < 0
        ? product.sub_images.length - MAX_VISIBLE_IMAGES
        : prevIndex - MAX_VISIBLE_IMAGES
    );
  };

  return (
    <div className="py-5">
      <div className=" xl:w-[80%] w-[95%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex flex-col md:flex-row w-full items-start gap-5 group">
          <div className="w-full md:w-[65%] flex flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600">
              <img
                src={product.url}
                alt={product.name}
                className="w-full object-cover lg:h-[350px] h-[250px]"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-2 w-full ">
                {product.sub_images
                  .slice(
                    visibleStartIndex,
                    visibleStartIndex + MAX_VISIBLE_IMAGES
                  )
                  .map((subImage, subIndex) => {
                    const actualIndex = visibleStartIndex + subIndex;
                    return (
                      <div
                        key={actualIndex}
                        className={`snap-item w-[300px] ${
                          actualIndex === selectedImageIndex
                            ? "border-2 border-red-700"
                            : ""
                        }`}
                        onClick={() => handleImageClick(actualIndex)}
                      >
                        <img
                          src={subImage.url}
                          alt={`${product.name} - Ảnh phụ ${actualIndex + 1}`}
                          className="w-full border border-yellow-600 hover:cursor-pointer object-cover lg:h-[150px] h-auto transition-transform transform hover:scale-110 duration-300 ease-in-out"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex flex-col justify-center gap-3 items-center pb-5">
            <p className=" text-2xl md:text-xl lg:text-3xl text-yellow-600 text-center font-semibold">
              {product.name}
            </p>
            <p className="lg:text-base xl:text-lg  text-sm text-white text-center font-semibold">
              Dịch vụ đi kèm : {product.service}
            </p>
            <p className="lg:text-base xl:text-lg text-sm text-white text-center font-semibold">
              Thời gian phục vụ : {product.time} ( phút )
            </p>
            <p className="lg:text-base xl:text-lg text-sm text-white text-center font-semibold">
              Không gian : {product.space}
            </p>
            <div className="flex gap-3 items-end">
              <p className="lg:text-3xl text-xl text-red-700 font-bold lg:font-semibold">
                {product.price} VNĐ
              </p>
              <p className="lg:text-sm xl:text-lg text-lg md:text-sm text-white line-through">
                {product.price_sale} VNĐ
              </p>
            </div>
            <p className="text-xs text-white text-center justify-center flex  lg:justify-between gap-1 lg:gap-0 w-[95%] mx-auto pb-4">
              <span className="lg:text-base xl:text-lg text-xs flex  italic font-semibold text-white">
                ĐÁNH GIÁ :{" "}
              </span>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-500 ml-1 xl:text-2xl md:text-sm text-lg"
                />
              ))}
              <p className="flex items-end">( {product.vote} VOTE )</p>
            </p>
            <div
              className="w-[100%] flex md:block justify-center"
              onClick={toggleOverlay}
            >
              <Booking />
            </div>
            {isOverlayVisible && (
              <div
                onClick={toggleOverlay}
                className="fixed w-full bg-black inset-0 bg-opacity-50 flex items-center justify-center z-50"
              >
                <Subscribe_Responsive setOpen={setIsModalOpen} />
              </div>
            )}
          </div>
        </div>

        <span className="lg:text-2xl md:text-lg text-sm font-bold text-white flex justify-center pt-10">
          _______THÔNG TIN CHI TIẾT_______
        </span>

        <div className="py-5">
          <Slider {...settings} className="flex gap-4">
            {product.sub_images.map((subImage, index) => (
              <div
                key={index}
                className="text-center border border-yellow-600 rounded-lg p-2"
              >
                <h4 className="text-xl text-red-600 font-bold">
                  LIỆU TRÌNH {index + 1}
                </h4>
                <p className="text-lg text-white h-[70px] flex items-center justify-center">
                  {subImage.title || `Ảnh phụ ${index + 1}`}
                </p>
                <img
                  src={subImage.url}
                  alt={subImage.title || `Ảnh phụ ${index + 1}`}
                  className="w-full md:h-[300px] h-[200px] object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        <Review_PR />
      </div>

      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <div className="md:w-[80%] w-[95%]  sm:w-[60%] h-[80%]  p-5 flex justify-center items-center relative">
            <img
              src={product.sub_images[selectedImageIndex].url}
              alt={`Phóng to ${product.name} - Ảnh phụ ${
                selectedImageIndex + 1
              }`}
              className="w-full  lg:h-full h-[300px] md:h-[500px] object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
              className="absolute bg-gray-500 hover:opacity-70 text-white px-5 py-3 font-semibold rounded-full shadow-md top-1/2 xl:left-72 left-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
            >
              &lt;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
              className="absolute bg-gray-500 hover:opacity-70 text-white px-5 py-3 font-semibold rounded-full shadow-md top-1/2 xl:right-72 right-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailSercive;
