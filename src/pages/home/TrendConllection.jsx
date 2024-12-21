import { Products_Service } from "../../components/data/Service";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const TrendingCollection = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(
    getVisibleImagesCount()
  );

  // Hàm xác định số lượng ảnh hiển thị dựa trên kích thước màn hình
  function getVisibleImagesCount() {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // Lắng nghe sự thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => setVisibleImagesCount(getVisibleImagesCount());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-header">
      {/* Tiêu đề */}
      <div className="w-[85%] mx-auto py-5 mb-10 flex items-center justify-between relative">
        <span className="text-7xl uppercase sm:text-4xl font-semibold leading-loose animate-blink absolute left-1/2 transform -translate-x-1/2">
        Welcome to Massage Quý Ông
        </span>
        <Link
          to="/rankings"
          className="text-2xl  uppercase sm:text-2xl font-semibold leading-loose text-right animate-blink ml-auto transition-all duration-700 hover:text-xl"
        >
          Kỹ Thuật Viên
        </Link>
      </div>

      {/* Ảnh cố định */}
      <div className="w-[90%] mx-auto flex justify-center">
        <div className="w-full flex flex-col gap-5 relative group">
          {/* Hình ảnh sản phẩm */}
          <img
            src="/assets/GioiThieu/Banner1.jpg"
            alt="Giới thiệu"
            className="w-full hover:scale-[0.95] transition-all duration-500 h-auto object-cover"
          />
          <p className="text-white text-xl">
            Hệ thống khách sạn EMERALD đạt tiêu chuẩn quốc tế trực thuộc sự quản
            lý của Công ty TNHH Du Lịch Âu Việt. Khách sạn đầu tiên được xây
            dựng vào năm 2016, có tên khách sạn Âu Việt Hà Nội chuẩn 3 sao, bao
            gồm 9 tầng với 50 phòng nghỉ. Nằm tại khu vực Mỹ Đình, một vị trí
            đắc địa thuộc trung tâm thủ đô Hà Nội. Khách sạn được thiết kế theo
            phong cách Á- u sang trọng kết hợp cùng trang thiết bị nội thất đồ
            gỗ cao cấp. Với gam màu nâu là điểm thu hút ấn tượng cho quý khách
            ngay lần đầu bước chân đến khách sạn. Bên cạnh đó, sự kết hợp những
            tông màu trắng tươi sáng góp phần làm cho nghỉ của khách sạn trở nên
            thật hiện đại và sang trọng, trẻ trung và thu hút. Những điều đó đã
            tạo nên một không gian nghỉ dưỡng gần gũi, ấm áp và thoải mái cho
            quý khách.
          </p>
          {/* Video thay thế hình ảnh cuối */}
          <ReactPlayer
            url="/https://www.youtube.com/watch?v=eF7eRpLivSg&t=4s" // Đường dẫn đến video
            playing={false}
            controls={true}
            width="100%"
            height="500px"
            className="hover:scale-[0.95] transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
