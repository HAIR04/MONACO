import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";  // Facebook icon

const FB = () => {
  return (
    <a href="https://bom.so/TVNHql" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4  rounded-2xl hover:bg-blue-700 transition duration-300">
      <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
      <span className="font-semibold">MASSAGE QUÝ ÔNG</span>
    </a>
  );
};

export default FB;
