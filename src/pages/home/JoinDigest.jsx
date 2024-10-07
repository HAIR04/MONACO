import * as Images from "../../assets/images";
import Subscribe from "../../components/subscribe/Subscribe";
import Subscribe_Responsive from "../../components/subscribe/Subscribe_Responsive";

const JoinDigest = () => {
  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-[95%] md:w-[80%] 2xl:w-[70%] lg:w-[80%] rounded-2xl mx-auto md:bg-footer">
        <div className="flex flex-col md:flex-row justify-between p-10 lg:p-14 md:gap-5 gap-0
        ">
          <div className="w-full lg:w-[46%]">
            <img src={Images.Join} alt="Join our digest" />
          </div>

          
          <div className="w-full  lg:w-[46%] text-white xl:py-5">
            <p className="w-full xl:w-[90%] text-2xl md:text-xl mt-5 lg:text-2xl md:mt-0 xl:text-4xl font-semibold">Join Our Weekly Digest</p>
            <p className="text-base md:text-sm lg:text-xl py-5">
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </p>

            <div className="hidden lg:block lg:pt-10">
              <Subscribe />
            </div>

            <div className="lg:hidden">
              <Subscribe_Responsive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDigest;
