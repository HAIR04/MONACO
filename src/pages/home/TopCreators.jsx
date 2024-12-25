import React from "react";
import { massage_data } from "../../components/data/loi-ich";
import { Link } from "react-router-dom";

const TopCreators = () => {
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const visibleImagesCount = getVisibleImagesCount();

  return (
    <div className="w-[90%] mx-auto pt-10">
      <div className="w-[75%] sm:w-[80%] lg:w-[70%] text-center mx-auto py-5 mb-10">
        <span className="text-3xl sm:text-4xl text-red-600 font-semibold leading-loose">
          LIỆU TRÌNH CHUYÊN NGHIỆP
        </span>
      </div>
      <div className="flex gap-5 ">
        {massage_data.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <Link
              to={`/treat/${item.id}`}
              className="w-full relative xl:w-[31.5%] flex flex-col gap-5 border-2 border-red-500 hover:scale-[0.95] transition-all duration-500 group"
            >
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-[300px] object-cover"
              />

              <div className=" overflow-hidden">
                <p className="text-lg text-yellow-600 text-center font-bold">
                  {item.name}
                </p>
                <p className="text-lg text-white text-center font-bold pb-5">
                  Thời gian : {item.time} ( phút )
                </p>
                <div
                  className="absolute inset-0 w-full italic h-full bg-black bg-opacity-70 text-white text-lg font-semibold flex items-center justify-center py-2 
                   opacity-0 group-hover:opacity-100 transition-all duration-700"
                >
                  Xem chi tiết
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
