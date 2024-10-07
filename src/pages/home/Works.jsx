import React from "react";
const Worlds = () => {
  const Images = [
    {
      id: 1,
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-3@2x.svg",
      title: "Setup Your Wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      id: 2,
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-4@2x.svg",
      title: "Create Collection",
      text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      id: 3,
      url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-5@2x.svg",
      title: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="w-full">
      <div
        className="w-[75%] md:w-[80%] lg:w-[70%] mx-auto
                            "
      >
        <span className="text-3xl md:text-4xl text-white font-semibold ">How It Works</span>
        <p className="text-base md:text-2xl text-white font-normal leading-loose capitalize ">
          Find Out How To Get Started
        </p>
      </div>
      <div
        className=" w-[75%] lg:w-[70%] mx-auto flex gap-5 flex-col  md:flex-row justify-between py-10
                    md:w-[80%]"
      >
        {Images.map((item) => (
          <React.Fragment>
            <div
              className="w-full md:w-[31.5%] flex flex-col bg-footer rounded-3xl text-white  p-5
              hover:scale-95 transition-all duration-500"
              key={item.id}
            >
              <div className="flex md:flex-col md:items-center">
              <img className="w-[40%] md:w-full " src={item.url} alt={item.title}></img>
             <div className="flex flex-col md:items-center ">
             <span className="text-base xl:text-2xl font-medium">{item.title}</span>
             <p className="md:text-center text-xs xl:text-lg md:w-[85%] py-2">{item.text}</p>
             </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Worlds;
