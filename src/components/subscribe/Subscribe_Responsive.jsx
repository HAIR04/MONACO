import React from "react";
import FB from "./FaceBook";
import Za_lo from "./Zalo";
import PhoneNumber from "./Phone";
import EmaiMail from "./Mail";
import ContactForm from "../Form/form";

const Subscribe_Responsive = ({ setOpen }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-black p-5 rounded-lg gap-3 border-2 items-center border-yellow-700 flex flex-col">
        <h2 className="text-2xl p-5 text-white font-semibold">
          QUÝ KHÁCH VUI LÒNG ĐẶT LỊCH QUA CÁC HÌNH THỨC
        </h2>
        <img className="w-[40%] border-4 border-white" src="https://s.pro.vn/kyUQ" />
        {/* <ContactForm/> */}
        <p className="italic text-white">Hoặc quét QR để liên hệ với chúng tôi</p>
        
        {/* Flex container to group the buttons in two per row */}
        <div className="grid grid-cols-2 gap-4 pb-10">
          <div><FB /></div>
          <div><Za_lo /></div>
          <div><PhoneNumber /></div>
          <div><EmaiMail /></div>
        </div>

        
      </div>
    </div>
  );
};

export default Subscribe_Responsive;
