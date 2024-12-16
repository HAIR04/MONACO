import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Trạng thái lưu ảnh được chọn

  const Images = [
    {
      url: "/assets/KhongGian/KhongGian11.jpg",
      name: "BỒN TẮM ĐỨNG QUÝ TỘC",
    },
    {
      url: "/assets/KhongGian/KhongGian22.jpg",
      name: "POOL LỚN CỰC CHẤT",
    },
    {
      url: "/assets/KhongGian/KhongGian33.jpg",
      name: "POOL BAR SIÊU VIP",
    },
    {
      url: "/assets/KhongGian/KhongGian44.jpg",
      name: "SWINGPOLL",
    },
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleImageClick = (url) => {
    setSelectedImage(url); // Khi nhấn vào ảnh, set ảnh được chọn
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Đóng modal khi nhấn ngoài ảnh
  };

  return (
    <div className="w-full pt-10">
      <div className="w-[75%] sm:w-[80%] lg:w-[70%] text-center mx-auto py-5 mb-10">
        <span className="text-3xl sm:text-4xl text-red-600 font-semibold leading-loose">
          KHÔNG GIAN THƯ GIÃN
        </span>
      </div>
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {Images.map((item, index) => (
            <div key={index} className="px-3">
              <div
                className="w-full flex flex-col gap-5 border-2 border-yellow-500 hover:scale-[0.95] transition-all duration-500"
                onClick={() => handleImageClick(item.url)} // Gọi handle khi nhấn vào ảnh
              >
                <img
                  className="h-[250px] w-full object-cover" // Đặt chiều cao cố định cho ảnh
                  src={item.url}
                  alt={item.name}
                />
                <p className="text-2xl text-yellow-600 text-center py-5 font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal hiển thị ảnh khi được chọn */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Đóng modal khi nhấn ra ngoài
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="w-[1000px] h-[500px] object-cover border-4 border-yellow-600 cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Ngừng sự kiện click để ảnh không bị tắt khi nhấn vào ảnh
          />
        </div>
      )}
    </div>
  );
};

export default Category;
