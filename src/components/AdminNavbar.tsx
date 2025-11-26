import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const isAuth = localStorage.getItem("isAuthenticated");
  //     if (!isAuth) {
  //       navigate("/login");
  //     }
  //   }, [navigate]);

  const handleLogout = () => {
    // localStorage.removeItem("isAuthenticated");
    navigate("/");
  };
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/admin" className="text-2xl font-bold text-primary">
            Admin Panel
          </Link>

          <div className="flex gap-8 items-center">
            <button
              className="w-full py-2 px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-primary hover:text-primary/80"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
