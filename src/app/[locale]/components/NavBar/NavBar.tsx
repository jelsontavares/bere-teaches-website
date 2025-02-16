"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { LocaleSelect } from "../../LocaleSelect";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo*/}
        <a href="#" className="flex items-center">
          <img src="/img/BERE-TEACHES_LOGO.png" alt="Logo" className="w-64" />
        </a>

        {/* Centralized navigation menu */}
        <ul className="hidden md:flex space-x-8 text-2xl font-bold text-black absolute left-1/2 transform -translate-x-1/2 ">
          <li><a href="#" className="hover:text-orange-600">Home</a></li>
          <li><a href="#" className="hover:text-orange-600">About Us</a></li>
          <li><a href="#services" className="hover:text-orange-600">Courses</a></li>
          <li><a href="#" className="hover:text-orange-600">Projects</a></li>
          <li><a href="#" className="hover:text-orange-600">Contact</a></li>
        </ul>

        {/* Language switcher button */}
        <div className="hidden md:flex items-center space-x-2" >
            <LocaleSelect />      
        </div>

        {/* Mobil menu button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden p-2 rounded-md focus:outline-none text-black"
          aria-label="Toggle menu"
        >
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {showMenu && (
        <ul className="md:hidden flex flex-col items-center font-bold space-y-4 bg-white text-black py-6 shadow-md">
          <li><a href="#" onClick={() => setShowMenu(false)}>Home</a></li>
          <li><a href="#" onClick={() => setShowMenu(false)}>About Us</a></li>
          <li><a href="#" onClick={() => setShowMenu(false)}>Courses</a></li>
          <li><a href="#" onClick={() => setShowMenu(false)}>Projects</a></li>
          <li><a href="#" onClick={() => setShowMenu(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
