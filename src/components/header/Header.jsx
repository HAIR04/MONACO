import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Subscribe_Responsive from "../subscribe/Subscribe_Responsive";
import ContactInfo from "./ContactInfo";

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="mx-auto justify-between bg-black border-opacity-15 w-[95%] md:w-[90%] 2xl:w-[100%] xl:w-[93%]">
      <ContactInfo/>

      <div className="w-[90%]  mx-auto flex justify-between items-center">
        <div className="w-[15%]">
          <Link
            to="/"
            className="flex items-center gap-2 2xl:w-[63%] 2xl:gap-3 xl:w-[63%] xl:gap-3"
          >
            <img
              src="https://s.pro.vn/mSxg"
              className="w-full rounded-full "
              alt="logo"
            />
          </Link>
        </div>

        <div className="w-[70%]">
          <ul className="2xl:w-[100%] hidden justify-around items-center xl:flex text-white text-2xl font-semibold xl:w-[100%]">
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block text-red-700"
              >
                <Link
                  to="/"
                  className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-700 hover:after:w-full  hover:mr-3 transition-all duration-700"
                >
                  TRANG CHỦ
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block text-yellow-600"
              >
                <Link
                  to="/service"
                  className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full  hover:mr-3 transition-all duration-700"
                >
                  DỊCH VỤ
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block text-yellow-600"
              >
                <Link
                  to="/rankings"
                  className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full  hover:mr-3 transition-all duration-700"
                >
                  KỸ THUẬT VIÊN
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block text-yellow-600"
              >
                <Link
                  to="/wallet"
                  className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full  hover:mr-3 transition-all duration-700"
                >
                  LIÊN HỆ
                </Link>
              </motion.div>
            </li>
          </ul>
        </div>

        <div className="w-[15%]">
          <button
            onClick={toggleOverlay}
            className="hidden justify-center items-center gap-3 hover:opacity-70 rounded-full py-5 mx-auto xl:flex 2xl:w-[100%] 2xl:py-5 xl:w-[100%] xl:py-3 bg-red-800 text-white active:opacity-90 transition-all animate-shake duration-500 delay-200"
          >
            <p className="text-2xl font-semibold text-black">ĐẶT NGAY</p>
          </button>
        </div>
      </div>

      {/* Hiển thị Subscribe_Responsive khi nút ĐẶT NGAY được nhấn */}
      {isOverlayVisible && (
        <div
          onClick={toggleOverlay}
          className="fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
        >
          <Subscribe_Responsive />
        </div>
      )}
    </div>
  );
};

export default Header;
