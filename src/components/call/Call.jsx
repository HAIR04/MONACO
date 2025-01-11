import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Subscribe_Responsive from "../button/Subscribe_Responsive";
import { Link } from "react-router-dom";

const CallNowButton = () => {
  const location = useLocation();
  
  // State management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div onClick={toggleOverlay}>
      {/* Hiển thị <h2> và Subscribe_Responsive ở mọi trang, bao gồm cả /rankings */}
      <h2
        className="fixed bottom-5 z-20 italic text-center right-5 flex items-center justify-center 
                 bg-red-700 rounded-full border-2 text-white text-md font-bold h-20 w-20 p-5 cursor-pointer 
                 shadow-lg hover:text-customRed hover:bg-white hover:border-4 hover:border-customRed transition-all duration-800"
      >
        ĐẶT NGAY
      </h2>

      {isOverlayVisible && (
        <div>
          <Subscribe_Responsive setOpen={setIsModalOpen} />
        </div>
      )}

      {/* Ẩn <Link> ở trang /rankings */}
      {location.pathname !== "/rankings" && (
        <Link
          to="/rankings"
          className="top-16 fixed lg:hidden z-50 bg-customRed italic rounded-full right-3 border border-white 
                   hover:scale-105 transition-all duration-500 transform -translate-y-1/2 w-[65px] h-[65px] 
                   flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-white text-xs">KỸ</h1>
          <h1 className="text-white text-xs">THUẬT</h1>
          <h1 className="text-white text-xs">VIÊN</h1>
        </Link>
      )}
    </div>
  );
};

export default CallNowButton;
