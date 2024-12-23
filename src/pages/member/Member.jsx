import { Member_Ship } from "../../components/data/Member";
import Booking from "../../components/subscribe/Subscribe";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review_PR from "../../components/review/Review";
import Subscribe_Responsive from "../../components/subscribe/Subscribe_Responsive";
import { useParams } from "react-router-dom";

const Girl_Detail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  // Tìm thành viên theo id
  const member = Member_Ship.find((item) => item.id === parseInt(id));

  if (!member) {
    return <div>Không tìm thấy thành viên</div>;
  }

  return (
    <div className="py-5 mt-28 lg:mt-0">
      <div className=" md:w-[100%] w-[90%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex w-full justify-center group flex-col md:flex-row">
          <div className="md:w-[65%] lg:w-[75%] xl:w-[65%] w-full items-center flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600 text-white">
              <img
                src={member.url}
                alt={member.name}
                className="md:w-[50%] w-full object-cover h-auto"
              />
              <div className="md:flex hidden   flex-col justify-between  w-[90%] p-5">
                <p className="text-3xl animate-goldShine text-center py-5 font-semibold">
                  {member.name}
                </p>
                <div className="flex flex-col gap-5">
                  <p className="text-xl text-white text-left">
                    <span className="lg:text-xl md:text-lg font-semibold">
                      Mô tả ngắn
                    </span>
                    : {member.desc}
                  </p>

                  <p className="text-xl text-white text-left">
                    <span className="lg:text-xl md:text-lg font-semibold">
                      NĂM SINH
                    </span>
                    : {member.age}
                  </p>
                  <p className="text-xl text-white text-left">
                    <span className="lg:text-xl md:text-lg font-semibold">
                      QUÊ QUÁN
                    </span>
                    : {member.country}
                  </p>

                  <p className="text-xl text-white text-left">
                    <span className="lg:text-xl md:text-lg font-semibold">
                      SỐ ĐO BA VÒNG
                    </span>
                    : {member.roud}
                  </p>
                </div>

                <p className="text-xs py-5 text-white text-center flex items-center justify-between w-[95%] mx-auto pb-4">
                  <p className="lg:text-lg text-xs font-bold italic text-yellow-600">
                    ĐÁNH GIÁ :{" "}
                  </p>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-red-700 ml-1 lg:text-2xl xl:text-3xl "
                    />
                  ))}
                  ( {member.vote} VOTE {""})
                </p>
                <div className=" w-full" onClick={toggleOverlay}>
                  <Booking />
                </div>
                {isOverlayVisible && (
                  <div
                    onClick={toggleOverlay}
                    className="  fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
                  >
                    <Subscribe_Responsive setOpen={setIsModalOpen} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex md:hidden flex-col text-white mx-auto justify-between w-full p-5">
              <div className="flex flex-col gap-5">
                <p className="text-2xl md:hidden  bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text text-center font-semibold">
                  {member.name}
                </p>
                <p>
                  <span className="text-sm font-semibold">MÔ TẢ NGẮN</span>:{" "}
                  {member.desc}
                </p>

                <p>
                  <span className="text-sm font-semibold">NĂM SINH</span>:{" "}
                  {member.age}
                </p>
                <p>
                  <span className="text-sm font-semibold">QUÊ QUÁN</span>:{" "}
                  {member.country}
                </p>

                <p>
                  <span className="text-sm font-semibold">SỐ ĐO BA VÒNG</span>:{" "}
                  {member.roud}
                </p>
              </div>

              <p className="text-xs text-white text-center py-5 md:py-0 flex items-center justify-between w-[95%] mx-auto pb-4">
                <p className="text-sm font-bold italic text-yellow-600">
                  ĐÁNH GIÁ :{" "}
                </p>
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-red-700 ml-1 md:text-xl text-sm"
                  />
                ))}
                ( {member.vote} VOTE {""})
              </p>
              <div
                className=" w-full flex justify-center"
                onClick={toggleOverlay}
              >
                <Booking />
              </div>
              {isOverlayVisible && (
                <div
                  onClick={toggleOverlay}
                  className="  fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
                >
                  <Subscribe_Responsive setOpen={setIsModalOpen} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[100%] text-white ">
          <span className="md:text-2xl text-base font-semibold py-5 flex justify-center">
            _________MÔ TẢ CHI TIẾT_________
          </span>
          <div className="text-2xl text-center py-3"></div>
          <div className="flex overflow-x-auto justify-center w-[100%] md:w-[80%] mx-auto scroll-smooth snap-x snap-mandatory gap-5 xl:w-full">
            {member.img_data.map((subImage, subIndex) => (
              <div
                key={subIndex}
                className={`snap-item w-[500px] ${
                  subIndex === selectedImageIndex
                    ? "border-2 border-red-700"
                    : "border-2 border-red-700"
                }`}
                onClick={() => handleImageClick(subIndex)}
              >
                <img
                  src={subImage.url}
                  alt={member.name + " - Ảnh phụ " + (subIndex + 1)}
                  className="w-full object-cover h-auto"
                />
              </div>
            ))}
          </div>
          <div className="md:w-[80%] xl:w-[70%] w-full py-5 mx-auto md:text-lg text-sm">
            <p>
              Em ấy là một chuyên viên massage với hơn 5 năm kinh nghiệm trong
              việc thực hiện các liệu trình massage thư giãn... Em ấy là một
              chuyên viên massage với hơn 5 năm kinh nghiệm trong việc thực hiện
              các liệu trình massage thư giãn... Em ấy là một chuyên viên
              massage với hơn 5 năm kinh nghiệm trong việc thực hiện các liệu
              trình massage thư giãn... Em ấy là một chuyên viên massage với hơn
              5 năm kinh nghiệm trong việc thực hiện các liệu trình massage thư
              giãn...
            </p>
          </div>
          <div className="md:w-[90%] mx-auto">
            <Review_PR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girl_Detail;
