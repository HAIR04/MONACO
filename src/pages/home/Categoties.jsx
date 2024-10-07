
import React from "react";
const Category = () => {
  const Images = [
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/paintbrush-1@2x.svg",
        },
      ],
      name: "Art",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/swatches-1@2x.svg",
        },
      ],
      name: "Collections",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-5@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/musicnotes-1@2x.svg",
        },
      ],
      name: "Music",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-1@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/camera-1@2x.svg",
        },
      ],
      name: "Photography",
    },

    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-2@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/videocamera-1@2x.svg",
        },
      ],
      name: "Video",
    },

    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-10@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magicwand-1@2x.svg",
        },
      ],
      name: "Utility",
    },

    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/basketball-1@2x.svg",
        },
      ],
      name: "Sport",
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-3@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/planet-1@2x.svg",
        },
      ],
      name: "Virtual Worlds",
    },
  ];

  return (
    <div className="w-full lg:py-20">
      <div className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto py-10 text-white">
        <span className="text-3xl lg:text-4xl font-semibold">Browse Categories</span>
      </div>
      <div className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto py-10 ">
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:w-full lg:flex lg:flex-wrap gap-5 justify-between">
          {Images.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className=" 2xl:w-[23%] md:w-[100%] border border-opacity-5 border-white lg:w-[48%] xl:w-[23%] bg-footer rounded-3xl overflow-hidden
                hover:scale-[0.95] transition-transform duration-500"
              >
                <div className="relative">
                  <img
                    src={item.url}
                    className="w-full blur-xl"
                    alt={item.name}
                  />
                  <div className="absolute flex inset-10 justify-center items-center z-20 ">
                    {item.sub_images.map((sub_item, sub_index) => (
                      <div
                        className="w-full  lg:w-[45%] "
                        key={sub_index}
                      >
                        <img src={sub_item.url} alt={`Sub ${sub_index}`} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" relative bg-footer">
                  <p className="text-white text-base md:text-xl text-left p-5 font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
