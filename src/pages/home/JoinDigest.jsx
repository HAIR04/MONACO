import { useState } from "react";

const JoinDigest = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto text-center text-white py-10 md:py-20">
      <span className="text-xl md:text-2xl xl:text-4xl font-semibold leading-loose">
        THÔNG TIN VỀ CHÚNG TÔI
      </span>

      {/* Đoạn mô tả */}
      <div className="lg:w-[100%] w-[95%] mx-auto">
        <p className="text-left pt-5 text-base lg:text-xl leading-relaxed tracking-wide">
          Quán Massage Monaco tự hào là một trong những điểm đến hàng đầu cho
          những ai tìm kiếm sự thư giãn và chăm sóc sức khỏe tại Hà Nội. Chúng tôi
          cam kết mang đến cho khách hàng những trải nghiệm tuyệt vời với dịch vụ
          massage chuyên nghiệp, không gian yên tĩnh và thân thiện.
        </p>

        {/* Nội dung bổ sung - chỉ hiển thị khi `showFullText` hoặc `md` trở lên */}
        {(showFullText || window.innerWidth >= 1024) && (
          <p className="text-left text-base md:text-xl leading-relaxed tracking-wide">
            Tại Monaco, đội ngũ kỹ thuật viên của chúng tôi được tuyển chọn kỹ càng,
            đều là những chuyên gia với tay nghề cao và kinh nghiệm lâu năm trong
            ngành massage. Mỗi dịch vụ của chúng tôi được thiết kế để đáp ứng nhu
            cầu thư giãn, giải tỏa căng thẳng và phục hồi năng lượng cho cơ thể, từ
            các liệu pháp massage thư giãn, đấm bóp toàn thân cho đến xoa bóp đầu và
            các huyệt đạo giúp bạn cảm thấy tươi mới, sảng khoái.
          </p>
        )}

        {/* Nút Xem thêm hoặc Thu gọn */}
        {window.innerWidth < 1024 && (
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
      <div className="flex gap-2 md:gap-5 pt-5 w-full mx-auto">
        {/* Ảnh chính */}
        <div className=" md:w-[50%]">
          <img
            className="h-[350px] sm:h-[400px] md:h-[700px] w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Dai.jpg"
            alt="Dai"
          />
        </div>

        {/* Ảnh phụ */}
        <div className="flex-col my-auto  w-[50%]">
          <img
            className="h-[175px] sm:h-[300px] md:h-[340px] w-[100%] md:w-full  object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Be1.jpg"
            alt="Be1"
          />
          <img
            className="h-[175px] sm:h-[300px] md:h-[340px]  w-[100%] md:w-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Be2.jpg"
            alt="Be2"
          />
        </div>
      </div>


      <div className="pt-5">
        <img
          className="w-full mx-auto h-[150px] sm:h-[300px] lg:h-[400px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
          src="/assets/GioiThieu/Banner3.jpg"
          alt="Banner2"
        />
      </div>
    </div>
  );
};

export default JoinDigest;
