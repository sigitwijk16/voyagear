import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center">
        <div className="text-white font-bold text-xl">Voyagear</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:space-x-8 ${isOpen ? "block" : "hidden"}`}>
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Riwayat
          </a>
          <a href="#" className="text-white">
            Keranjang
          </a>
          <a href="#" className="text-white">
            Profil
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
