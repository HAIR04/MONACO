import { Link } from "react-router-dom";
import { massage_data } from "../../components/data/loi-ich";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faClock } from "@fortawesome/free-regular-svg-icons"; // Import biểu tượng đồng hồ
import React from "react";

const LoiIch = () => {
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 8;
    if (window.innerWidth >= 768) return 8;
    return 8;
  };
  const visibleImagesCount = getVisibleImagesCount();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return (
        <>
          {text.substring(0, maxLength)}
          <span className="text-sm italic">...xem thêm </span> 
        </>
      );
    }
    return text;
  };

  return (
    <div className="py-5 mt-24 lg:mt-0">
      <div className="py-5 relative">
        <img
          className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be2.jpg"
        />
        <p className="md:text-2xl text-base tracking-widest text-white font-bold italic absolute inset-0 flex items-center justify-center">
          LỢI ÍCH / BENEFIT
        </p>
      </div>
      <div className="lg:w-[80%] w-[90%] mx-auto grid py-5 grid-cols-1 sm:grid-cols-1 gap-7">
        {massage_data.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <Link
              to={`/treat/${item.id}`}
              className="flex flex-col md:flex-row  items-center hover:scale-105 transition-all duration-500 group"
              style={{
                borderWidth: "2px",
                borderImage: "linear-gradient(90deg, #FFD700, #A37D2B) 1",
                borderStyle: "solid",
              }}
            >
              {/* Hình ảnh */}
              <div className="relative md:p-5 p-2 w-full md:w-[30%]">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full object-cover h-[200px]"
                />
                <div className="absolute italic inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Xem chi tiết
                </div>
              </div>
              {/* Nội dung */}
              <div className="flex flex-col md:pr-5 md:w-[70%] w-[95%]  gap-5">
                <p className="lg:text-2xl pt-3 md:pt-0 text-center line-clamp-1 md:line-clamp-2 md:text-left text-base font-bold text-white">
                  {item.name}
                </p>
                <p className="lg:text-lg text-sm text-white line-clamp-3 overflow-hidden">
                  {truncateText(item.desc, 250)}
                </p>
                <div className="flex justify-end  items-center gap-2 pb-4 md:pb-0">
                  <FontAwesomeIcon icon={faClock} className="text-gray-300" />{" "}
                  {/* Icon đồng hồ */}
                  <p className="lg:text-sm text-sm italic  text-gray-300">
                    {item.time}
                  </p>
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LoiIch;
