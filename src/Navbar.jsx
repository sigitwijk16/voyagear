import React, { useState } from "react";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container lg:mx-auto max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/images/logo.png"
            className="h-8 w-auto"
            alt="Flowbite Logo"
          />
          <p className="text-2xl text-white border-b-2 border-transparent font-semibold transition duration-300 ease-in-out hover:border-b-2 hover:scale-110 hover:border-golden hover:text-golden">
            Voyagear
          </p>
        </a>
        <button
          onClick={toggleDrawer}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-white"
          aria-controls="navbar-default"
          aria-expanded={isDrawerOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleDrawer}
        ></div>
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-gray-800 shadow-lg z-50 transform transition-transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none"
          >
            <span className="sr-only">Close drawer</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="font-normal text-lg flex flex-col p-4 space-y-2 mt-6">
            <li>
              <a
                href="#"
                className="block py-2 px-3 border-b-2 border-white text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 border-b-2 border-white text-white"
              >
                Riwayat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 border-b-2 border-white text-white"
              >
                Keranjang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 border-b-2 border-white text-white"
              >
                Profil
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-normal text-lg flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded   md:border-0 md:hover:text-golden md:p-0 text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded   md:border-0 md:hover:text-golden md:p-0 text-white"
              >
                Riwayat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded   md:border-0 md:hover:text-golden md:p-0 text-white"
              >
                Keranjang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded   md:border-0 md:hover:text-golden md:p-0 text-white"
              >
                Profil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
