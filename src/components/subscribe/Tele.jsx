import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"; // Telegram icon

const Telegram = () => {
  return (
    <a
      href="https://t.me/+84912302830"
      className="flex items-center bg-white justify-center gap-5 text-white w-full py-4 px-7 rounded-2xl transition duration-300 transform hover:scale-105"
    >
      <FontAwesomeIcon
        icon={faTelegramPlane}
        className="text-3xl bg-white rounded-full text-blue-400"
      />
      <span className="font-semibold text-blue-500">MASSAGE QUÝ ÔNG</span>
    </a>
  );
};

export default Telegram;
