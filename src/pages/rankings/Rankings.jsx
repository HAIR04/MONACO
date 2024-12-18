import { Member_Ship } from "../../components/data/Member";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

const Rankings = () => {
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 99;
    if (window.innerWidth >= 768) return 4;
    return 1;
  };

  const visibleImagesCount = getVisibleImagesCount();

  return (
    <>
    
      <div className="py-5">
        <div className="py-5 relative">
          <img
            className="h-[200px] w-full opacity-15 object-cover"
            src="/assets/GioiThieu/Be2.jpg"
          />
          <p className="text-2xl text-yellow-600 font-semibold absolute inset-0 flex items-center justify-center">
            KỸ THUẬT VIÊN / TECHNICIAN
          </p>
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {Member_Ship.slice(0, visibleImagesCount).map((item, index) => (
            <React.Fragment key={index}>
              <Link to={`/girl/${item.id}`}
                className="w-[100%] mx-auto flex flex-col border-2 border-red-500
              hover:scale-[0.95] transition-all duration-500 group"
              >
                <img src={item.url} alt={item.name} className="w-full object-cover h-[500px]" />
                <div className="relative overflow-hidden">
                  <p className="text-2xl pt-4 text-yellow-600 text-center font-bold">
                    {item.name}
                  </p>
                  <p className="text-base text-white text-center font-bold py-2">
                    {item.desc}
                  </p>
                  <p className="text-xs text-white text-center flex items-end justify-between w-[95%] mx-auto pb-4">
                    <p className="text-xs font-semibold italic text-yellow-600">ĐÁNH GIÁ : </p>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-red-700 ml-1 text-xl"
                      />
                    ))}
                    ( {item.vote} VOTE {""})
                  </p>

                  <div
                    className="absolute left-0 bottom-0 w-full bg-red-900 text-white text-lg font-semibold flex items-center justify-center py-3
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
