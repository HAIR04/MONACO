import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"; // Telegram icon

const Telegram = () => {
  return (
    <a href="https://t.me/+84912302830" className="flex items-center bg-blue-600 justify-center gap-5 text-white w-full py-4 px-7 rounded-2xl hover:bg-blue-700 transition duration-300">
      <FontAwesomeIcon icon={faTelegramPlane} className="text-3xl" />
      <span className="font-semibold">MASSAGE QUÝ ÔNG</span>
    </a>
  );
};

export default Telegram;
