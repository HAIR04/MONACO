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
      <div
        className="fixed bottom-5 z-10 italic text-center right-5 flex items-center justify-center 
                 bg-red-600 rounded-full text-black text-xl font-bold h-20 w-20 cursor-pointer 
                 shadow-lg  animate-shake  hover:animate-shake"
                 onClick={toggleOverlay}
      >
        Đặt ngay !
      </div>

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
