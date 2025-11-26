import { Outlet } from "react-router-dom";
import VisitorNavbar from "../components/VisitorNavBar";

const VisitorLayout = () => {
  return (
    <>
      <VisitorNavbar />
      <Outlet />
    </>
  );
};

export default VisitorLayout;
