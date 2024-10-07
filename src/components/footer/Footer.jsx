import { logo } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord,faYoutube,faXTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import Subscribe from "../subscribe/Subscribe";
import Subscribe_Responsive from "../subscribe/Subscribe_Responsive";
const Footer = () => {
  return (
    <div className="w-full bg-footer">
    <div className=" mx-auto py-10
    w-[70%]
    2xl:w-[65%]
    xl:w-[75%]">
    <div className="flex flex-col 2xl:flex-row xl:flex-row ">
      <div className=" flex flex-col gap-5
      2xl:w-[35%]
      xl:w-[40%]">
        <a
          href="#"
          className=" flex items-center gap-3
          
             2xl:w-full 
             xl:w-full"
        >
          <img src={logo} className="2xl:w-[10%] md:w-[7%] xl:w-[12%] w-[12%]"></img>
          <h1 className="text-white text-xl font-semibold xl:font-semibold tracking-wider">NFT Marketplace</h1>
        </a>
        <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide 
        w-full
        2xl:w-[80%]
        xl:w-[70%]">NFT marketplace UI created with Anima for Figma.</p>
        <div>
          <p className=" text-white opacity-80 font-normal text-sm md:text-base tracking-wide">Join our community</p>
          <ul className="flex text-white opacity-30 text-2xl xl:text-3xl leading-loose gap-3 ">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full xl:w-[25%] flex flex-col gap-3 xl:gap-5 tracking-wide">
        <h1 className="text-white text-xl font-extrabold tracking-wider">Explore</h1>
        <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide  ">Marketplace</p>
        <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide  ">Rankings</p>
        <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide  ">Connect a wallet</p>
      </div>

      <div className=" w-full mt-5 xl:mt-0 xl:w-[45%] flex flex-col gap-5">
        <h1 className="text-white text-xl font-extrabold tracking-wider">Join Our Weekly Digest</h1>
        <p className="text-white opacity-80 font-normal text-sm md:text-base 
        2xl:w-[80%]
        xl:w-[80%]">Get exclusive promotions & updates straight to your inbox.</p>  
        <div className="md:block hidden md:w-[70%] lg:w-full"><Subscribe/></div>
        <div className="md:hidden block"><Subscribe_Responsive/></div>
        
      </div>
    </div>
   
    </div>
    <div className="w-[70%] 2xl:w-[70%] xl:w-[80%] mx-auto pb-5"> 
   <hr className="opacity-70"></hr>
   <p className="text-white opacity-70 text-xs font-light tracking-wider mt-5">Ⓒ NFT Market. Use this template freely.</p>
   </div>
    </div>
  );
};
export default Footer;
