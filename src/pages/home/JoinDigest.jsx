import { useState } from "react";

const JoinDigest = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="w-[80%] mx-auto text-center text-white py-10 md:py-20">
      <span className="text-xl md:text-4xl font-semibold leading-loose">
        THÔNG TIN VỀ CHÚNG TÔI
      </span>

      {/* Đoạn mô tả */}
      <div>
        <p className="text-left pt-5 text-sm md:text-xl">
          Quán Massage Monaco tự hào là một trong những điểm đến hàng đầu cho
          những ai tìm kiếm sự thư giãn và chăm sóc sức khỏe tại Hà Nội. Chúng tôi
          cam kết mang đến cho khách hàng những trải nghiệm tuyệt vời với dịch vụ
          massage chuyên nghiệp, không gian yên tĩnh và thân thiện.
        </p>

        {/* Nội dung bổ sung - chỉ hiển thị khi `showFullText` hoặc `md` trở lên */}
        {(showFullText || window.innerWidth >= 768) && (
          <p className="text-left text-sm md:text-xl">
            Tại Monaco, đội ngũ kỹ thuật viên của chúng tôi được tuyển chọn kỹ càng,
            đều là những chuyên gia với tay nghề cao và kinh nghiệm lâu năm trong
            ngành massage. Mỗi dịch vụ của chúng tôi được thiết kế để đáp ứng nhu
            cầu thư giãn, giải tỏa căng thẳng và phục hồi năng lượng cho cơ thể, từ
            các liệu pháp massage thư giãn, đấm bóp toàn thân cho đến xoa bóp đầu và
            các huyệt đạo giúp bạn cảm thấy tươi mới, sảng khoái.
          </p>
        )}

        {/* Nút Xem thêm hoặc Thu gọn */}
        {window.innerWidth < 768 && (
          <>
            {!showFullText ? (
              <button
                onClick={() => setShowFullText(true)}
                className="text-white italic text-sm underline mt-3"
              >
                Xem thêm
              </button>
            ) : (
              <button
                onClick={() => setShowFullText(false)}
                className="text-white italic text-sm underline mt-3"
              >
                Thu gọn
              </button>
            )}
          </>
        )}
      </div>

      {/* Các phần còn lại giữ nguyên */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-5 pt-5 w-full mx-auto">
        {/* Ảnh chính */}
        <div className="flex-1">
          <img
            className="h-[250px] sm:h-[400px] md:h-[700px] w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Dai.jpg"
            alt="Dai"
          />
        </div>

        {/* Ảnh phụ */}
        <div className="flex flex-1 md:flex-col gap-5">
          <img
            className="h-[100px] sm:h-[300px] md:h-[345px] w-[50%] md:w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Be1.jpg"
            alt="Be1"
          />
          <img
            className="h-[100px] sm:h-[300px] md:h-[345px] w-[50%] md:w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Be2.jpg"
            alt="Be2"
          />
        </div>
      </div>

      <div className="pt-5">
        <img
          className="w-full mx-auto h-[200px] sm:h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
          src="/assets/GioiThieu/Banner2.jpg"
          alt="Banner2"
        />
      </div>
    </div>
  );
};

export default JoinDigest;
