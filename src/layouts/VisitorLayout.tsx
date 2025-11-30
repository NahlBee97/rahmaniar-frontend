import { Outlet } from "react-router-dom";
import VisitorNavbar from "../components/VisitorNavBar";
import Footer from "../components/Footer";

const VisitorLayout = () => {
  return (
    <>
      <VisitorNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default VisitorLayout;
