import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as Images from "../../assets/images";
const TimeEvent = () => {
  return (
    <div className="w-full">
      <div className=" 2xl:w-[100%] mt-[680px] rounded-3xl box-border relative ">
        <img
          src={Images.Bgr}
          className="2xl:w-[100%] h-[600px] absolute bottom-28  "
        ></img>
        <div className="mx-auto flex md:flex-row flex-col  justify-center md:justify-between items-center ">
          <div
            className="px-12 bottom-[450px] 2xl:px-56 flex flex-col gap-8 absolute  md:bottom-40 left-0 
                          xl:px-28"
          >
            <div className="w-[40%] md:w-[20%] lg:w-[13%] flex justify-evenly items-center p-3  bg-footer rounded-3xl">
              <img
                src={Images.banner_user}
                className="w-[20%]  rounded-full"
              ></img>
              <p className="text-sm font-medium text-white">Animakid</p>
            </div>
            <span className="text-4xl lg:text-5xl text-white font-semibold">
              Magic Mashrooms
            </span>
            <button
              className="w-[15%] md:w-[30%] lg:w-[15%] md:flex justify-center items-center bg-white gap-5 border-2 border-popular box-content px-2 py-4 rounded-full
               hover:scale-[0.95] transition-transform duration-500 
               hidden"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="text-xl text-popular b"
              />
              <p className="text-base font-semibold">See NFT</p>
            </button>
          </div>

          <div
            className="px-12 2xl:px-56
                        xl:px-28 
                        flex flex-col gap-8 absolute md:bottom-40 bottom-36 md:right-0"
          >
            <div className="flex flex-col gap-2 rounded-3xl  p-6  bg-purple-950 bg-opacity-25">
              <h1 className="text-sm text-white">Auction ends in:</h1>

              <div className="flex gap-5 items-center  text-white">
                <p className="text-5xl  font-semibold">59</p>
                <p className="text-2xl font-bold">:</p>
                <p className="text-5xl  font-semibold">59</p>
                <p className="text-2xl font-bold">:</p>
                <p className="text-5xl  font-semibold">59</p>
              </div>
              <div className=" flex   text-white text-xs">
                <h1 className="w-[33%] text-left">Hours</h1>
                <h1 className="w-[33%] text-center">Minutes</h1>
                <h1 className="w-[33%] text-right">Seconds</h1>
              </div>
              
            </div>
            <button
              className="w-full md:hidden justify-center items-center bg-white gap-5 border-2 border-popular box-content px-2 py-4 rounded-full
               hover:scale-[0.95] transition-transform duration-500 
               flex"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="text-xl text-popular b"
              />
              <p className="text-base font-semibold">See NFT</p>
            </button>
          </div>
        
        </div>
      
      </div>
    </div>
  );
};
export default TimeEvent;
