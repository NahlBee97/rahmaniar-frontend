import { useState } from "react";
import { Link } from "react-router-dom";

// --- Icons ---

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

// --- Types ---

interface DropdownItem {
  label: string;
  link: string;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

// --- Main Component ---

const NavbarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Default open to match image

  const menuItems: DropdownItem[] = [
    { label: "Pendidikan", link: "#" },
    { label: "Penelitian", link: "/publications" },
    { label: "Pengabdian", link: "#" },
    { label: "Penunjang", link: "#" },
    { label: "Kewajiban Khusus", link: "#" },
  ];

  return (
    <div className="relative w-64 font-sans">
      {/* Dropdown Header/Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-blue-400 text-white rounded-t-lg transition-colors hover:bg-opacity-90"
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm leading-normal tracking-wide">
            Bidang Tri Dharma PT
          </span>
        </div>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full z-50 flex flex-col bg-blue-400 border-x border-b border-blue-400 rounded-b-lg overflow-hidden shadow-lg">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-6 py-3 text-left text-white hover:bg-blue-300 transition-colors group"
            >
              <span className="text-sm font-medium">{item.label}</span>
              {/* Render submenu chevron if applicable */}
              {item.hasSubmenu && (
                <ChevronUpIcon className="w-4 h-4 text-[#90cb9f] group-hover:text-[#4cf676]" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;