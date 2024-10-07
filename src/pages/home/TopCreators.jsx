import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
const TopCreators = () => {
   const Creators = [
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
      name: "PubPuk",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-99@2x.png",
      name: "CryptOllie",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-100@2x.png",
      name: "JapSun",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-101@2x.png",
      name: "Harzpflaume",
    },
  
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-102@2x.png",
      name: "CryptoDave",
    },
  
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-1@2x.png",
      name: "Mor",
    },
  
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-103@2x.png",
      name: "Tin",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-104@2x.png",
      name: "Teb",
    },
 
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-105@2x.png",
      name: "Gogocrypto",
    },
  
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-106@2x.png",
      name: "Unnamed",
    },
  
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-107@2x.png",
      name: "AIRI",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-108@2x.png",
      name: "Root",
    },
  ];
  
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 12; // xl trở lên
    if (window.innerWidth >= 768) return 6; // md trở lên
    return 6; // Mặc định
  };

  const visibleImagesCount = getVisibleImagesCount();
  
  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-[75%]  md:w-[80%] lg:w-[70%] mx-auto md:py-10 text-white
                      ">
        <span className="text-3xl lg:text-4xl font-semibold">Top Creators</span>
        <div className="flex justify-between items-end">
          <p className="text-base md:text-lg my-5 md:my-0  xl:text-2xl text-white font-normal capitalize 
          xl:-tracking-wider">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
          <button
            className="md:w-[30%]  md:flex  justify-center items-center gap-5 border-2 border-popular box-content px-2 py-4 rounded-2xl
                      xl:w-[23%]
               hover:scale-[0.95] transition-transform duration-500 
               hidden"
          >
            <FontAwesomeIcon className="text-xl text-popular" icon={faRocket} />
            <p className="text-base font-semibold">View Rankings</p>
          </button>
        </div>
      </div>
      <div className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto lg:py-10
                      ">
        <div className="flex flex-wrap gap-6 justify-between ">
          {Creators.slice(0, visibleImagesCount).map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="w-full md:w-[48%] justify-evenly  flex items-center lg:justify-around  lg:flex-col lg:items-stretch
                          xl:w-[23%]
                          p-5 bg-footer rounded-3xl
                          hover:scale-[0.95] transition-transform duration-500"
              >
                <div className="flex  cursor-pointer justify-center relative">
                  <p className="bg-body text-white text-opacity-50 w-7 h-7 rounded-full text-center absolute left-0 bottom-10 md:top-0">
                    {index + 1}
                  </p>
                  <div
                    className="w-[60px] h-[60px]  xl:w-[130px] xl:h-[130px] bg-cover rounded-full "
                    style={{ backgroundImage: `url(${item.url})` }}
                  ></div>
                </div>
                <div className="text-left lg:text-center  lg:mt-5">
                  <p className="text-white text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="flex justify-center gap-2 text-white text-opacity-50">
                    Total Sales:{" "}
                    <p className="text-white font-medium">34.53 ETH</p>
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>
      <button
            className="w-[70%] mx-auto md:hidden my-10  justify-center items-center gap-5 border-2 border-popular box-content  p-4 rounded-2xl
                      xl:w-[23%]
               hover:scale-[0.95] transition-transform duration-500 
                flex"
          >
            <FontAwesomeIcon className="text-xl text-popular" icon={faRocket} />
            <p className="text-base font-semibold text-white">View Rankings</p>
          </button>
    </div>
  );
};
export default TopCreators;
