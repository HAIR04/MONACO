import { Link } from "react-router-dom";
import { Products_Service } from "../../components/data/Service";
import React from "react";
import FB from "../../components/subscribe/FaceBook";
import Za_lo from "../../components/subscribe/Zalo";
import PhoneNumber from "../../components/subscribe/Phone";
import EmaiMail from "../../components/subscribe/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../../components/Form/form";
import Telegram from "../../components/subscribe/Tele";

const Wallet = () => {
  return (
    <div className="py-5">
      {/* Banner */}
      <div className="py-5 relative">
        <img
          className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be1.jpg"
        />
        <p className="md:text-2xl text-lg text-yellow-600 font-semibold absolute inset-0 flex items-center justify-center">
          LIÊN HỆ / CONTACT
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="w-[95%] md:w-[90%] mx-auto">
        {/* Bản đồ */}
        <iframe
          src="https://s.net.vn/XRVt"
          className="w-full md:h-[400px] h-[150px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Thông tin MONACO */}
        <div className="flex flex-wrap py-10">
          <div className="w-full md:w-1/2">
            <p className="text-white md:text-3xl text-xl text-center font-semibold md:text-left pb-5">
              MONACO - MASSAGE QUÝ ÔNG
            </p>
            <hr className="md:w-[55%] w-full" />
            <p className="text-white md:w-[70%] w-full md:text-xl text-sm  flex py-5 italic font-medium">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-white"
              />
              Địa chỉ: Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-white md:text-xl text-sm  flex items-center italic pb-5 font-medium">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
              Liên hệ: 098.656.2839
            </p>
            <hr className="md:w-[40%] w-full" />
            <p className="text-white hidden md:block py-10 text-3xl font-semibold text-left">
              KÊNH LIÊN HỆ
            </p>
            <div className="md:grid grid-cols-2 hidden gap-6 w-[80%]">
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
          <div className="w-full md:w-1/2 md:border-2 md:border-yellow-600 rounded-xl md:px-5 flex items-center justify-center">
            <ContactForm />
          </div>
          <p className="text-white w-full md:hidden py-5 text-xl text-center font-semibold ">
              KÊNH LIÊN HỆ
            </p>
            <div className="grid grid-cols md:hidden items-center gap-5 w-[90%] mx-auto">
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
