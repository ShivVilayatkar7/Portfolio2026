import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-900">
      <div className=" flex max-w-full items-center justify-between px-6 py-5 lg:px-30">
        <a
          href="#home"
          className="logo-font text-4xl text-white transition hover:text-[#A855F7]"
        >
          Shiv.
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-[#C9C3D4] transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#">
            <FaGithub size={22} />
          </a>

          <a href="#">
            <FaLinkedinIn size={22} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#14081F] md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FiX size={30} />
          </button>
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-6 flex gap-6">
              <FaGithub size={24} />
              <FaLinkedinIn size={24} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;