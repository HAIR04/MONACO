import { massage_data } from "../../components/data/Massager";
import { useParams } from "react-router-dom";
import Booking from "../../components/subscribe/Subscribe";
import React, { useState } from "react";
import Review_PR from "../../components/review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Subscribe_Responsive from "../../components/subscribe/Subscribe_Responsive";

const TreatM = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isImageOverlayVisible, setIsImageOverlayVisible] = useState(false); // Để hiển thị overlay ảnh
  const [selectedImage, setSelectedImage] = useState(null); // Lưu ảnh được chọn
  const [mainImage, setMainImage] = useState(null); // Lưu ảnh chính
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const showImageOverlay = (image) => {
    setSelectedImage(image); // Lưu ảnh được chọn
    setIsImageOverlayVisible(true); // Hiển thị overlay ảnh
  };

  const hideImageOverlay = () => {
    setIsImageOverlayVisible(false); // Ẩn overlay ảnh
    setSelectedImage(null); // Reset ảnh đã chọn
  };

  const handleImageClick = (index) => {
    // Hoán đổi ảnh chính với ảnh phụ được chọn
    setMainImage(massage_data.find((data) => data.id === parseInt(id)).img_data[index]);
    setSelectedImageIndex(index);
  };

  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 1;
    if (window.innerWidth >= 768) return 1;
    return 1;
  };

  const visibleImagesCount = getVisibleImagesCount();

  // Tìm liệu trình dựa trên ID
  const item = massage_data.find((data) => data.id === parseInt(id));

  if (!item) {
    return <div>Liệu trình không tồn tại</div>;
  }

  return (
    <div className="py-5">
      <div className="py-5 relative"></div>
      <div className="w-[80%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex w-full items-start gap-5 group">
          <div className="w-[65%] flex flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600">
              {/* Ảnh chính */}
              <img
                src={mainImage ? mainImage.url : item.url} // Nếu có ảnh được chọn thì sử dụng ảnh đó
                alt={item.name}
                className="w-full object-cover h-[350px]"
              />
            </div>

            {/* Ảnh phụ */}
            <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5 w-full">
              {item.img_data.map((subImage, subIndex) => (
                <div
                  key={subIndex}
                  className={`snap-item w-[300px] ${
                    subIndex === selectedImageIndex ? "border-2 border-red-700" : ""
                  }`}
                  onClick={() => handleImageClick(subIndex)} // Chọn ảnh phụ và hoán đổi vị trí
                >
                  <img
                    src={subImage.url}
                    alt={item.name + " - Ảnh phụ " + (subIndex + 1)}
                    className="w-full object-cover h-[150px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[40%] flex flex-col gap-3 pb-5">
            <p className="text-3xl text-yellow-600 text-center font-semibold">
              {item.name}
            </p>
            <p className="text-lg text-white text-left">
              Mô tả ngắn : {item.desc}
            </p>
            <p className="text-lg text-white text-left">
              Thời gian gói : {item.time} ( phút )
            </p>
            <p className="text-lg text-white text-left">
              Người đã trải nghiệm : {item.user}
            </p>
            <p className="text-xs text-white text-center flex items-center justify-between w-[95%] mx-auto pb-4">
              <p className="text-lg font-semibold text-yellow-600">ĐÁNH GIÁ : </p>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-red-700  text-2xl"
                />
              ))}
              ( {item.vote} VOTE )
            </p>
            <div className="mt-10 w-full" onClick={toggleOverlay}>
              <Booking />
            </div>
            {isOverlayVisible && (
              <div
                onClick={toggleOverlay}
                className="fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
              >
                <Subscribe_Responsive />
              </div>
            )}
          </div>
        </div>

        <div className="w-[100%] text-white py-10">
          <span className="text-2xl font-semibold py-5 flex justify-center">
            _________MÔ TẢ CHI TIẾT_________
          </span>

          {/* Các liệu trình chi tiết */}
          {/* LIỆU TRÌNH 1 */}
          <div className="flex gap-5 py-10">
            <div className="w-1/2 flex flex-col border-2 border-gray-300 rounded-lg p-4">
              <p className="text-2xl text-red-600 font-semibold text-center py-5">LIỆU TRÌNH 1</p>
              <p className="text-lg text-center text-white font-semibold pb-5">{item.num1}</p>
              {item.img_data[0] && (
                <img
                  src={item.img_data[0].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover rounded-lg mb-5"
                />
              )}
              <p className="text-base text-white order-3 w-[90%] mx-auto text-center py-5">{item.desc1}</p>
            </div>

            {/* LIỆU TRÌNH 2 */}
            <div className="w-1/2 flex flex-col border-2 border-gray-300 rounded-lg p-4">
              <p className="text-2xl text-red-600 font-semibold text-center py-5">LIỆU TRÌNH 2</p>
              <p className="text-lg text-center text-white font-semibold pb-5">{item.num2}</p>
              {item.img_data[1] && (
                <img
                  src={item.img_data[1].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover rounded-lg mb-5"
                />
              )}
              <p className="text-base text-white order-3 w-[90%] mx-auto text-center py-5">{item.desc2}</p>
            </div>
          </div>

          {/* LIỆU TRÌNH 3 */}
          <div className="flex gap-5 mb-10">
            <div className="w-1/2 flex flex-col border-2 border-gray-300 rounded-lg p-4">
              <p className="text-2xl text-red-600 font-semibold text-center py-5">LIỆU TRÌNH 3</p>
              <p className="text-lg text-center text-white font-semibold pb-5">{item.num3}</p>
              {item.img_data[2] && (
                <img
                  src={item.img_data[2].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover rounded-lg mb-5"
                />
              )}
              <p className="text-base text-white order-3 w-[90%] mx-auto text-center py-5">{item.desc3}</p>
            </div>

            {/* LIỆU TRÌNH 4 */}
            <div className="w-1/2 flex flex-col border-2 border-gray-300 rounded-lg p-4">
              <p className="text-2xl text-red-600 font-semibold text-center py-5">LIỆU TRÌNH 4</p>
              <p className="text-lg text-center text-white font-semibold pb-5">{item.num4}</p>
              {item.img_data[3] && (
                <img
                  src={item.img_data[3].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover rounded-lg mb-5"
                />
              )}
              <p className="text-base text-white order-3 w-[90%] mx-auto text-center py-5">{item.desc4}</p>
            </div>
          </div>

          {/* LIỆU TRÌNH 5 */}
        
           
              <p className="text-lg text-center text-white font-semibold pb-5">{item.num5}</p>
              {item.img_data[4] && (
                <img
                  src={item.img_data[4].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover rounded-lg mb-5"
                />
              )}
              <p className="text-base text-white order-3 w-[90%] mx-auto text-center py-5">{item.desc5}</p>
            
     
        </div>
      </div>
    </div>
  );
};

export default TreatM;
