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
          className="h-[200px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be1.jpg"
        />
        <p className="text-2xl text-yellow-600 font-semibold absolute inset-0 flex items-center justify-center">
          LIÊN HỆ / CONTACT
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="w-[90%] mx-auto">
        {/* Bản đồ */}
        <iframe
          src="https://s.net.vn/XRVt"
          className="w-full h-[400px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Thông tin MONACO */}
        <div className="flex flex-wrap py-10">
          <div className="w-full md:w-1/2">
            <p className="text-white text-3xl font-semibold text-left pb-5">
              MONACO - MASSAGE QUÝ ÔNG
            </p>
            <hr className="w-[55%]" />
            <p className="text-white w-[70%] text-xl  flex py-5 italic font-medium">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-white"
              />
              Địa chỉ: Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-white text-xl  flex items-center italic pb-5 font-medium">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
              Liên hệ: 098.656.2839
            </p>
            <hr className="w-[40%]" />
            <p className="text-white py-10 text-3xl font-semibold text-left">
          KÊNH LIÊN HỆ
        </p>
        <div className="grid grid-cols-2 gap-6 w-[80%]  ">
          <div className="transform transition-all  duration-300 hover:scale-105">
            <FB />
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <Za_lo />
          </div>
          <div className="transform transition-all duration-300 hover:scale-105 ">
            <Telegram />
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <PhoneNumber />
          </div>
        
         
        </div>
          </div>

          {/* Form đặt lịch */}
          <div className="w-full md:w-1/2 border-2 border-yellow-600 rounded-xl px-5 flex items-center justify-center">
            <ContactForm />
          </div>
        </div>

        {/* Kênh Liên hệ */}
        
        
      </div>
    </div>
  );
};

export default Wallet;
