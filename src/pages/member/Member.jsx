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
    <div className="py-5">
      <div className="w-[80%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex w-full justify-center group">
          <div className="w-[65%] items-center flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600 text-white">
              <img
                src={member.url}
                alt={member.name}
                className="w-[50%] object-cover h-auto"
              />
              <div className="flex flex-col justify-between w-[90%] p-5">
                <p className="text-3xl text-yellow-600 text-center py-5 font-semibold">
                  {member.name}
                </p>
                <div className="flex flex-col gap-5">
                  <p className="text-lg text-white text-left">
                    <span className="text-xl font-semibold">Mô tả ngắn</span>:{" "}
                    {member.desc}
                  </p>
                  <p className="text-lg text-white text-left">
                    <span className="text-xl font-semibold">Kinh nghiệm</span>:{" "}
                    {member.ex}
                  </p>
                  <p>
                    <span className="text-xl font-semibold">NĂM SINH</span>:{" "}
                    {member.age}
                  </p>
                  <p>
                    <span className="text-xl font-semibold">QUÊ QUÁN</span>:{" "}
                    {member.country}
                  </p>
                  <p>
                    <span className="text-xl font-semibold">CÂN NẶNG</span>:{" "}
                    {member.kg} (kg)
                  </p>
                  <p>
                    <span className="text-xl font-semibold">SỐ ĐO BA VÒNG</span>
                    : {member.roud}
                  </p>
                </div>

                <p className="text-xs text-white text-center flex items-center justify-between w-[95%] mx-auto pb-4">
                  <p className="text-sm font-bold italic text-yellow-600">
                    ĐÁNH GIÁ :{" "}
                  </p>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-red-700 ml-1 text-xl"
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
                    <Subscribe_Responsive setOpen={setIsModalOpen}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] text-white py-10">
          <span className="text-2xl font-semibold py-5 flex justify-center">
            _________MÔ TẢ CHI TIẾT_________
          </span>
          <div className="text-2xl text-center py-3">
       
          </div>
          <div className="flex overflow-x-auto justify-center scroll-smooth snap-x snap-mandatory gap-5 w-full">
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
          <div className="w-[85%] py-5 mx-auto text-lg">
            <p>
              Em ấy là một chuyên viên massage với hơn 5 năm kinh nghiệm trong
              việc thực hiện các liệu trình massage thư giãn...
            </p>
            <p className="text-2xl py-2 flex items-end gap-2">
              Đánh giá: 4.8/5{" "}
              <p className="text-lg">
                (Khách hàng hài lòng với kỹ năng và thái độ làm việc của cô.)
              </p>
            </p>
          </div>
          <Review_PR />
        </div>
      </div>
    </div>
  );
};

export default Girl_Detail;
