import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-500">
          CargoCo
        </h1>

        {/* LINKS */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
          </li>


           <li>
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
          </li>

           <li>
            <a href="#fleetGallery" className="hover:text-blue-400 transition">
              FleetGallery
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
