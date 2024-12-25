import { Products_Service } from "../../components/data/goi-dich-vu";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const TrendingCollection = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(
    getVisibleImagesCount()
  );
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 1024);

  // Hàm xác định số lượng ảnh hiển thị dựa trên kích thước màn hình
  function getVisibleImagesCount() {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // Lắng nghe sự thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setVisibleImagesCount(getVisibleImagesCount());
      setIsExpanded(window.innerWidth >= 1024); // Tự động mở rộng trên màn hình lớn
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="lg:w-[90%] w-[100%] mx-auto bg-header">
      {/* Tiêu đề */}
      <div className="w-full mx-auto py-5 mb-10 flex items-center justify-between relative">
        <div className="xl:text-5xl md:text-2xl text-xl w-full uppercase font-semibold leading-loose text-center text-white absolute md:left-1/2 transform md:-translate-x-1/2">
          {/* Hiển thị cho màn hình nhỏ (dưới md) */}
          <h1 className="block md:hidden text-white italic w-[100%] text-center">
            Welcome to Massage Quý Ông
          </h1>

          {/* Hiển thị cho màn hình từ md trở lên */}
          <h1 className="hidden md:inline-block w-full text-white italic tracking-widest">
            Welcome to Massage Quý Ông
          </h1>
        </div>

        <Link
          to="/rankings"
          className="hidden text-white lg:block md:mr-14 lg:mr-0 text-sm p-3 xl:text-xl lg:p-5 rounded-full bg-customRed hover:text-customRed hover:bg-white uppercase font-semibold leading-loose text-right  ml-auto transition-all duration-700 hover:scale-110"
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
          <div className="text-white md:text-xl text-base px-4 lg:px-0 tracking-tight">
            <p>
              Hệ thống Massage Quý Ông đạt tiêu chuẩn quốc tế, Trung tâm massage
              đầu tiên được thành lập vào năm 2016 tại khu vực Mỹ Đình, trung
              tâm đắc địa của thủ đô Hà Nội.Massage Quý Ông được thiết kế theo
              phong cách kết hợp Á - Âusang trọng, cùng trang thiết bị hiện đại
              và nội thất cao cấp. Không gian trung tâm sử dụng gam
            </p>
            {isExpanded || window.innerWidth >= 1024 ? (
              <p>
                 màu nâu trầm làm điểm nhấn, tạo cảm giác ấm cúng
                và lịch lãm ngay từ lần đầu bước chân đến. Bên cạnh đó, sự kết
                hợp giữa tông màu trắng tinh tế và ánh sáng dịu nhẹ giúp không
                gian trở nên trẻ trung, hiện đại và sang trọng. Với đội ngũ kỹ
                thuật viên massage chuyên nghiệp, được đào tạo bài bản cùng các
                liệu pháp chăm sóc sức khỏe đẳng cấp, chúng tôi cam kết mang đến
                cho quý ông những trải nghiệm thư giãn tuyệt vời nhất. Đây chính
                là không gian lý tưởng để quý khách tận hưởng sự thoải mái, tái
                tạo năng lượng và khẳng định phong cách đẳng cấp của mình.
              </p>
            ) : null}

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
          <div>
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
