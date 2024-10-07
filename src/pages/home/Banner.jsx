
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="w-[75%] md:w-[80%]  mx-auto flex flex-col md:flex-row py-6 xl:py-24 text-white gap-5 lg:w-[70%]">

      <div className="2xl:w-[50%] flex flex-col gap-7 md:w-[95%] xl:w-[60%] ">
        <span className="lg:w-[80%] w-full  text-center md:text-left text-3xl md:text-4xl xl:text-7xl leading-tight font-semibold">
          Discover Digital Art & Collect NFTs
        </span>
        <p className="w-full text-center md:text-left text-base xl:text-2xl font-normal capitalize">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <div className="w-full 2xl:w-[50%] rounded-3xl box-border relative overflow-hidden block md:hidden">
        <a href="#">
          <img className="2xl:w-[80%] xl:w-[90%]" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="3D Image" />
        </a>
      </div>
        <button
          className="w-full md:w-[60%] xl:w-[40%] flex justify-center items-center gap-5 bg-popular box-content px-2 py-4 rounded-3xl 
                     active:bg-opacity-10 hover:scale-[0.95] transition-all duration-500"
        >
          <FontAwesomeIcon className="xl:text-2xl text-xl" icon={faRocket} />
          <p className="text-base font-semibold">Get Started</p>
        </button>

        <div className="flex justify-between ">
          <div className="w-[30%]">
            <h1 className="text-xl lg:text-3xl font-semibold">240k+</h1>
            <p className="text-sm lg:text-2xl font-normal tracking-wider leading-loose">
              Total Sale
            </p>
          </div>
          <div className="w-[30%]">
            <h1 className="text-xl lg:text-3xl font-semibold">100k+</h1>
            <p className="text-sm lg:text-2xl font-normal tracking-wider leading-loose">
              Auctions
            </p>
          </div>
          <div className="w-[30%]">
            <h1 className="text-xl lg:text-3xl font-semibold">240k+</h1>
            <p className="text-sm lg:text-2xl font-normal tracking-wider leading-loose">
              Artists
            </p>
          </div>
        </div>
      </div>

      <div className="w-full 2xl:w-[50%] rounded-3xl box-border relative overflow-hidden hidden md:block xl">
        <a href="#">
          <img className="2xl:w-[80%] xl:w-[90%]" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="3D Image" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
