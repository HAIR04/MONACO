import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="bg-body">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
