import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const JoinDigest = () => {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const [showFullText, setShowFullText] = useState(isLgScreen);

  // Cập nhật trạng thái khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      const lgScreen = window.innerWidth >= 1024;
      setIsLgScreen(lgScreen);
      setShowFullText(lgScreen); // Tự động hiển thị đầy đủ trên màn hình lớn
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Nội dung mô tả
  const fullText = `
    Quán Massage Quý Ông tự hào là một trong những điểm đến hàng đầu cho những ai tìm kiếm sự thư giãn và chăm sóc sức khỏe tại Hà Nội. Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm tuyệt vời với dịch vụ massage chuyên nghiệp, không gian yên tĩnh và thân thiện.
    Tại Masage Quý Ông, đội ngũ kỹ thuật viên của chúng tôi được tuyển chọn kỹ càng, đều là những chuyên gia với tay nghề cao và kinh nghiệm lâu năm trong ngành massage. Mỗi dịch vụ của chúng tôi được thiết kế để đáp ứng nhu cầu thư giãn, giải tỏa căng thẳng và phục hồi năng lượng cho cơ thể, từ các liệu pháp massage thư giãn, đấm bóp toàn thân cho đến xoa bóp đầu và các huyệt đạo giúp bạn cảm thấy tươi mới, sảng khoái.
  `;

  const previewText = `${fullText.slice(0, 220)}...`;

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto text-center text-white py-10 md:py-20">
      <span className="text-xl md:text-2xl xl:text-4xl font-semibold leading-loose">
        THÔNG TIN VỀ CHÚNG TÔI
      </span>

      {/* Đoạn mô tả */}
      <div className="lg:w-[100%] w-[100% pt-5 mx-auto">
        <p className="text-left text-base md:text-xl leading-relaxed tracking-tight">
          {isLgScreen || showFullText ? fullText : previewText}
        </p>

        {/* Nút Xem thêm / Thu gọn (chỉ hiển thị trên màn hình nhỏ) */}
        {!isLgScreen && (
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="text-white italic text-sm underline mt-3"
          >
            {showFullText ? "Thu gọn" : "Xem thêm"}
          </button>
        )}
      </div>

      {/* Các phần còn lại giữ nguyên */}
      <div className="flex gap-2 md:gap-5 pt-5 w-full mx-auto">
        {/* Ảnh chính */}
        <div className="md:w-[50%] w-[60%]">
          <img
            className="h-[350px] sm:h-[400px] md:h-[700px] w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Dai.jpg"
            alt="Lady Loading"
          />
        </div>

        {/* Ảnh phụ */}
        <div className="flex flex-col md:gap-5 h-[350px] justify-between w-[50%]">
          <img
            className="h-[170px] sm:h-[300px] md:h-[340px] w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Be1.jpg"
            alt="Lady Loading"
          />
          <img
            className="h-[170px] sm:h-[300px] md:h-[340px] w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Be2.jpg"
            alt="Lady Loading"
          />
        </div>
      </div>

      <div className="pt-5">
        <img
          className="w-full mx-auto h-[150px] sm:h-[300px] lg:h-[400px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
          src="/assets/GioiThieu/Banner1.webp"
          alt="Lady Loading"
        />
      </div>
    </div>
  );
};

export default JoinDigest;
