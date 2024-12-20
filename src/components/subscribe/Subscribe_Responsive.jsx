import React from "react";
import FB from "./FaceBook";
import Za_lo from "./Zalo";
import PhoneNumber from "./Phone";
import ContactForm from "../Form/form";
import Telegram from "./Tele";

const Subscribe_Responsive = ({ setOpen }) => {
  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      onClick={closeOverlay}
    >
      <div
        className="bg-black p-5 rounded-lg gap-3 border-2 items-center border-yellow-700 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <ContactForm />
        <p className="italic text-white">
          Hoặc liên hệ với chúng tôi qua các hình thức
        </p>
        <div className="grid grid-cols-2 gap-4 pb-5">
          <FB />
          <Za_lo />
          <Telegram />
          <PhoneNumber />
        </div>
      </div>
    </div>
  );
};

export default Subscribe_Responsive;
