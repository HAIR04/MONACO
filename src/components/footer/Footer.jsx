import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Subscribe from "../button/Subscribe";
import Subscribe_Responsive from "../button/Subscribe_Responsive";
const Footer = () => {
  return (
    <div className="w-full bg-footer">
      <div className="mx-auto py-10 w-[90%] 2xl:w-[90%] xl:w-[90%]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col gap-5 2xl:w-[45%] xl:w-[45%]">
            <a
              href="#"
              className="flex  gap-3 2xl:w-full xl:w-full"
            >
              <img
                src="/assets/Logo/logo.png"
                className="2xl:w-[25%] md:w-[25%] xl:w-[25%] rounded-full w-[30%]"
              />
              <h1 className="text-white  xl:mt-8 text-lg text-center md:text-left md:text-2xl font-semibold xl:font-semibold tracking-wider">
                MONACO - MASSAGE QUÝ ÔNG
              </h1>
            </a>
            <p className="text-white font-semibold text-center md:text-left text-base md:text-xl tracking-wide w-full 2xl:w-[100%] xl:w-[100%]">
              NÂNG TẦM QUÝ ÔNG - KHẲNG ĐỊNH PHONG ĐỘ
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide w-full 2xl:w-[90%] xl:w-[90%]">
              Địa chỉ : Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội.
            </p>
            <div>
              <p className="text-white   mb-5 font-medium text-left text-sm md:text-base tracking-wide">
                CÁC PHƯƠNG TIỆN TRUYỀN THÔNG
              </p>
              <ul className="flex text-white  gap-5 justify-start  opacity-30 text-3xl xl:text-3xl leading-loose">
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

          <div className="w-full xl:w-[25%] xl:mt-8 flex flex-col gap-3  xl:gap-5 tracking-wide">
            <p className="text-white text-xl font-extrabold tracking-wider">
              LIÊN HỆ
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Hotline : +84912302830
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Facebook : Massage Quý Ông
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Zalo : +84912302830
            </p>
            <p className="text-white opacity-80 font-normal text-sm md:text-base tracking-wide">
              Telegram : +84912302830
            </p>
          </div>

          <div className="w-full xl:w-[40%] mt-5 xl:mt-8  flex flex-col gap-5">
            <p className="text-white text-xl font-extrabold tracking-wider">
              VỊ TRÍ TRÊN GOOLGE MAP
            </p>
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
        <p className="text-white text-center md:text-left opacity-70 text-xs font-light tracking-wider mt-5">
          © Bản quyền thuộc về Massage Quý Ông
        </p>
      </div>
    </div>
  );
};

export default Footer;
