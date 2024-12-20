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
    dots: false, // Không hiển thị các dấu hiệu bên dưới
    infinite: true, // Lặp lại slide
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 4, // Số lượng ảnh hiển thị
    slidesToScroll: 1, // Số lượng ảnh trượt khi nhấn next/prev
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 2000, // Tốc độ tự động chuyển slide (ms)
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Dưới 768px
        settings: {
          slidesToShow: 2, // Hiển thị 2 ảnh
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Dưới 480px
        settings: {
          slidesToShow: 1, // Hiển thị 1 ảnh
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { id } = useParams(); // Lấy id từ URL
  const product = Products_Service.find((item) => item.id === parseInt(id)); // Tìm sản phẩm theo ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Bắt đầu không có ảnh được chọn
  const [visibleStartIndex, setVisibleStartIndex] = useState(0); // Chỉ số bắt đầu của ảnh phụ hiển thị

  const MAX_VISIBLE_IMAGES = 4; // Số lượng ảnh phụ hiển thị tối đa

  if (!product) {
    return <p className="text-center text-red-600">Sản phẩm không tồn tại!</p>;
  }

  const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);
  const handleImageClick = (index) => setSelectedImageIndex(index);

  // Hàm để di chuyển qua ảnh
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

  // Hàm để di chuyển qua nhóm ảnh phụ
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
      <div className="w-[80%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex w-full items-start gap-5 group">
          <div className="w-[65%] flex flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600">
              <img
                src={product.url}
                alt={product.name}
                className="w-full object-cover h-[350px]"
              />
            </div>
            <div className="flex items-center gap-3">
              {/* Nút Previous cho nhóm ảnh phụ */}
           
              <div className="flex gap-5 w-full">
                {product.sub_images
                  .slice(
                    visibleStartIndex,
                    visibleStartIndex + MAX_VISIBLE_IMAGES
                  )
                  .map((subImage, subIndex) => {
                    const actualIndex = visibleStartIndex + subIndex; // Chỉ số thực tế của ảnh
                    return (
                      <div
                        key={actualIndex}
                        className={`snap-item w-[300px] ${
                          actualIndex === selectedImageIndex
                            ? "border-2 border-red-700"
                            : ""
                        }`}
                        onClick={() => handleImageClick(actualIndex)} // Chỉ xử lý khi click vào ảnh phụ
                      >
                        <img
                          src={subImage.url}
                          alt={`${product.name} - Ảnh phụ ${actualIndex + 1}`}
                          className="w-full border border-yellow-600 hover:cursor-pointer object-cover h-[150px] transition-transform transform hover:scale-110 duration-300 ease-in-out"
                        />
                      </div>
                    );
                  })}
              </div>
              {/* Nút Next cho nhóm ảnh phụ */}
            
            </div>
          </div>
          <div className="w-[40%] flex flex-col justify-center gap-3 items-center pb-5">
            {/* Chi tiết sản phẩm */}
            <p className="text-3xl text-yellow-600 text-center font-semibold">
              {product.name}
            </p>
            <p className="text-lg text-white text-center font-semibold">
              Dịch vụ đi kèm : {product.service}
            </p>
            <p className="text-lg text-white text-center font-semibold">
              Thời gian phục vụ : {product.time} ( phút )
            </p>
            <p className="text-lg text-white text-center font-semibold">
              Không gian : {product.space}
            </p>
            <div className="flex gap-3 items-end">
              <p className="text-3xl text-red-700 font-semibold">
                {product.price} VNĐ
              </p>
              <p className="text-lg text-white line-through">
                {product.price_sale} VNĐ
              </p>
            </div>
            <p className="text-xs text-white text-center flex items-en justify-between w-[95%] mx-auto pb-4">
              <span className="text-lg italic font-semibold text-white">
                ĐÁNH GIÁ :{" "}
              </span>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-500 ml-1 text-2xl"
                />
              ))}{" "}
              <p className="flex items-end">( {product.vote} VOTE )</p>
            </p>
            <div className="w-[100%]" onClick={toggleOverlay}>
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
        <span className="text-2xl font-bold text-white flex justify-center pt-10">
        _______THÔNG TIN CHI TIẾT_______
      </span>
      <div className="py-5">
      <Slider {...settings} className="flex gap-4">
        {product.sub_images.map((subImage, index) => (
          <div
            key={index}
            className="text-center border border-yellow-600 rounded-lg p-2"
          >
            {/* Chữ "Liệu trình" với số thứ tự */}
            <h4 className="text-xl text-red-600 font-bold">
              LIỆU TRÌNH {index + 1}
            </h4>
            {/* Nội dung của liệu trình */}
            <p className="text-lg text-white h-[70px] flex items-center justify-center">
              {subImage.title || `Ảnh phụ ${index + 1}`}
            </p>
            {/* Ảnh */}
            <img
              src={subImage.url}
              alt={subImage.title || `Ảnh phụ ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>






        <Review_PR />
      </div>

      {/* Overlay cho ảnh lớn */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)} // Để ẩn overlay khi click ngoài ảnh
          className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <div className="w-[80%] sm:w-[60%] h-[80%]  p-5 flex justify-center items-center relative">
            <img
              src={product.sub_images[selectedImageIndex].url}
              alt={`Phóng to ${product.name} - Ảnh phụ ${
                selectedImageIndex + 1
              }`}
              className="w-full  h-full object-contain"
            />
            {/* Nút Previous */}
            <button
  onClick={(e) => {
    e.stopPropagation(); // Ngừng sự kiện lan truyền
    goToPreviousImage();
  }}
  className="absolute bg-gray-500 hover:opacity-70 text-white px-5 py-3 font-semibold rounded-full shadow-md top-1/2 left-5 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
>
  &lt;
</button>
<button
  onClick={(e) => {
    e.stopPropagation(); // Ngừng sự kiện lan truyền
    goToNextImage();
  }}
  className="absolute bg-gray-500 hover:opacity-70 text-white px-5 py-3 font-semibold rounded-full shadow-md top-1/2 right-5 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
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
