
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    pauseOnHover: true
  };

  return (
    <div className="w-[100%] md:w-[80%] mx-auto flex flex-col pb-6  xl:py-10 text-white gap-5 lg:w-[100%] overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/465175136_532883556123331_5376694755510346765_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGQRrvJ1_QCfgRKLtnymPBqZ8XRstc-Fp9nxdGy1z4Wn8zQLVnkPW-DacC_tw5pjauf_EgWP5Skx3RK7QE-NCdD&_nc_ohc=6_OpMFV-eXAQ7kNvgEK7NgB&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AmH6f-v5QfoVurPVKBb31Kr&oh=00_AYAVCjY3cPAx5qcugBSLbw3j4Lv38F7sWZMyeA_cgh1__A&oe=675EEED5"
              alt="Slide 1"
              className="w-full h-[200px] lg:h-[600px] object-cover "
            />
          </div>
          <div>
          <img
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/453906037_472478315497189_9135609767205899196_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEl5KWivlft39h7zG06Zua0dxJIHvALfaJ3Ekge8At9ojnlJsBsHYmYKV_OnZi0nkHX4XtDEOvWAM6HgypKnxCs&_nc_ohc=87mAXBPv0e0Q7kNvgEX1dR3&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=ARMfH_Womdsmgks7nAivEUS&oh=00_AYAQMn-AoW9MCcDIycS6ADpJItGYaZ5_RVlWJtJgu_Bq2Q&oe=675EF232"
              alt="Slide 1"
              className="w-full h-[200px] lg:h-[600px] object-cover"
            />
          </div>
          <div>
          <img
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/465694224_536303375781349_1113499451929720865_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHKyL5e96xihAgSvU3t24VgB9xdzoMjxBsH3F3OgyPEG-0vE3plb6Pu5MQct7jGecKBxGoaxVYoWDRv4k_NcZwL&_nc_ohc=u3WZV-9RGO4Q7kNvgFxfQfW&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AOVjRp_6M5XjbPPeD6VKu7h&oh=00_AYA74lieiADzVrP1OeX_uo9FR2meV4sKJqa8_5y3y9eCaw&oe=675F2190"
              alt="Slide 1"
              className="w-full h-[200px] lg:h-[600px] object-cover"
            />
          </div>
        </Slider>
      </div>

   
    </div>
  );
};

export default Banner;
