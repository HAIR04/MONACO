import { Link } from "react-router-dom";
import { Products_Service } from "../../components/data/Service";
import React from "react";

const ServicePR = () => {
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 8;
    if (window.innerWidth >= 768) return 8;
    return 8;
  };
  const visibleImagesCount = getVisibleImagesCount();

  return (
    <div className="py-5 mt-24 lg:mt-0">
      <div className="py-5 relative">
        <img
          className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be2.jpg"
        />
        <p className="md:text-2xl text-base tracking-widest text-white font-bold italic absolute inset-0 flex items-center justify-center">
          DỊCH VỤ / SERVICE
        </p>
      </div>
      <div className="lg:w-[80%] w-[90%] mx-auto grid py-5 grid-cols-1 sm:grid-cols-2 gap-7">
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
              <div className="overflow-hidden w-[100%] flex ">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full object-cover lg:h-[300px] h-[200px]"
                />
                {/* Nếu là ảnh thứ 2 thì chèn logo */}
                {index === 1 && (
                  <img
                    src="/assets/Logo/Seller.png"
                    alt="Logo"
                    className="absolute  top-0 right-0 lg:w-40 lg:h-40 w-20 h-20 opacity-90"
                  />
                )}
                <div className="absolute italic inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Xem chi tiết
                </div>
              </div>
              <p className="lg:text-2xl text-xl text-center pt-5 font-bold bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text">
                {item.name}
              </p>
              <p className="lg:text-lg text-sm text-white text-center py-2 font-semibold">
                {item.desc}
              </p>
              <div className="flex justify-center gap-3  items-center pb-5">
                <p className="lg:text-3xl text-lg text-red-700 font-bold lg:font-semibold">
                  {item.price} VNĐ
                </p>
                <p className="lg:text-xl text-sm italic text-white line-through">
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
