import { Products_Service } from "../../components/data/Service";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const TrendingCollection = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(getVisibleImagesCount());

  // Hàm xác định số lượng ảnh hiển thị dựa trên kích thước màn hình
  function getVisibleImagesCount() {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // Lắng nghe sự thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => setVisibleImagesCount(getVisibleImagesCount());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-header">
      {/* Tiêu đề */}
      <div className="w-[75%] sm:w-[80%] lg:w-[70%] text-center mx-auto py-5 mb-10">
        <span className="text-3xl sm:text-4xl font-semibold leading-loose animate-blink">
          ƯU ĐÃI ĐỘC QUYỀN
        </span>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="w-[90%] mx-auto flex flex-wrap gap-7 xl:gap-0 justify-between">
        {Products_Service.slice(0, visibleImagesCount).map((item, index) => (
          <div
            key={index}
            className="w-full xl:w-[31.5%] flex flex-col gap-5 border-2 border-yellow-500 hover:scale-[0.95] transition-all duration-500 relative group"
          >
            <Link to={`/service/${item.id}`} className="w-full">
              {/* Hình ảnh sản phẩm */}
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-[300px] object-cover"
              />

              {/* Tên và mô tả sản phẩm */}
              <p className="text-2xl text-yellow-600 pt-5 text-center font-semibold">{item.name}</p>
              <p className="text-lg text-white py-2 text-center font-semibold">
                ({item.desc})
              </p>

              {/* Giá sản phẩm */}
              <div className="flex justify-center gap-5 items-center pb-5">
                <p className="text-2xl text-red-700 font-semibold">{item.price} VNĐ</p>
                {item.price_sale && (
                  <p className="text-xl text-white line-through">{item.price_sale} VNĐ</p>
                )}
              </div>

              {/* Hiệu ứng chữ "Xem chi tiết" */}
              <div className="absolute bottom-0 left-0 right-0 text-center py-3 bg-opacity-40 bg-red-600 text-white text-xl font-semibold transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                Xem chi tiết
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollection;
