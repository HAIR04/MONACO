// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Thêm import
import {
  faUser,
  faBarsStaggered,
  faRankingStar,
  faCircleNodes,
} from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "./ContactInfo";
import Subscribe_Responsive from "../subscribe/Subscribe_Responsive";
import Booking from "../../components/subscribe/Subscribe";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="mx-auto justify-between flex items-center overflow-hidden md:flex-col bg-black border-opacity-15 w-[95%] md:w-[100%] 2xl:w-[100%] xl:w-[100%] px-3">
      <ContactInfo />

      <div className="md:w-[100%] xl:w-[90%] mx-auto hidden lg:flex justify-between items-center md:pr-12 lg:pr-0  xl:ml-10">
        <div className="md:w-[20%] xl:w-[25%] w-[25%]">
          <Link
            to="/"
            className="flex items-start justify-center md:ml-10 2xl:ml-16 2xl:w-[70%] 2xl:gap-3 xl:w-[100%] xl:gap-3"
          >
            <img
              src="/assets/Logo/logo.png"
              alt="Logo"
              className="w-full hidden lg:block"
            />
          </Link>
        </div>

        <div className="w-[90%] ">
          <ul className="2xl:w-[100%]  hidden justify-around items-center lg:flex text-white text-lg xl:text-2xl 2xl:text-2xl 3xl:text-3xl font-semibold xl:w-[100%]">
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
                className="relative inline-block  bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                DỊCH VỤ
              </Link>
            </li>
            <li>
              <Link
                to="/rankings"
                className="relative inline-block  bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                KỸ THUẬT VIÊN
              </Link>
            </li>
            <li>
              <Link
                to="/wallet"
                className="relative inline-block  bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                LỢI ÍCH
              </Link>
            </li>
            <li>
            <Link
                to="/wallet"
                className="relative inline-block  bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text  transition-all duration-300 after:content-[''] after:block after:w-0 after:h-1 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
               LIÊN HỆ
              </Link>
            </li>
          </ul>
        </div>

        <div className=" w-[15%] hidden lg:block" onClick={toggleOverlay}>
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

      <div className="fixed lg:hidden top-0  left-0 w-full bg-black z-10 flex items-center justify-between px-4 h-[120px]">
  {/* Button Icon */}
  <button
    onClick={() => setOpen(!open)}
    className="text-2xl text-white z-50"
  >
    <FontAwesomeIcon icon={faBarsStaggered} />
  </button>

  {/* Menu khi mở */}
  {open && (
    <div className="fixed w-[60%] top-0 left-0 bottom-0 bg-black z-50 flex flex-col">
      <div className="bg-body py-3 text-right flex items-center justify-between px-4">
        <span className="text-gray-300 font-semibold text-lg">MENU</span>
        <FontAwesomeIcon
          icon={faTimes}
          className="text-gray-300 text-xl cursor-pointer"
          onClick={() => setOpen(false)} // Đóng menu khi nhấn
        />
      </div>
      <Link
        to="/"
        className="text-lg border-b text-red-600 border-white border-opacity-30 p-3 w-full text-left font-semibold"
      >
        TRANG CHỦ
      </Link>
      <Link
        to="/service"
        className="text-lg border-b border-white bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-semibold transition-all duration-300 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full border-opacity-30 p-3 w-full text-left"
      >
        DỊCH VỤ
      </Link>
      <Link
        to="/rankings"
        className="text-lg border-b border-white bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-semibold transition-all duration-300 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full border-opacity-30 p-3 w-full text-left"
      >
        KỸ THUẬT VIÊN
      </Link>
      <Link
        to="/wallet"
        className="text-lg border-b border-white bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-semibold transition-all duration-300 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full border-opacity-30 p-3 w-full text-left"
      >
        LỢI ÍCH
      </Link>
      <Link
        to="/wallet"
        className="text-lg border-b border-white bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-semibold transition-all duration-300 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full border-opacity-30 p-3 w-full text-left"
      >
        LIÊN HỆ
      </Link>
    
      <div
        className="py-5 items-center justify-center flex lg:hidden"
        onClick={toggleOverlay}
      >
        <Booking />
      </div>
    </div>
  )}

  {/* Logo (tách biệt và căn giữa màn hình) */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img
      src="/assets/Logo/logo.png"
      alt="Logo"
      className="h-[150px]" // Chiều cao logo
    />
  </div>
</div>


    </div>
  );
};

export default Header;
