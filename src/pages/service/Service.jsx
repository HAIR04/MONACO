import { Link } from "react-router-dom";
import { Products_Service } from "../../components/data/Service";
import React from "react";

const ServicePR = () => {
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 8;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  const visibleImagesCount = getVisibleImagesCount();

  return (
    <div className="py-5">
      <div className="py-5 relative">
        <img
          className="h-[200px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be2.jpg"
        />
        <p className="text-2xl text-yellow-600 font-semibold absolute inset-0 flex items-center justify-center">
          DỊCH VỤ / SERVICE
        </p>
      </div>
      <div className="w-[80%] mx-auto grid py-5 grid-cols-1 sm:grid-cols-2 gap-7">
        {Products_Service.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <Link
              to={`/service/${item.id}`}
              className="flex relative flex-col gap-2 hover:scale-[0.95] transition-all duration-500 group"
              style={{
                borderWidth: "4px",
                borderImage: "linear-gradient(90deg, #FFD700, #A37D2B) 1",
                borderStyle: "solid",
              }}
            >
              <div className="overflow-hidden w-[100%] flex relative">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full object-cover h-[300px]"
                />
                {/* Nếu là ảnh thứ 2 thì chèn logo */}
                {index === 1 && (
                  <img
                    src="/assets/Logo/Seller.png"
                    alt="Logo"
                    className="absolute top-0 right-0 w-40 h-40 opacity-90"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Xem chi tiết
                </div>
              </div>
              <p className="text-2xl text-center py-5 font-semibold bg-clip-text text-transparent bg-gold-gradient animation-goldShine">
                {item.name}
              </p>
              <p className="text-lg text-white text-center font-semibold">
                {item.desc}
              </p>
              <div className="flex justify-center gap-3 items-center pb-5">
                <p className="text-3xl text-red-700 font-semibold">
                  {item.price} VNĐ
                </p>
                <p className="text-xl italic text-white line-through">
                  {item.price_sale} VNĐ
                </p>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicePR;
