import React from "react";

const TrendingCollection = () => {
  const Images = [
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder@2x.png",
        },
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-1@2x.png",
        },
      ],
      name: "Dsgn Animals",
      sub_avatar: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png",
          name_avatar: "MrFox",
        },
      ],
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-2@2x.png",
        },
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-3@2x.png",
        },
      ],
      name: "Magic Mushrooms",
      sub_avatar: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png",
          name_avatar: "Shroomie",
        },
      ],
    },
    {
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-5@2x.png",
      sub_images: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-10@2x.png",
        },
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-11@2x.png",
        },
      ],
      name: "Disco Machines",
      sub_avatar: [
        {
          url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png",
          name_avatar: "BeKind2Robots",
        },
      ],
    },
  ];


  const getVisibleImagesCount = () => {
    if (window.innerWidth >= 1280) return 3; 
    if (window.innerWidth >= 768) return 2
    ; 
    return 1; 
  };

  const visibleImagesCount = getVisibleImagesCount();

  return (
    <div className="w-full bg-header py-10">
      <div className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto py-5 mb-10 ">
        <span className="text-3xl lg:text-4xl text-white font-semibold leading-loose ">
          Trending Collection
        </span>
        <p className="text-base lg:text-2xl text-white font-normal ">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto flex gap-7 xl:gap-0 justify-between ">
        {Images.slice(0, visibleImagesCount).map((item, index) => (
          <React.Fragment key={index}>
            <div className="w-full xl:w-[31.5%] flex flex-col gap-5">
              <img
                className="hover:scale-[0.95] transition-all duration-500"
                src={item.url}
                alt={item.name}
              />

              <div className="flex justify-between w-[100%]">
                {item.sub_images.map((sub_item, sub_index) => (
                  <div
                    className="w-[31%] hover:scale-[0.9] transition-all duration-500"
                    key={sub_index}
                  >
                    <img src={sub_item.url} alt={sub_item.name} />
                  </div>
                ))}
                <div
                  className="bg-popular w-[31%] flex justify-center items-center rounded-3xl
                hover:scale-[0.9] transition-all duration-500"
                >
                  <h1 className="text-2xl text-white font-semibold ">1025+</h1>
                </div>
              </div>
              <p className="text-2xl text-white font-semibold">{item.name}</p>
              <div className="w-full">
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
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollection;
