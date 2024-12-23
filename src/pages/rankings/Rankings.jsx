import { Member_Ship } from "../../components/data/Member";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

const Rankings = () => {
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 99;
    if (window.innerWidth >= 768) return 100;
    return 100;
  };

  const visibleImagesCount = getVisibleImagesCount();

  return (
    <>
      <div className="py-5">
        <div className="py-5 relative">
          <img
            className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
            src="/assets/GioiThieu/Be2.jpg"
            alt="Background"
          />
          <p className="md:text-2xl text-base tracking-widest text-white font-bold italic text-center absolute inset-0 flex items-center justify-center">
            KỸ THUẬT VIÊN / TECHNICIAN
          </p>
        </div>

        <div className="xl:w-[80%] w-[95%] mx-auto grid grid-cols-2 sm:grid-cols-2 gap-2 xl:grid-cols-4 md:grid-cols-3 md:gap-7">
          {Member_Ship.slice(0, visibleImagesCount).map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={`/girl/${item.id}`}
                className="w-full mx-auto flex flex-col border-2 border-red-500 hover:scale-[0.95] transition-all duration-500 group"
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="md:w-full object-cover lg:h-[500px] md:h-[400px] w-full h-[250px]"
                />
                <div className="relative overflow-hidden">
                  <p className="md:text-2xl text-md pt-4 animate-goldShine text-center font-bold">
                    {item.name}
                  </p>
                  <p className="md:text-base  text-xs text-white text-center font-bold py-2">
                    {item.desc}
                  </p>
                  <p className="text-xs text-white text-center flex items-center md:items-end justify-between w-[95%] mx-auto pb-4">
                    <p className="text-xs font-semibold italic text-yellow-600">ĐÁNH GIÁ : </p>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-red-700  md:text-xl text-xs"
                      />
                    ))}
                   <div className="hidden md:block"> ( {item.vote} VOTE )</div>
                  </p>

                  <div
                    className="absolute hidden  left-0 bottom-0 w-full bg-red-900 text-white text-lg font-semibold md:flex items-center justify-center py-3
                         translate-y-full group-hover:translate-y-0 transition-all duration-500"
                  >
                    Xem chi tiết
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rankings;
