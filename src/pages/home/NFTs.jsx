import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as Images from "../../assets/images";
import React from "react";
const NFTs = () => {
  const Images = [
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-62@2x.png",

      name: "Distant Galaxy",
      sub_avatar: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-59@2x.png",
          name_avatar: "MoonDanger",
        },
      ],
      price: "1.63",
      highest : "0.33"
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-63@2x.png",

      name: "Life On Edena",
      sub_avatar: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png",
          name_avatar: "NebulaKid",
        },
      ],
      price: "1.63",
      highest : "0.33"
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-64@2x.png",

      name: "Astrofiction",
      sub_avatar: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-57@2x.png",
          name_avatar: "Spaceone",
        },
      ],
      price: "1.63",
      highest : "0.33"
    },
  ];
  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 3; 
    if (window.innerWidth >= 768) return 2; 
    return 3; 
  };

  const visibleImagesCount = getVisibleImagesCount();
  return (
    <div className="w-full bg-header py-5 lg:py-20">
      <div
        className="w-[76%] md:w-[80%]  mx-auto py-10 text-white
                    lg:w-[70%]"
      >
        <span className="text-3xl lg:text-4xl font-semibold leading-loose md:leading-none">Discover More Nfts</span>
        <div className="flex justify-between items-end">
          <p className=" text-base lg:text-2xl text-white font-normal  capitalize ">
            Explore New Trending Nfts
          </p>
          <button
            className="w-[18%] md:w-[30%] xl:w-[18%] md:flex justify-center items-center gap-5 border-2 border-popular p-4 rounded-2xl
               hover:scale-[0.95] transition-transform duration-500 
               hidden"
          >
            <FontAwesomeIcon icon={faEye} className="text-xl text-popular" />
            <p className="text-base font-semibold">See All</p>
          </button>
        </div>
      </div>

      <div
        className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-5  md:flex-row md:justify-between 
                       md:pb-24 lg:pb-0"
      >
        {Images.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <div className="w-full xl:w-[31.5%] bg-footer rounded-3xl
            hover:scale-[0.95] transition-transform duration-500 ">
              <img
                className=" transition-all duration-500"
                src={item.url}
                alt={item.name}
              />
            <div className="p-5 flex flex-col">
            <p className="text-2xl text-white font-semibold">{item.name}</p>
              <div className="w-full py-3">
                {item.sub_avatar.map((sub_item, sub_index) => (
                  <div
                    className="w-[9%] flex items-center gap-2"
                    key={sub_index}
                  >
                    <img src={sub_item.url} alt={sub_item.name_avatar} />
                    <p className="text-base text-white">
                      {sub_item.name_avatar}
                    </p>
                  </div>
                ))}
            </div>

            <div className="flex justify-between py-2">
                <div className="flex flex-col gap-2 items-start">
                <p className="text-white opacity-50 text-sm">Price</p>
                <h1 className="text-base text-white font-base">{item.price} ETH</h1>
                </div>
                <div className="flex flex-col gap-2 items-end">
                <p className="text-white opacity-50 text-sm">Highest Bid</p>
                <h1 className="text-base text-white font-base">{item.highest} wETH</h1>
                </div>
            </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button
            className="w-[75%] mx-auto md:w-[18%] md:hidden justify-center items-center gap-5 border-2 border-popular p-4 rounded-2xl
               hover:scale-[0.95] transition-transform duration-500  my-10 md:my-0
               flex"
          >
            <FontAwesomeIcon icon={faEye} className="text-xl text-popular" />
            <p className="text-base font-semibold text-white">See All</p>
          </button>
    </div>
  );
};
export default NFTs;
