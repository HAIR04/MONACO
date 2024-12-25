import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Products_Service } from "../../components/data/goi-dich-vu";
import { useParams,Link  } from "react-router-dom";
import Booking from "../../components/button/Subscribe";
import Desc_RV from "./Desc";
import Review_PR from "../../components/review/Review";
import Subscribe_Responsive from "../../components/button/Subscribe_Responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailSercive = () => {
  const settingsAutoPlay = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  const settingsNoAutoPlay = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
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

  // Dịch vụ liên quan
  const relatedServices = Products_Service.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div className="py-5 mt-28 lg:mt-0">
      <div className=" xl:w-[80%] w-[95%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex flex-col md:flex-row w-full items-start gap-5 group">
          <div className="w-full md:w-[60%] flex flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600">
              <img
                src={product.url}
                alt={product.name}
                className="w-full object-cover lg:h-[350px] h-[250px]"
              />
            </div>
            <div className="md:py-5 ">
              <Slider
                {...settingsNoAutoPlay}
                className="md:w-[95%] w-full mx-auto"
              >
                {product.sub_images.map((subImage, index) => (
                  <div
                    key={index}
                    className=""
                    onClick={() => handleImageClick(index)} 
                  >
                    <img
                      src={subImage.url}
                      className=" w-full 3xl:w-[220px]  border border-yellow-600  md:h-[150px] hover:scale-110  transition-all duration-500 h-[90px] object-cover cursor-pointer"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex flex-col justify-center gap-3 items-center pb-5">
            <p className=" text-2xl md:text-xl lg:text-3xl bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text text-center font-semibold">
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
              <p className="lg:text-3xl md:text-lg text-xl bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-bold lg:font-semibold">
                {product.price} VNĐ
              </p>
              <p className="lg:text-sm xl:text-lg text-lg md:text-sm text-white line-through">
                {product.price_sale} VNĐ
              </p>
            </div>
            <p className="text-xs text-white text-center justify-center flex   gap-1 lg:gap-3 w-[95%] mx-auto pb-4">
              <span className="lg:text-base  xl:text-sm text-xs flex items-end italic font-semibold text-white">
                ĐÁNH GIÁ :{" "}
              </span>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-red-800 ml-1 xl:text-2xl md:text-sm text-lg"
                />
              ))}
              <p className=" items-end flex md:hidden lg:flex">
                ( {product.vote} VOTE )
              </p>
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

        <span className="lg:text-2xl text-lg  font-bold text-white flex justify-center pt-10">
          ________THÔNG TIN CHI TIẾT________
        </span>

        <div className="py-5">
          <Slider {...settingsAutoPlay} className="flex gap-4">
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
                  className="w-full md:h-[200px] lg:h-[200px] 3xl:h-[250px] h-[200px] object-cover rounded-md"
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

      {/* Dịch vụ liên quan */}
     
<div className="py-10">
  <span className="text-2xl font-semibold text-white py-5 flex justify-center">
    DỊCH VỤ LIÊN QUAN
  </span>
  <div className="md:flex-row flex-col flex gap-5 overflow-x-auto w-[90%] md:w-[95%] xl:w-[80%] mx-auto">
    {relatedServices.map((relatedItem) => (
      <div key={relatedItem.id} className="w-[100%] md:w-[35%] mx-auto">
        {/* Sử dụng Link thay vì a */}
        <Link to={`/service/${relatedItem.id}`}  className="flex relative flex-col gap-2 hover:scale-[0.95] transition-all duration-500 group"
              style={{
                borderWidth: "2px",
                borderImage: "linear-gradient(90deg, #FFD700, #A37D2B) 1",
                borderStyle: "solid",
              }}>
          <img
            src={relatedItem.url}
            alt={relatedItem.name}
            className="w-full h-[250px] object-cover border border-yellow-600 mb-5"
          />
          <div className="absolute italic inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Xem chi tiết
                </div>
          <p className="xl:text-2xl text-xl text-center  font-bold bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text">
                {relatedItem.name}
              </p>
              <p className="lg:text-base text-sm text-white text-center py-2 font-semibold">
                {relatedItem.desc}
              </p>
          <div className="flex justify-center gap-3  items-center pb-5">
                <p className="xl:text-2xl lg:text-xl text-lg bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-bold lg:font-semibold">
                  {relatedItem.price} VNĐ
                </p>
                <p className="xl:text-lg text-sm italic text-white line-through">
                  {relatedItem.price_sale} VNĐ
                </p>
              </div>
        </Link>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default DetailSercive;
