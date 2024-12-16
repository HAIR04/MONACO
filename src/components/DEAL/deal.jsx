import React, { useState } from 'react';

const DefaultImage = () => {
  const [isVisible, setIsVisible] = useState(true); // Trạng thái hiển thị ảnh

  const handleImageClick = () => {
    setIsVisible(false); // Khi nhấn vào ảnh, ẩn ảnh đi
  };

  return (
    isVisible && (
      <div  onClick={handleImageClick} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <img
          src="https://s.net.vn/M7PG" // Thay bằng đường dẫn ảnh của bạn
          alt="Default"
          className="w-[35%] h-auto object-cover cursor-pointer" // Thêm cursor pointer để người dùng biết có thể nhấn vào
          // Gọi hàm khi nhấn vào ảnh
        />
      </div>
    )
  );
};

export default DefaultImage;