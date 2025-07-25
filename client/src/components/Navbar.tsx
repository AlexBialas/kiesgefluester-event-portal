import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/lineup", label: "Line-Up" },
    { path: "/tickets", label: "Tickets" },
    { path: "/location", label: "Location" },
    { path: "/rsvp", label: "RSVP" },
    { path: "/contact", label: "Kontakt" },
    { path: "/admin", label: "Admin" },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide uppercase">
          KIESGEFLÜSTER
        </h1>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-pink-500 transition duration-300 ${
                  pathname === path ? "text-pink-400 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        {isOpen && (
          <ul className="md:hidden absolute top-[70px] left-0 w-full bg-black text-center py-6 space-y-4 z-40 shadow-xl">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-pink-500 transition duration-300 ${
                    pathname === path ? "text-pink-400 font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
