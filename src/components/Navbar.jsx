import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import collegeLogo from "../assets/logoc2 - Copy.png";
import logotarcin from "../assets/Logo_Tarcin.png";
import tarcinlogo1 from "../assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Judges", href: "#judges" },
    { name: "Departments", href: "#departments" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled 
        ? "bg-[#004aad] shadow-lg" 
        : "bg-white shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        
        <div className="flex items-center gap-3">
          <img
            src={scrolled ? tarcinlogo1 : logotarcin}
            className="h-16 object-contain transition-all duration-300"
            alt="Tarcin Logo"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative group text-base font-bold tracking-wider py-2 transition-colors duration-300
              ${scrolled ? "text-white" : "text-gray-700 hover:text-[#004aad]"}`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300
                ${scrolled ? "bg-white" : "bg-[#004aad]"}`}
              ></span>
            </a>
          ))}
        </div>

        {/* RIGHT SIDE - COLLEGE LOGO (FIXED) */}
        <div className="flex items-center gap-4">

          {/* 🔥 Circular Logo Fix */}
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img
              src={collegeLogo}
              alt="College"
              className="h-full w-full object-cover"
            />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden outline-none ${scrolled ? "text-white" : "text-gray-800"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg font-bold tracking-wide hover:text-[#004aad] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}