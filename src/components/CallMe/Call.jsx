import React, { useState, useRef, useEffect } from 'react';
import Subscribe_Responsive from '../subscribe/Subscribe_Responsive';

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
    <div  onClick={toggleOverlay}>
      <h2
        className="fixed bottom-5 z-10 italic text-center right-5 flex items-center justify-center 
                 bg-customRed rounded-full text-white text-xl font-bold h-20 w-20 cursor-pointer 
                 shadow-lg  animate-shake  hover:animate-shake"
                 onClick={toggleOverlay}
      >
        Đặt ngay !
      </h2>

      {/* Hiển thị Subscribe_Responsive nếu isSubscribeVisible là true */}
      {isOverlayVisible && (
        <div>
          <Subscribe_Responsive setOpen={setIsModalOpen}/>
        </div>
      )}
    </div>
  );
};

export default CallNowButton;
