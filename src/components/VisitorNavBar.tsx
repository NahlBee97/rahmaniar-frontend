import { Link } from "react-router-dom";
import NavbarDropdown from "./TriDharmaDropdown";

const VisitorNavbar = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "News", to: "/news" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-400">
            Ir. Rahmaniar, S.Kom., M.Kom
          </Link>

          <div className="flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <NavbarDropdown/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VisitorNavbar;
