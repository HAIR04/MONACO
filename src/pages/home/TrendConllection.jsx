import { Products_Service } from "../../components/data/Service";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const TrendingCollection = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(
    getVisibleImagesCount()
  );

  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="lg:w-[90%] w-[100%] mx-auto bg-header">
      {/* Tiêu đề */}
      <div className="w-full mx-auto py-5 mb-10 flex items-center justify-between relative">
        <div className="xl:text-4xl md:text-2xl text-xl w-full uppercase font-semibold leading-loose text-center text-white absolute md:left-1/2 transform md:-translate-x-1/2">
          {/* Hiển thị cho màn hình nhỏ (dưới md) */}
          <h1 className="block md:hidden bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text italic w-[100%] text-center">
            Welcome Massage Quý Ông
          </h1>

          {/* Hiển thị cho màn hình từ md trở lên */}
          <h1 className="hidden md:inline-block w-full bg-gradient-to-t from-yellow-800 font-bold to-yellow-300 text-transparent bg-clip-text italic tracking-widest">
            Welcome Massage Quý Ông
          </h1>
        </div>

        <Link
          to="/rankings"
          className="hidden text-white md:block md:mr-14 lg:mr-0 text-sm p-3 xl:text-xl lg:p-5 rounded-full bg-customRed uppercase font-semibold leading-loose text-right animate-shake ml-auto transition-all duration-700 hover:scale-110"
        >
          Kỹ Thuật Viên
        </Link>
      </div>

      {/* Ảnh cố định */}
      <div className="lg:w-[100%] w-full mx-auto flex justify-center">
        <div className="w-full flex flex-col gap-5 relative group">
          {/* Hình ảnh sản phẩm */}
          <img
            src="/assets/GioiThieu/Banner3.jpg"
            alt="Giới thiệu"
            className="w-full h-auto object-cover hover:scale-[0.95] transition-transform duration-500"
          />

          {/* Hiển thị đoạn text */}
          <div className="text-white md:text-base lg:text-xl text-sm px-4 lg:px-0">
            {window.innerWidth >= 1024 || isExpanded ? (
              <p>
                Hệ thống khách sạn EMERALD đạt tiêu chuẩn quốc tế trực thuộc sự
                quản lý của Công ty TNHH Du Lịch Âu Việt. Khách sạn đầu tiên
                được xây dựng vào năm 2016, có tên khách sạn Âu Việt Hà Nội
                chuẩn 3 sao, bao gồm 9 tầng với 50 phòng nghỉ. Nằm tại khu vực
                Mỹ Đình, một vị trí đắc địa thuộc trung tâm thủ đô Hà Nội. Khách
                sạn được thiết kế theo phong cách Á-Âu sang trọng kết hợp cùng
                trang thiết bị nội thất đồ gỗ cao cấp. Với gam màu nâu là điểm
                thu hút ấn tượng cho quý khách ngay lần đầu bước chân đến khách
                sạn. Bên cạnh đó, sự kết hợp những tông màu trắng tươi sáng góp
                phần làm cho nghỉ của khách sạn trở nên thật hiện đại và sang
                trọng, trẻ trung và thu hút. Những điều đó đã tạo nên một không
                gian nghỉ dưỡng gần gũi, ấm áp và thoải mái cho quý khách.
              </p>
            ) : (
              <p>
                Hệ thống khách sạn EMERALD đạt tiêu chuẩn quốc tế trực thuộc sự
                quản lý của Công ty TNHH Du Lịch Âu Việt. Khách sạn đầu tiên
                được xây dựng vào năm 2016, có tên khách sạn Âu Việt Hà Nội
                chuẩn 3 sao...
              </p>
            )}

            {/* Nút Xem thêm / Thu gọn */}
            {window.innerWidth < 1024 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white italic text-center w-full underline mt-2"
              >
                {isExpanded ? "Thu gọn" : "Xem thêm"}
              </button>
            )}
          </div>

          {/* Video thay thế hình ảnh cuối */}
          <div className="px-5 md:px-0">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eF7eRpLivSg" // Đường dẫn video đúng định dạng
              playing={false}
              controls={true}
              width="100%"
              height="400px"
              className="hover:scale-[0.95] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
