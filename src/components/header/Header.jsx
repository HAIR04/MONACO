import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBarsStaggered ,faRankingStar , faCircleNodes} from "@fortawesome/free-solid-svg-icons";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="mx-auto py-5 flex justify-between border-white border-b border-opacity-15 
   w-[95%] md:w-[90%] 2xl:w-[93%] xl:w-[93%]"
    >
      <Link
        to="/"
        className=" flex items-center 
             gap-2
             2xl:w-[63%] 2xl:gap-3
             xl:w-[63%] xl:gap-3"
      >
        <img
          src={logo}
          className="2xl:w-[5%] w-[8%]
                                   xl:w-[5%]"
        ></img>
        <h1 className="text-white text-sm xl:text-xl font-semibold tracking-wide">
          NFT Marketplace
        </h1>
      </Link>
      <ul
        className="2xl:w-[35%] hidden justify-around items-center   xl:flex
                    text-white text-base font-semibold
                    xl:w-[35%] "
      >
        <li>
          <Link
            to="/marketplace"
            className="hover:text-sm hover:mr-3 transition-all duration-700"
          >
            Marketplace
          </Link>
        </li>
        <li>
          <Link
            to="/rankings"
            className="hover:text-sm hover:mr-3 transition-all duration-700"
          >
            Rankings
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className="hover:text-sm hover:mr-3 transition-all duration-700"
          >
            Connect a wallet
          </Link>
        </li>
      </ul>
      <Link
        to="/login"
        className="hidden justify-center items-center gap-3 rounded-3xl py-5 mx-auto   xl:flex
                  2xl:w-[12%] 2xl:py-5
                  xl:w-[12%] xl:py-3
                 bg-popular text-white 
                 active:opacity-90 transition-all
                 hover:scale-[0.9] duration-500
                 
                 "
      >
        <FontAwesomeIcon icon={faUser} />
        <p
          className=" text-base font-medium 
        "
        >
          Sign Up
        </p>
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden text-2xl text-white  "
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
        {open && 
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-body z-50 flex flex-col ">
          <Link to="/marketplace" className="text-sm border-b border-white border-opacity-30 p-2 w-full text-left font-medium"><FontAwesomeIcon icon={faSpaceAwesome} /> Marketplace</Link>
          <Link to="/rankings" className="text-sm border-b border-white border-opacity-30 p-2 w-full text-left font-medium"><FontAwesomeIcon icon={faRankingStar} /> Rankings</Link>
          <Link to="/wallet" className="text-sm border-b border-white border-opacity-30 p-2 w-full text-left font-medium"><FontAwesomeIcon icon={faCircleNodes} /> Connect a wallet</Link>
          <Link to="/login" className="mt-5 text-lg bg-popular flex justify-center items-center gap-2 w-[40%] mx-auto p-3 rounded-3xl 
          active:opacity-50 transition-all duration-500"><FontAwesomeIcon icon={faUser} />Login</Link>
        </div>
           
        }
      </button>
    </div>
  );
};
export default Header;
