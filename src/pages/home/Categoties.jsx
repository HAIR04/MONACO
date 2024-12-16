import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Trạng thái lưu ảnh được chọn

  const Images = [
    {
      url: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/453899223_472868748791479_2923702485545177927_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0t9NQWXrrzrnO89_sOtKpdOjRhdgZZt906NGF2Blm30Vg6zjrhSeIId9k8Em-l2Nrzg90dO_laYBwYIoGnTcR&_nc_ohc=stCRmu14FxkQ7kNvgHFQ4Jc&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AnpuhzVuaIIMa_o0yp7jGYx&oh=00_AYCt0RBkLtaWhbjseNFuOLpBGvu4o1WxIR1LuOWRHchtgA&oe=675F280C",
      name: "BỒN TẮM ĐỨNG QUÝ TỘC",
    },
    {
      url: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/453996957_472868752124812_5090541935325247991_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGiqUl9E7bfdqFev_-sdukm0eUs_MPzvY_R5Sz8w_O9j8v2aCrB8uURJ-HmGmrP4gnEYghX2PYkuj-6ptI8VQf8&_nc_ohc=7JC8Zpsr4rYQ7kNvgEx1iiG&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=Ai1CQmDcZut3v4jDlqSk7HQ&oh=00_AYC2GTMiGHdyur86f4TK2G_HURbEBCcm68cLHYwD0jOq7Q&oe=675F291B",
      name: "POOL LỚN CỰC CHẤT",
    },
    {
      url: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/466419488_541174615294225_2132206919666216590_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpkRsQ_2lCNZrcKgw6nnVpqYzp7ey6G2ipjOnt7LobaBa5e2d9JQsGNkUX-z_0pPKUSLYU0GyiSzQWzMVD6IYT&_nc_ohc=cW8fQBF7Pe8Q7kNvgHPQbe9&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AyvPxudDPOZUYUpBoCPv9HP&oh=00_AYBchEo2o7_Fxll9KfyeHXQInB-PvkTSCuUJEMfHlNm6WA&oe=675F2709",
      name: "POOL BAR SIÊU VIP",
    },
    {
      url: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/466419488_541174615294225_2132206919666216590_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpkRsQ_2lCNZrcKgw6nnVpqYzp7ey6G2ipjOnt7LobaBa5e2d9JQsGNkUX-z_0pPKUSLYU0GyiSzQWzMVD6IYT&_nc_ohc=cW8fQBF7Pe8Q7kNvgHPQbe9&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AyvPxudDPOZUYUpBoCPv9HP&oh=00_AYBchEo2o7_Fxll9KfyeHXQInB-PvkTSCuUJEMfHlNm6WA&oe=675F2709",
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
