import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="2xl:container mx-auto px-2">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayouts;
