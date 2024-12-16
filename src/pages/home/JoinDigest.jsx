import Subscribe from "../../components/subscribe/Subscribe";
import Subscribe_Responsive from "../../components/subscribe/Subscribe_Responsive";

const JoinDigest = () => {
  return (
    <div className="w-[90%] mx-auto text-center text-white py-10 md:py-20">
      <span className="text-3xl sm:text-4xl font-semibold leading-loose">
        THÔNG TIN VỀ CHÚNG TÔI
      </span>
      <p className="text-left pt-5 text-xl">
        Quán Massage Monaco tự hào là một trong những điểm đến hàng đầu cho những ai tìm kiếm sự thư giãn và chăm sóc sức khỏe tại Hà Nội. Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm tuyệt vời với dịch vụ massage chuyên nghiệp, không gian yên tĩnh và thân thiện.
      </p>
      <p className="text-left text-xl">
        Tại Monaco, đội ngũ kỹ thuật viên của chúng tôi được tuyển chọn kỹ càng, đều là những chuyên gia với tay nghề cao và kinh nghiệm lâu năm trong ngành massage. Mỗi dịch vụ của chúng tôi được thiết kế để đáp ứng nhu cầu thư giãn, giải tỏa căng thẳng và phục hồi năng lượng cho cơ thể, từ các liệu pháp massage thư giãn, đấm bóp toàn thân cho đến xoa bóp đầu và các huyệt đạo giúp bạn cảm thấy tươi mới, sảng khoái.
      </p>

      <div className="flex gap-5 pt-5">
        <div className="w-[50%]">
          <img
            className="h-[700px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
            src="/assets/GioiThieu/Dai.jpg"
            alt="Dai"
          />
        </div>
        <div className="w-[50%]">
          <div className="pb-5">
            <img
              className="w-full h-[350px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
              src="/assets/GioiThieu/Ngan.jpg"
              alt="Ngan"
            />
          </div>
          <div className="flex gap-5">
            <img
              className="w-full h-[350px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
              src="/assets/GioiThieu/Be1.jpg"
              alt="Be1"
            />
            <img
              className="w-full h-[350px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
              src="/assets/GioiThieu/Be2.jpg"
              alt="Be2"
            />
          </div>
        </div>
      </div>

      <p className="text-2xl font-semibold">Vì sao chọn Monaco?</p>
      <p className="text-left pt-3 text-xl font-medium">
        - Chất lượng dịch vụ vượt trội: Đội ngũ kỹ thuật viên được đào tạo bài bản và luôn tận tâm với công việc.
      </p>
      <p className="text-left pt-3 text-xl font-medium">
        - Không gian thư giãn tuyệt vời: Chúng tôi mang đến không gian sang trọng, yên tĩnh, lý tưởng cho một buổi thư giãn hoàn hảo.
      </p>
      <p className="text-left pt-3 text-xl font-medium">
        - Dịch vụ đa dạng: Chúng tôi cung cấp nhiều loại hình massage phù hợp với nhu cầu riêng biệt của từng khách hàng, từ massage thư giãn, giảm đau, đến chăm sóc sắc đẹp.
      </p>
      <p className="text-left pt-3 text-xl font-medium">
        - Cam kết an toàn và thoải mái: Các sản phẩm và liệu pháp của chúng tôi đều được chọn lọc kỹ càng, an toàn cho sức khỏe.
      </p>
      <p className="text-xl text-left py-5">
        Hãy đến Quán Massage Monaco để tận hưởng sự thư giãn tuyệt vời và trải nghiệm dịch vụ chăm sóc sức khỏe đẳng cấp. Chúng tôi luôn sẵn sàng phục vụ bạn với sự chuyên nghiệp và tận tâm nhất!
      </p>

      <div className="flex w-[100%] justify-between">
        <img
          className="w-[49%] h-[400px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
          src="/assets/GioiThieu/Banner3.jpg"
          alt="Banner3"
        />
        <img
          className="w-[49%] h-[400px] object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
          src="/assets/GioiThieu/Banner2.jpg"
          alt="Banner2"
        />
      </div>
      <p className="text-left pt-3 text-xl font-medium">
        Massage Monaco không chỉ là một liệu pháp chăm sóc cơ thể mà còn là hành trình tái tạo năng lượng, nơi các quý ông có thể thả lỏng tâm trí, lấy lại sự tự tin và phong thái đĩnh đạc. Đến với Monaco, bạn sẽ được tận hưởng sự hoàn hảo, vượt qua mọi giới hạn của sự thư giãn.
      </p>
    </div>
  );
};

export default JoinDigest;
