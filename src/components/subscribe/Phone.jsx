import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";  // Phone icon

const PhoneNumber = () => {
  return (
    <a href="tel:0964445201" className="flex items-center justify-center gap-5 bg-green-600 w-full text-white py-2 lg:py-4 px-16 rounded-2xl transition-all duration-400 transform hover:scale-105">
      <FontAwesomeIcon icon={faPhone} className="text-3xl text-white" />
      <span className="font-semibold text-white">+84964445201</span>
    </a>
  );
};

export default PhoneNumber;
