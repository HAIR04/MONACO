import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Products_Service } from "../../components/data/Service";
import { useParams } from "react-router-dom";
import Booking from "../../components/subscribe/Subscribe";
import Desc_RV from "./Desc";
import Review_PR from "../../components/review/Review";
import Subscribe_Responsive from "../../components/subscribe/Subscribe_Responsive";

const DetailSercive = () => {
  const { id } = useParams(); // Lấy id từ URL
  const product = Products_Service.find((item) => item.id === parseInt(id)); // Tìm sản phẩm theo ID

  // Hooks phải được gọi trước bất kỳ điều kiện nào
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Bắt đầu không có ảnh được chọn

  if (!product) {
    return <p className="text-center text-red-600">Sản phẩm không tồn tại!</p>;
  }

  const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);
  const handleImageClick = (index) => setSelectedImageIndex(index);

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
            <div className="flex gap-5 w-full">
              {product.sub_images.map((subImage, subIndex) => (
                <div
                  key={subIndex}
                  className={`snap-item w-[300px] ${
                    subIndex === selectedImageIndex
                      ? "border-2 border-red-700"
                      : ""
                  }`}
                  onClick={() => handleImageClick(subIndex)} // Chỉ xử lý khi click vào ảnh phụ
                >
                  <img
                    src={subImage.url}
                    alt={`${product.name} - Ảnh phụ ${subIndex + 1}`}
                    className="w-full object-cover h-[150px] transition-transform transform hover:scale-110 duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%] flex flex-col justify-center gap-3 items-center pb-5">
            <p className="text-3xl text-yellow-600 text-center font-semibold">
              {product.name}
            </p>
            <p className="text-lg text-white text-center font-semibold">
              Dịch vụ đi kèm : {product.service}
            </p>
            <p className="text-lg text-white text-center font-semibold">
              Thời gian gói : {product.time} ( phút )
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
                <Subscribe_Responsive />
              </div>
            )}
          </div>
        </div>
        <Desc_RV />
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
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailSercive;
