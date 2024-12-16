
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Subscribe from "../subscribe/Subscribe";
import Subscribe_Responsive from "../subscribe/Subscribe_Responsive";
const Footer = () => {
  return (
    <div className="w-full bg-footer">
      <div className="mx-auto py-10 w-[90%] 2xl:w-[90%] xl:w-[90%]">
        <div className="flex flex-col 2xl:flex-row xl:flex-row justify-between gap-8">
          <div className="flex flex-col gap-5 2xl:w-[30%] xl:w-[35%]">
            <a href="#" className="flex items-center gap-3 2xl:w-full xl:w-full">
              <img
                src="https://s.pro.vn/mSxg"
                className="2xl:w-[20%] md:w-[7%] xl:w-[15%] rounded-full w-[20%]"
              />
              <h1 className="text-white text-xl font-semibold xl:font-semibold tracking-wider">
                MONACO - MASSAGE QUÝ ÔNG
              </h1>
            </a>
            <p className="text-white font-semibold text-sm md:text-base tracking-wide w-full 2xl:w-[90%] xl:w-[90%]">
              NÂNG TẦM QUÝ ÔNG - KHẲNG ĐỊNH PHONG ĐỘ.
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide w-full 2xl:w-[90%] xl:w-[90%]">
              Địa chỉ : Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
            </p>
            <div>
              <p className="text-white opacity-80 mb-5 font-normal text-sm md:text-base tracking-wide">
                Các phương tiện truyền thông
              </p>
              <ul className="flex text-white gap-5 opacity-30 text-2xl xl:text-3xl leading-loose">
                <li>
                  <a href="https://s.net.vn/5eJU">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://s.net.vn/t17R">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="https://s.net.vn/ZYO7">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
                <li>
                  <a href="https://s.net.vn/Ar0E">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full xl:w-[30%] flex flex-col gap-3 ml-10 xl:gap-5 tracking-wide">
            <h1 className="text-white text-xl font-extrabold tracking-wider">LIÊN HỆ</h1>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Hotline : +84964445201
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Facebook : Massa Quý Ông
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Zalo : +84912302830
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Telegram : +84912302830
            </p>
          </div>

          <div className="w-full xl:w-[40%] mt-5 xl:mt-0 flex flex-col gap-5">
            <h1 className="text-white text-xl font-extrabold tracking-wider">Vị trí trên Google Map</h1>
            <iframe
              src="https://s.net.vn/XRVt"
              className="h-[220px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] 2xl:w-[80%] xl:w-[80%] mx-auto pb-5">
        <hr className="opacity-70" />
        <p className="text-white opacity-70 text-xs font-light tracking-wider mt-5">
          © Bản quyền thuộc về MONACO - Massage Quý Ông
        </p>
      </div>
    </div>
  );
};

export default Footer;
