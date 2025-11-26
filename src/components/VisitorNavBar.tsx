import { Link } from "react-router-dom";

const VisitorNavbar = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "News", to: "/blog" },
    { label: "Research", to: "/publications" },
  ];
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Rahmaniar Zahra Queen
          </Link>

          <div className="flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VisitorNavbar;
