// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import Sidebar from "../components/SideBar";

const AdminLayout = () => {
  //   useEffect(() => {
  //     const isAuth = localStorage.getItem("isAuthenticated");
  //     if (!isAuth) {
  //       navigate("/login");
  //     }
  //   }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <main className="container mx-auto px-4">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
