import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";  // Phone icon

const PhoneNumber = () => {
  return (
    <button className="flex items-center justify-center gap-5 bg-white w-full text-white py-4 px-16 rounded-2xl hover:opacity-80 transition duration-300">
      <FontAwesomeIcon icon={faPhone} className="text-3xl text-black" />
      <span className="font-semibold text-black">+84964445201</span>
    </button>
  );
};

export default PhoneNumber;
