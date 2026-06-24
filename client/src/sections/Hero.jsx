import { motion } from "framer-motion";
import avatar from "../assets/avatar/avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-28 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#241537] px-4 py-2 text-sm text-[#C9C3D4]">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            Open to Internship Opportunities
          </div>
          <p className="mb-4 text-lg text-[#C9C3D4]">Hello! I'm Shiv</p>

          <h2 className="heading-font mb-2 text-2xl font-semibold text-white">
            A Full Stack Developer who
          </h2>

          <h1 className="heading-font text-5xl font-black leading-[0.99] text-white md:text-6xl">
            Builds products
            <br />
            that solve
            <br />
            real-world problems...
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#C9C3D4]">
            I specialize in building modern, scalable, and user-focused web
            applications using React, Node.js, MongoDB, and contemporary
            development practices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] px-7 py-3 font-semibold text-white transition hover:scale-105">
              View Work
            </button>

            <button className="rounded-full border border-[#8B5CF6] px-7 py-3 font-semibold text-white transition hover:bg-[#8B5CF6]/10">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-[#8B5CF6]/40 blur-[140px]" />

          <img
            src={avatar}
            alt="Avatar"
            className="relative z-10 w-full max-w-lg lg:max-w-l object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;