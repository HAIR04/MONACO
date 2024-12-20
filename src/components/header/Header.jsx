// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import ContactInfo from "./ContactInfo";
import Subscribe_Responsive from "../subscribe/Subscribe_Responsive";
import Booking from "../../components/subscribe/Subscribe";

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="mx-auto justify-between bg-black border-opacity-15 w-[95%] md:w-[90%] 2xl:w-[100%] xl:w-[93%]">
      <ContactInfo />

      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="w-[15%]">
          <Link
            to="/"
            className="flex items-center gap-2 2xl:w-[63%] 2xl:gap-3 xl:w-[63%] xl:gap-3"
          >
            <img
              src="/assets/Logo/logo.png"
              alt="Logo"
              className="w-full rounded-full"
            />
          </Link>
        </div>

        <div className="w-[70%] animate-goldShine">
        <ul className="2xl:w-[100%] hidden justify-around items-center xl:flex text-white text-2xl font-semibold xl:w-[100%]">
  <li>
    <Link
      to="/"
      className="relative inline-block text-red-700  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
    >
      TRANG CHỦ
    </Link>
  </li>
  <li>
    <Link
      to="/service"
      className="relative inline-block  animate-goldShine  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      DỊCH VỤ
    </Link>
  </li>
  <li>
    <Link
      to="/rankings"
      className="relative inline-block  animate-goldShine  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      KỸ THUẬT VIÊN
    </Link>
  </li>
  <li>
    <Link
      to="/wallet"
      className="relative inline-block  animate-goldShine  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      LIÊN HỆ
    </Link>
  </li>
</ul>

        </div>

        <div className=" w-[15%]" onClick={toggleOverlay}>
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
  );
};

export default Header;
