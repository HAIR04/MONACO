import { Link } from "react-router-dom";
import { Products_Service } from "../../components/data/goi-dich-vu";
import React from "react";
import FB from "../../components/button/FaceBook";
import Za_lo from "../../components/button/Zalo";
import PhoneNumber from "../../components/button/Phone";
import EmaiMail from "../../components/button/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../../components/forms/form";
import Telegram from "../../components/button/Tele";

const Wallet = () => {
  return (
    <div className="py-5 mt-24 lg:mt-0">
      {/* Banner */}
      <div className="py-5 relative">
        <img
          className="lg:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be1.jpg"
        />
        <h1 className="lg:text-2xl text-base tracking-widest text-white italic font-semibold absolute inset-0 flex items-center justify-center">
          LIÊN HỆ / CONTACT
        </h1>
      </div>

      {/* Nội dung chính */}
      <div className="w-[95%] lg:w-[90%] mx-auto">
        {/* Bản đồ */}
        <iframe
          src="https://s.net.vn/XRVt"
          className="w-full lg:h-[400px] h-[150px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Thông tin MONACO */}
        <div className="flex flex-wrap py-10">
          <div className="w-full lg:w-1/2">
            <p className="text-white lg:text-3xl text-xl text-center font-semibold lg:text-left pb-5">
             MASSAGE QUÝ ÔNG
            </p>
            <hr className="lg:w-[55%] w-[70%] mx-auto md:mx-0" />
            <p className="text-white lg:w-[70%] w-full lg:text-xl text-sm  flex py-5 italic font-medium">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-white"
              />
              Địa chỉ: Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-white lg:text-xl text-sm  flex items-center italic pb-5 font-medium">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
              Điện thoại: 0912.30.28.30 - 098.656.2830
            </p>
            <hr className="lg:w-[40%] w-[90%] mx-auto md:mx-0" />
            <p className="text-white hidden lg:block py-10 text-3xl font-semibold text-left">
              KÊNH LIÊN HỆ
            </p>
            <div className="lg:grid grid-cols-2 hidden gap-6 w-[80%]">
              <div className="transform transition-all duration-300 hover:scale-105">
                <FB />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <Za_lo />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <Telegram />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <PhoneNumber />
              </div>
            </div>
          </div>

          {/* Form đặt lịch sẽ hiển thị trước ở màn hình nhỏ, và sau kênh liên hệ trên màn hình lớn */}
          <div className="w-full lg:w-1/2 lg:border-2 lg:border-yellow-600 rounded-xl lg:px-5 flex items-center justify-center">
            <ContactForm />
          </div>
          <p className="text-white w-full lg:hidden py-5 text-xl text-center font-semibold ">
            KÊNH LIÊN HỆ
          </p>
          <div className="grid grid-cols md:grid-cols-2 lg:hidden items-center gap-5 w-[90%] mx-auto">
            <div className="transform transition-all duration-300 hover:scale-105">
              <FB />
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <Za_lo />
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <Telegram />
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <PhoneNumber />
            </div>
          </div>
        </div>

        {/* Kênh Liên hệ */}
      </div>
    </div>
  );
};

export default Wallet;
