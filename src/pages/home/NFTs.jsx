import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Products_Service } from "../../components/data/Service";

const NFTs = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(3); // Hiển thị 3 ảnh ban đầu
  const [isExpanded, setIsExpanded] = useState(false); // Trạng thái mở rộng hoặc thu gọn

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleImagesCount(3); // Thu gọn còn 3 ảnh
    } else {
      setVisibleImagesCount(6); // Mở rộng tối đa 6 ảnh
    }
    setIsExpanded(!isExpanded); // Chuyển đổi trạng thái
  };

  return (
    <div className="w-full pt-10">
      <div className="w-[75%] sm:w-[80%] lg:w-[70%] text-center mx-auto py-5 mb-10">
        <span className="text-3xl sm:text-4xl text-red-600 font-semibold leading-loose">
          CHỌN GÓI ĐẶC BIỆT
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-10 w-[90%] mx-auto">
        {Products_Service.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <Link
              to={`/service/${item.id}`}
              className="flex flex-col gap-5 border-2 border-yellow-500 hover:scale-[0.95] transition-all duration-500 relative group"
            >
              <div className="relative overflow-hidden">
                <img src={item.url} alt={item.name} className="w-full h-[300px] object-cover" />
              </div>
              <p className="text-2xl text-yellow-600 text-center font-semibold">
                {item.name}
              </p>
              <p className="text-lg text-white text-center font-semibold">
                {item.desc}
              </p>
              <div className="flex justify-center gap-3 items-center pb-5 relative overflow-hidden">
                <p className="text-3xl text-red-700 font-semibold">
                  {item.price} VNĐ
                </p>
                <p className="text-xl italic text-white line-through">
                  {item.price_sale} VNĐ
                </p>
                <div className="absolute bottom-[-100%] left-0 w-full bg-red-600 bg-opacity-40 text-white text-lg font-semibold flex items-center justify-center py-2 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                  Xem chi tiết
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
      {Products_Service.length > 3 && ( // Chỉ hiển thị nút nếu có hơn 3 ảnh
        <div className="text-center mt-10">
          <button
            onClick={handleToggle}
            className=" text-white px-6 rounded-full text-lg font-semibold italic transition-all duration-300"
          >
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NFTs;
