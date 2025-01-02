import React, { useState, useRef, useEffect } from "react";
import Subscribe_Responsive from "../button/Subscribe_Responsive";

const CallNowButton = () => {
  // State để điều khiển hiển thị Subscribe_Responsive
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div onClick={toggleOverlay}>
      <h2
        className="fixed bottom-5 z-20 italic  text-center right-5 flex items-center justify-center 
                 bg-red-700 rounded-full border-2  text-white text-md font-bold h-20 w-20 p-5 cursor-pointer 
                 shadow-lg   hover:text-customRed  hover:bg-white hover:border-4 hover:border-customRed transition-all duration-800"
        onClick={toggleOverlay}
      >
       ĐẶT NGAY
      </h2>

      {/* Hiển thị Subscribe_Responsive nếu isSubscribeVisible là true */}
      {isOverlayVisible && (
        <div>
          <Subscribe_Responsive setOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  );
};

export default CallNowButton;
