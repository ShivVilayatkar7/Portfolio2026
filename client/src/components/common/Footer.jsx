import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#8B5CF6]/10 bg-[#11071A]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div>
            <h3 className="logo-font text-4xl text-white">Shiv.</h3>

            <p className="mt-2 text-[#C9C3D4]">
              Full Stack Developer
            </p>
          </div>

          {/* Center */}
          <p className="text-center text-sm text-[#8D859A]">
            © 2026 Shiv. All Rights Reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/ShivVilayatkar7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9C3D4] transition hover:text-[#8B5CF6]"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/shiv-vilayatkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9C3D4] transition hover:text-[#8B5CF6]"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;