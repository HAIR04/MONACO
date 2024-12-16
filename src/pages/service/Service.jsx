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
          className="h-[200px] w-full opacity-15 object-cover "
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
              className="flex flex-col gap-2 border-2 border-yellow-500 hover:scale-[0.95] transition-all duration-500 relative group"
            >
              <div className="relative overflow-hidden w-[100%] flex">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full object-cover h-[300px]"
                />
              </div>
              <p className="text-2xl text-yellow-600 text-center py-5 font-semibold">
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
                <div
                  className="absolute bottom-[-100%] left-0 w-full bg-red-700 bg-opacity-40 text-white text-lg font-semibold flex items-center justify-center py-2 
                  group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500"
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
export default ServicePR;
