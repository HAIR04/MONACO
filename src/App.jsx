import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./components/Scroll/Scroll";
import DefaultImage from "./components/DEAL/deal";  // Import DefaultImage
import CallNowButton from "./components/CallMe/Call";

const App = () => {
  return (
    <div className="bg-black overflow-hidden">
      <ScrollToTop />  {/* Đặt ScrollToTop ở đây */}
      <Header />
      <CallNowButton/>
      
      {/* Hiển thị ảnh mặc định khi không có route con */}
      <DefaultImage />  {/* Ảnh này sẽ đè lên toàn bộ nội dung */}

      <Outlet /> {/* Render các route con */}
      
      <Footer />
    </div>
  );
};

export default App;
