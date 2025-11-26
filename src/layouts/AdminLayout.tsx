// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
//   useEffect(() => {
//     const isAuth = localStorage.getItem("isAuthenticated");
//     if (!isAuth) {
//       navigate("/login");
//     }
//   }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar/>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
